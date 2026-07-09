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

function decodeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&amp;lt;/g, '<')
        .replace(/&amp;gt;/g, '>')
        .replace(/&amp;amp;/g, '&')
        .replace(/&amp;quot;/g, '"')
        .replace(/&amp;#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

export default function HizmetDetay({ service, cmsSecondServices, cmsHeader, cmsFooter }) {
    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    const photos = service?.gallery ?? [];
    const [slideIndex, setSlideIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slidePrev = () => setSlideIndex(i => (i - 1 + photos.length) % photos.length);
    const slideNext = () => setSlideIndex(i => (i + 1) % photos.length);

    const handleImageClick = (idx) => {
        setLightboxIndex(idx);
        setLightboxOpen(true);
    };

    if (!service) return null;

    const heroBg = service.hero_image || service.header_image || '/images/bg.png';

    return (
        <>
            <Head>
                <title>{`${service.title || 'Hizmet'} - ${mainData.websiteTitle}`}</title>
                <meta name="description" content={service.description || ''} />
            </Head>

            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                {/* Hero */}
                <div
                    className="bg-image parallax"
                    style={{
                        backgroundImage: `url(${heroBg})`,
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
                                    {service.icon && (
                                        <div className="text-center mb-4">
                                            <i className={`${service.icon} text-white`} style={{ fontSize: '3rem' }} />
                                        </div>
                                    )}
                                    <h1 className="display-3 fw-medium text-center uppercase text-white">
                                        {service.title}
                                    </h1>
                                    {service.description && (
                                        <p className="text-center text-white mt-3 lead" style={{ opacity: 0.85 }}>
                                            {service.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* İçerik */}
                {service.text && (
                    <div className="section-spacing">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div
                                        style={{ textTransform: 'none', letterSpacing: 'normal' }}
                                        dangerouslySetInnerHTML={{ __html: service.text }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Galeri */}
                {photos.length > 0 && (
                    <div className="section-spacing pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div style={{ position: 'relative' }}>
                                        {/* Ana görsel */}
                                        <div
                                            className="img-link-box"
                                            style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}
                                        >
                                            <a
                                                className="glightbox"
                                                style={{ cursor: 'zoom-in', display: 'block' }}
                                                onClick={() => handleImageClick(slideIndex)}
                                            >
                                                <img
                                                    src={photos[slideIndex]}
                                                    alt={`${service.title || ''} - ${slideIndex + 1}`}
                                                    style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block', transition: 'opacity 0.3s' }}
                                                />
                                            </a>

                                            {/* Sayaç */}
                                            {photos.length > 1 && (
                                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.55)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', letterSpacing: '0.5px', pointerEvents: 'none' }}>
                                                    {slideIndex + 1} / {photos.length}
                                                </div>
                                            )}

                                            {/* Ok butonları */}
                                            {photos.length > 1 && (
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
                                                {photos.map((photo, i) => (
                                                    <img
                                                        key={i}
                                                        src={photo}
                                                        alt={`${service.title || ''} - ${i + 1}`}
                                                        onClick={() => setSlideIndex(i)}
                                                        style={{ width: '80px', height: '56px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer', flexShrink: 0, border: i === slideIndex ? '2px solid #222' : '2px solid transparent', opacity: i === slideIndex ? 1 : 0.5, transition: 'all 0.2s' }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header image — galeri yoksa göster */}
                {photos.length === 0 && service.header_image && (
                    <div className="section-spacing pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <img
                                        src={service.header_image}
                                        alt={service.title || ''}
                                        style={{
                                            width: '100%',
                                            maxHeight: '520px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Geri dön */}
                <div className="section-spacing-sm pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <hr className="hr-diagonal" />
                                <div className="mt-4">
                                    <Link className="button button-md button-rounded button-dark" href="/hizmetlerimiz">
                                        ← Tüm Hizmetler
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Services */}
                {Array.isArray(cmsSecondServices) && cmsSecondServices.length > 0 && (
                    <div className="section-spacing">
                        <div className="container">
                            <h5 className="sm-heading mb-4">SERVİSLERİMİZ</h5>
                            <div className="row g-3" style={{ flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
                                {cmsSecondServices.map((s, i) => (
                                    <div key={i} style={{ flex: '0 0 calc(100% / 6)', minWidth: '140px' }}>
                                        {s.slug ? (
                                            <Link href={`/second-services/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                                <div className="hover-border" style={{ padding: '12px' }}>
                                                    {s.header_image && (
                                                        <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.6rem' }}>
                                                            <img
                                                                src={s.header_image}
                                                                alt={s.title || ''}
                                                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    )}
                                                    <h6 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>{s.title}</h6>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="hover-border" style={{ padding: '12px' }}>
                                                {s.header_image && (
                                                    <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.6rem' }}>
                                                        <img src={s.header_image} alt={s.title || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                )}
                                                <h6 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>{s.title}</h6>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <Footer3 data={mergedFooter} />
            </main>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={photos.map(src => ({ src }))}
                plugins={[Zoom]}
            />

            <Cursor />
            <ScrollToTop />
        </>
    );
}

async function getServices() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'services/all', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch services');
    return await res.json();
}

async function getSecondServices() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'second_services/all', {
        cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getServicesImages() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'services_images/all', {
        cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getNavItems() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'settings/menu', {
        cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getFooter() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'footer', {
        cache: 'no-store',
    });
    if (!res.ok) return {};
    return await res.json();
}

async function getHeaderMain() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'header', {
        cache: 'no-store',
    });
    if (!res.ok) return {};
    return await res.json();
}

export async function getServerSideProps({ params }) {
    const { slug } = params;

    try {
        const [servicesResult, navItemsResult, footerResult, headerResult, imagesResult, secondServicesResult] = await Promise.allSettled([
            getServices(), getNavItems(), getFooter(), getHeaderMain(), getServicesImages(), getSecondServices(),
        ]);

        const servicesData       = servicesResult.status       === 'fulfilled' ? servicesResult.value       : [];
        const navItems           = navItemsResult.status       === 'fulfilled' ? navItemsResult.value       : [];
        const footerApiData      = footerResult.status         === 'fulfilled' ? footerResult.value         : {};
        const headerMainData     = headerResult.status         === 'fulfilled' ? headerResult.value         : {};
        const allImages          = imagesResult.status         === 'fulfilled' ? imagesResult.value         : [];
        const allSecondServices  = secondServicesResult.status === 'fulfilled' ? secondServicesResult.value : [];

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');
        const allServices = Array.isArray(servicesData) ? servicesData : [];

        const raw = allServices.find(s => s.slug === slug || String(s.id) === slug);
        if (!raw) return { notFound: true };

        const serviceCode = raw.service_code ?? null;
        const galleryImages = Array.isArray(allImages)
            ? allImages
                .filter(img => String(img.service_code) === String(serviceCode))
                .map(img => img.image ? baseUrl + img.image : null)
                .filter(Boolean)
            : [];

        const service = {
            title: raw.service_header ?? null,
            description: raw.service_description ?? null,
            icon: raw.service_icon?.trim() ?? null,
            text: raw.service_text ? decodeHtml(raw.service_text) : null,
            hero_image: raw.service_hero_image ? baseUrl + raw.service_hero_image : null,
            header_image: raw.service_header_image ? baseUrl + raw.service_header_image : null,
            slug: raw.slug,
            gallery: galleryImages,
        };

        const cmsSecondServices = Array.isArray(allSecondServices) && allSecondServices.length
            ? allSecondServices.map(s => ({
                slug: s.slug ?? null,
                title: s.header ?? null,
                description: s.header_description ?? null,
                icon: s.icon?.trim() ?? null,
                header_image: s.header_image ? baseUrl + s.header_image : null,
            }))
            : [];

        return {
            props: {
                service,
                cmsSecondServices,
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
                    ...(footerApiData?.footer_logo && { logoImage: baseUrl + footerApiData.footer_logo }),
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
                        socialLinks: footerApiData.socials.map(s => {
                            const link = s.social_link?.trim() ?? '';
                            const href = link && !/^https?:\/\//i.test(link) ? `https://${link}` : link;
                            return { href: href || '#', iconClass: s.social_icon?.trim() };
                        }),
                    }),
                    ...(allServices.length && {
                        footerServices: allServices.map(s => ({
                            text: s.service_header ?? '',
                            href: s.slug ? `/hizmetlerimiz/${s.slug}` : '/hizmetlerimiz',
                        })),
                    }),
                },
            },
        };
    } catch (err) {
        console.error('[hizmet-detay] getServerSideProps error:', err);
        return { notFound: true };
    }
}
