import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { headerData } from '@/components/Header/HeaderData';
import { footerData } from '@/components/Footer/FooterData';
import { mainData } from '@/lib/data';

export default function ProjeDetay({ project, cmsHeader, cmsFooter }) {
    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const photos = Array.isArray(project?.project_photos) ? project.project_photos : [];
    const slidePrev = () => setSlideIndex(i => (i - 1 + photos.length) % photos.length);
    const slideNext = () => setSlideIndex(i => (i + 1) % photos.length);

    const imageSlides = photos.filter(p => p.type === 'image').map(p => ({ src: p.src }));
    const currentItem = photos[slideIndex];

    return (
        <>
            <Head>
                <title>{`${project?.project_name || 'Proje'} - ${mainData.websiteTitle}`}</title>
                <meta name="description" content={project?.project_description || ''} />
            </Head>

            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                {/* Hero */}
                <div
                        className="bg-image parallax"
                        style={{
                            backgroundImage: `url(${project?.project_photo || '/images/bg.png'})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center center',
                        }}
                    >
                        <div className="section-spacing-xl bg-black-40">
                            <div className="container pb-5 pt-lg-4 pt-xl-5">
                                <div className="row">
                                    <div className="col-12 col-lg-10 offset-lg-1">
                                        <h1 className="display-3 fw-medium text-center uppercase text-white">
                                            {project?.project_name}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {project?.project_tags && (
                                <div className="position-absolute bottom-0 start-0 w-100 text-lg-center">
                                    <div className="row g-0 justify-content-center">
                                        <div className="col-auto">
                                            <div className="px-4 pb-4">
                                                <span className="d-block sm-heading text-white">Kategori</span>
                                                <span className="text-white">{project.project_tags}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                </div>

                {/* Proje Detay */}
                <div className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">

                                {/* Açıklama */}
                                {project?.project_description && (
                                    <p className="lead mb-5">{project.project_description}</p>
                                )}

                                {/* Medya Galerisi */}
                                {photos.length > 0 && (
                                    <div className="mt-5" style={{ position: 'relative' }}>
                                        {/* Ana medya */}
                                        <div
                                            className="img-link-box"
                                            style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', background: '#000' }}
                                        >
                                            {currentItem?.type === 'video' ? (
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${currentItem.videoId}?autoplay=0&rel=0`}
                                                    title={`${project.project_name} - video ${slideIndex + 1}`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{ width: '100%', height: '520px', border: 'none', display: 'block' }}
                                                />
                                            ) : (
                                                <a
                                                    className="glightbox"
                                                    style={{ cursor: 'zoom-in', display: 'block' }}
                                                    onClick={() => {
                                                        const imgIndex = imageSlides.findIndex(s => s.src === currentItem?.src);
                                                        if (imgIndex >= 0) handleImageClick(imgIndex);
                                                    }}
                                                >
                                                    <img
                                                        src={currentItem?.src}
                                                        alt={`${project.project_name} - ${slideIndex + 1}`}
                                                        style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block', transition: 'opacity 0.3s' }}
                                                    />
                                                </a>
                                            )}

                                            {/* Sayaç */}
                                            {photos.length > 1 && (
                                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.55)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', letterSpacing: '0.5px', pointerEvents: 'none' }}>
                                                    {slideIndex + 1} / {photos.length}
                                                </div>
                                            )}

                                            {/* Ok butonları — videoda gösterme */}
                                            {photos.length > 1 && currentItem?.type !== 'video' && (
                                                <>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); slidePrev(); }}
                                                        aria-label="Önceki"
                                                        style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}
                                                    >
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); slideNext(); }}
                                                        aria-label="Sonraki"
                                                        style={{ position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}
                                                    >
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                        {/* Thumbnail şeridi */}
                                        {photos.length > 1 && (
                                            <div style={{ display: 'flex', gap: '8px', marginTop: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
                                                {photos.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        onClick={() => setSlideIndex(i)}
                                                        style={{ position: 'relative', width: '80px', height: '56px', flexShrink: 0, borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: i === slideIndex ? '2px solid #222' : '2px solid transparent', opacity: i === slideIndex ? 1 : 0.5, transition: 'all 0.2s' }}
                                                    >
                                                        <img
                                                            src={item.type === 'video' ? item.thumb : item.src}
                                                            alt={`${project.project_name} - ${i + 1}`}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                        />
                                                        {item.type === 'video' && (
                                                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)' }}>
                                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Geri Dön */}
                                <div className="mt-5">
                                    <Link href="/projelerimiz" className="button button-sm button-rounded button-dark button-hover-slide">
                                        <span data-text="← Tüm Projeler">← Tüm Projeler</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer3 data={mergedFooter} />
            </main>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={currentIndex}
                slides={imageSlides}
                plugins={[Zoom]}
                on={{ view: ({ index }) => setCurrentIndex(index) }}
            />

            <Cursor />
            <ScrollToTop />
        </>
    );
}

async function getProjects() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'projects/all', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
}

async function getProjeResimleri() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'project_images/all', {
        cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getNavItems() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'settings/menu', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch nav items');
    return await res.json();
}

async function getFooter() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'footer', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch footer');
    return await res.json();
}

async function getHeaderMain() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'header', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch header');
    return await res.json();
}

async function getHizmetlerimiz() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'hizmetlerimiz', {
        cache: 'no-store',
    });
    if (!res.ok) return {};
    return await res.json();
}

export async function getServerSideProps({ params }) {
    const { slug } = params;

    try {
        const [projectsResult, resimleriResult, navItemsResult, footerResult, headerResult, hizmetlerimizResult] = await Promise.allSettled([
            getProjects(), getProjeResimleri(), getNavItems(), getFooter(), getHeaderMain(), getHizmetlerimiz(),
        ]);

        const projectsData      = projectsResult.status      === 'fulfilled' ? projectsResult.value      : [];
        const allResimleriData  = resimleriResult.status     === 'fulfilled' ? resimleriResult.value      : [];
        const navItems          = navItemsResult.status      === 'fulfilled' ? navItemsResult.value       : [];
        const footerApiData     = footerResult.status        === 'fulfilled' ? footerResult.value         : {};
        const headerMainData    = headerResult.status        === 'fulfilled' ? headerResult.value         : {};
        const hizmetlerimizData = hizmetlerimizResult.status === 'fulfilled' ? hizmetlerimizResult.value  : {};

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');
        const allProjects = Array.isArray(projectsData) ? projectsData : [];
        const allResimleri = Array.isArray(allResimleriData) ? allResimleriData : [];

        console.log('[proje-detay] resimleri/all sample:', JSON.stringify(allResimleri.slice(0, 2), null, 2));

        const toSlug = (str) => str
            ?.toLowerCase()
            .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
            .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') ?? '';

        const raw = allProjects.find(p =>
            (p.slug && p.slug === slug) || toSlug(p.project_header) === slug || String(p.id) === slug
        );

        if (!raw) return { notFound: true };

        const photoUrl = (path) => path ? baseUrl + path : null;

        // project_code eşleşen medyaları filtrele
        const matchCode = raw.project_code ?? raw.id;
        const project_photos = allResimleri
            .filter(r => String(r.project_code) === String(matchCode))
            .map(r => {
                const hasVideo = r.video_url && r.video_url.trim() !== '';
                const hasImage = r.project_image && r.project_image.trim() !== '';
                if (hasVideo) {
                    const ytMatch = r.video_url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
                    const videoId = ytMatch ? ytMatch[1] : null;
                    return videoId ? { type: 'video', videoId, thumb: hasImage ? photoUrl(r.project_image) : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` } : null;
                }
                if (hasImage) {
                    return { type: 'image', src: photoUrl(r.project_image) };
                }
                return null;
            })
            .filter(Boolean);

        console.log('[proje-detay] matchCode:', matchCode, '| project_photos:', project_photos);

        const project = {
            project_name: raw.project_header ?? null,
            project_description: raw.procet_description ?? raw.project_description ?? null,
            project_tags: raw.project_tag ?? null,
            project_photo: photoUrl(raw.project_header_image),
            project_photos,
            slug: raw.slug,
        };

        return {
            props: {
                project,
                cmsHeader: {
                    ...(headerMainData?.header_logo && { logoImage: baseUrl + headerMainData.header_logo }),
                    ...(navItems?.length && {
                        menuItems: navItems.map(item => ({ text: item.text, href: item.href })),
                    }),
                    ...(footerApiData?.adress && { address: footerApiData.adress }),
                    contact: {
                        phone1: footerApiData?.footer_phone_number ?? null,
                        phone2: null,
                        gsm: footerApiData?.footer_gsm_number ?? null,
                        email: footerApiData?.footer_mail ?? null,
                    },
                    ...(footerApiData?.adress_second && { addressSecond: footerApiData.adress_second }),
                    ...(footerApiData?.socials?.length && {
                        socialLinks: footerApiData.socials.map(s => {
                            const link = s.social_link?.trim() ?? '';
                            const href = link && !/^https?:\/\//i.test(link) ? `https://${link}` : link;
                            return { href: href || '#', iconClass: s.social_icon?.trim() };
                        }),
                    }),
                },
                cmsFooter: {
                    ...(footerApiData?.footer_logo && { logoImage: (footerApiData.footer_logo.startsWith('http') ? '' : (process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/'))) + footerApiData.footer_logo }),
                    ...(footerApiData?.footer_logo_description && { logoText: footerApiData.footer_logo_description }),
                    ...(footerApiData?.footer_mail && { email: footerApiData.footer_mail }),
                    ...(footerApiData?.footer_work_hours && { emailInfo: footerApiData.footer_work_hours }),
                    ...(footerApiData?.footer_phone_number && { phone: footerApiData.footer_phone_number }),
                    ...(footerApiData?.footer_contact_via && { phoneInfo: footerApiData.footer_contact_via }),
                    ...(footerApiData?.footer_copy_right_text && { rights: footerApiData.footer_copy_right_text }),
                    ...(footerApiData?.adress && { address: footerApiData.adress }),
                    ...(footerApiData?.footer_gsm_number && { gsm: footerApiData.footer_gsm_number }),
                    ...(footerApiData?.adress_second && { addressSecond: footerApiData.adress_second }),
                    ...(footerApiData?.socials?.length && {
                        socialLinks: footerApiData.socials.map(s => ({
                            href: s.social_link?.startsWith('http') ? s.social_link : `https://${s.social_link}`,
                            iconClass: s.social_icon?.trim(),
                        })),
                    }),
                    ...(Array.isArray(hizmetlerimizData?.services) && hizmetlerimizData.services.length && {
                        footerServices: hizmetlerimizData.services.map(s => ({
                            text: s.service_header ?? '',
                            href: s.slug ? `/hizmetlerimiz/${s.slug}` : '/hizmetlerimiz',
                        })),
                    }),
                },
            },
        };
    } catch (err) {
        console.error('[proje-detay] getServerSideProps error:', err);
        return { notFound: true };
    }
}