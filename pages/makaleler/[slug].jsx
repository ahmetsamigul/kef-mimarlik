import { Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function StarRating({ rating, reviewCount }) {
    if (!rating) return null;
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
        <div className="d-flex align-items-center gap-1 mt-2" style={{ fontSize: '1rem' }}>
            {Array.from({ length: full }).map((_, i) => (
                <i key={`f${i}`} className="bi bi-star-fill" style={{ color: '#c9a84c' }} />
            ))}
            {half && <i className="bi bi-star-half" style={{ color: '#c9a84c' }} />}
            {Array.from({ length: empty }).map((_, i) => (
                <i key={`e${i}`} className="bi bi-star" style={{ color: '#c9a84c' }} />
            ))}
            {reviewCount != null && (
                <span className="ms-2" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                    {reviewCount} değerlendirme
                </span>
            )}
        </div>
    );
}

export default function MakaleDetay({ cmsHeader, cmsFooter, makale, heroBg }) {
    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    if (!makale) return null;

    const tags = makale.etiketler ? makale.etiketler.split(',').map(t => t.trim()).filter(Boolean) : [];

    return (
        <>
            <Head>
                <title>{`${makale.yazi_basligi} - ${mainData.websiteTitle}`}</title>
                <meta name="description" content={makale.kisa_aciklama ?? ''} />
                <meta name="keywords" content={makale.etiketler ?? ''} />
            </Head>

            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                {/* Hero */}
                <div
                    className="bg-image parallax"
                    style={{
                        backgroundImage: `url(${makale.one_cikan_gorsel ?? heroBg})`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="section-spacing-xl bg-black-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1 col-xl-9 col-xxl-8">
                                    {tags.length > 0 && (
                                        <ul className="list-inline-dash mb-2">
                                            {tags.map((tag, i) => <li key={i}>{tag}</li>)}
                                        </ul>
                                    )}
                                    <h1 className="display-4 fw-medium">{makale.yazi_basligi}</h1>
                                    {makale.createdAt && (
                                        <div className="sm-heading mt-3">
                                            {makale.createdAt.slice(0, 10)}
                                        </div>
                                    )}
                                    <StarRating rating={makale.degerlendirme_yildizi} reviewCount={makale.degerlendirme_adedi} />
                                    {makale.kisa_aciklama && (
                                        <p className="mt-3 mb-0" style={{ fontSize: '1.05rem', opacity: 0.85, lineHeight: 1.6 }}>{makale.kisa_aciklama}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* İçerik */}
                <div className="section-spacing-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                {makale.yazi_icerigi && (
                                    <div dangerouslySetInnerHTML={{ __html: makale.yazi_icerigi }} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ayraç */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 offset-lg-1">
                            <hr className="hr-diagonal" />
                        </div>
                    </div>
                </div>

                {/* Etiketler ve Paylaş */}
                <div className="section-spacing-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6">
                                        {tags.length > 0 && (
                                            <ul className="list-inline">
                                                {tags.map((tag, i) => (
                                                    <li key={i}>
                                                        <a className="button button-xs button-radius button-outline-dashed" href="#">#{tag}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="col-12 col-md-6 text-md-end">
                                        <ul className="list-inline">
                                            <li>Paylaş:</li>
                                            <li>
                                                <a
                                                    href="#"
                                                    onClick={e => { e.preventDefault(); window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400'); }}
                                                    aria-label="Facebook'ta Paylaş"
                                                >
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    onClick={e => { e.preventDefault(); window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(makale.yazi_basligi ?? '')}`, '_blank', 'width=600,height=400'); }}
                                                    aria-label="X'te Paylaş"
                                                >
                                                    <i className="bi bi-twitter-x"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    onClick={e => { e.preventDefault(); window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400'); }}
                                                    aria-label="LinkedIn'de Paylaş"
                                                >
                                                    <i className="bi bi-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Geri Dön */}
                <div className="section-spacing-xs pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <Link
                                    href="/makaleler"
                                    className="button button-md button-rounded button-border"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <i className="bi bi-arrow-left"></i> Tüm Makalelere Dön
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer3 data={mergedFooter} />
            </main>

            <Cursor />
            <ScrollToTop />
        </>
    );
}

function decodeHtml(str) {
    if (!str) return str;
    let decoded = str;
    for (let i = 0; i < 3; i++) {
        decoded = decoded
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&nbsp;/g, ' ');
    }
    return decoded;
}

async function getMakaleler() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "makaleler/all", {
        cache: 'no-store'
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getBlog() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "blog", {
        cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json();
}

async function getNavItems() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "settings/menu", {
        cache: 'no-store'
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getFooter() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "footer", {
        cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json();
}

async function getHeaderMain() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "header", {
        cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json();
}

async function getHizmetlerimiz() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "hizmetlerimiz", {
        cache: 'no-store'
    });
    if (!res.ok) return {};
    return await res.json();
}

export async function getServerSideProps({ params }) {
    try {
        const [makalelerResult, blogResult, navItemsResult, footerResult, headerResult, hizmetlerimizResult] = await Promise.allSettled([
            getMakaleler(), getBlog(), getNavItems(), getFooter(), getHeaderMain(), getHizmetlerimiz()
        ]);

        const makalelerData     = makalelerResult.status     === 'fulfilled' ? makalelerResult.value     : [];
        const blogData          = blogResult.status          === 'fulfilled' ? blogResult.value          : null;
        const navItems          = navItemsResult.status      === 'fulfilled' ? navItemsResult.value      : [];
        const footerApiData     = footerResult.status        === 'fulfilled' ? footerResult.value        : {};
        const headerMainData    = headerResult.status        === 'fulfilled' ? headerResult.value        : {};
        const hizmetlerimizData = hizmetlerimizResult.status === 'fulfilled' ? hizmetlerimizResult.value : {};

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        const makale = Array.isArray(makalelerData)
            ? makalelerData.find(m => m.slug === params.slug) ?? null
            : null;

        if (!makale) return { notFound: true };

        if (makale.one_cikan_gorsel) {
            makale.one_cikan_gorsel = baseUrl + makale.one_cikan_gorsel;
        }

        if (makale.yazi_icerigi) {
            makale.yazi_icerigi = decodeHtml(makale.yazi_icerigi);
        }

        if (makale.yazi_icerigi) {
            makale.yazi_icerigi = makale.yazi_icerigi.replace(
                /(<img[^>]+src=")(?!https?:\/\/)(\/?)/gi,
                `$1${baseUrl}/`
            );
        }

        const heroBg = blogData?.makale_backround_image
            ? baseUrl + blogData.makale_backround_image
            : '/images/bg.png';

        return {
            props: {
                makale,
                heroBg,
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
    } catch (e) {
        console.error('makale detay getServerSideProps error:', e);
        return { notFound: true };
    }
}