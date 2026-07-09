import { Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

const PER_PAGE = 5;

function StarRating({ rating, reviewCount }) {
    if (!rating) return null;
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
        <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
            {Array.from({ length: full }).map((_, i) => (
                <i key={`f${i}`} className="bi bi-star-fill" style={{ color: '#c9a84c' }} />
            ))}
            {half && <i className="bi bi-star-half" style={{ color: '#c9a84c' }} />}
            {Array.from({ length: empty }).map((_, i) => (
                <i key={`e${i}`} className="bi bi-star" style={{ color: '#c9a84c' }} />
            ))}
            {reviewCount != null && (
                <span className="text-muted ms-1">({reviewCount})</span>
            )}
        </div>
    );
}

export default function Makaleler({ cmsHeader, cmsFooter, makaleler, heroBg }) {
    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(makaleler.length / PER_PAGE);
    const recentPaged = makaleler.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <>
            <Head>
                <title>{`Makaleler - ${mainData.websiteTitle}`}</title>
                <meta name="description" content="KEF Mimarlık makaleleri ve blog yazıları" />
            </Head>

            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                {/* Hero */}
                <div
                    className="bg-image parallax"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="section-spacing-xl bg-black-40">
                        <div className="container text-center">
                            <h1 className="display-2 fw-semi-bold uppercase mb-0">Makaleler</h1>
                        </div>
                    </div>
                </div>

                {makaleler.length === 0 ? (
                    <div className="section-spacing text-center">
                        <p className="text-muted">Henüz makale eklenmemiş.</p>
                    </div>
                ) : (
                    <>
                        {/* Son Makaleler — sol resim sağ metin, sayfalama */}
                        <div className="section-spacing">
                            <div className="container">
                                <div className="divider-side-line">
                                    <div className="h6 sm-heading mb-0 me-3">Son Makaleler</div>
                                </div>
                                {recentPaged.map((makale, i) => (
                                    <div key={makale.id ?? i} className="row g-3 align-items-center mt-1">
                                        <div className="col-12 col-md-4">
                                            <div className="border-radius" style={{ overflow: 'hidden', height: 200, position: 'relative' }}>
                                                <Link href={`/makaleler/${makale.slug}`} style={{ display: 'block', height: '100%' }}>
                                                    {makale.image ? (
                                                        <img
                                                            src={makale.image}
                                                            alt={makale.title ?? ''}
                                                            loading="lazy"
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                        />
                                                    ) : (
                                                        <div style={{ width: '100%', height: '100%', background: '#eee' }} />
                                                    )}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <ul className="list-inline-dash sm-heading mb-2" style={{ fontSize: '0.75rem' }}>
                                                {makale.category && <li>{makale.category}</li>}
                                                {makale.date && <li>{makale.date}</li>}
                                            </ul>
                                            <h5 className="mb-2">
                                                <Link className="link-hover-line" href={`/makaleler/${makale.slug}`}>
                                                    {makale.title}
                                                </Link>
                                            </h5>
                                            <StarRating rating={makale.rating} reviewCount={makale.reviewCount} />
                                            {makale.summary && (
                                                <p className="mb-2" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                                                    {makale.summary.length > 120 ? makale.summary.slice(0, 120) + '…' : makale.summary}
                                                </p>
                                            )}
                                            <Link className="button-fancy" href={`/makaleler/${makale.slug}`}>
                                                Devamını Oku
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                                {/* Sayfalama */}
                                {totalPages > 1 && (
                                    <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
                                        <button
                                            className="button button-sm button-rounded button-border"
                                            onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                            disabled={page === 1}
                                            style={{ opacity: page === 1 ? 0.4 : 1 }}
                                        >
                                            ← Önceki
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                                            <button
                                                key={n}
                                                className={`button button-sm button-rounded ${n === page ? 'button-dark' : 'button-border'}`}
                                                onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                                style={{ minWidth: 40 }}
                                            >
                                                {n}
                                            </button>
                                        ))}
                                        <button
                                            className="button button-sm button-rounded button-border"
                                            onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                            disabled={page === totalPages}
                                            style={{ opacity: page === totalPages ? 0.4 : 1 }}
                                        >
                                            Sonraki →
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}

                <Footer3 data={mergedFooter} />
            </main>

            <Cursor />
            <ScrollToTop />
        </>
    );
}

async function getMakalelerimiz() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "makalelerimiz", {
        cache: 'no-store'
    });
    if (!res.ok) return {};
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

export async function getServerSideProps() {
    try {
        const [navItemsResult, footerResult, headerResult, makalelerimizResult, hizmetlerimizResult] = await Promise.allSettled([
            getNavItems(), getFooter(), getHeaderMain(), getMakalelerimiz(), getHizmetlerimiz()
        ]);
        const navItems            = navItemsResult.status      === 'fulfilled' ? navItemsResult.value      : [];
        const footerApiData       = footerResult.status        === 'fulfilled' ? footerResult.value        : {};
        const headerMainData      = headerResult.status        === 'fulfilled' ? headerResult.value        : {};
        const makalelerimizData   = makalelerimizResult.status === 'fulfilled' ? makalelerimizResult.value : {};
        const hizmetlerimizData   = hizmetlerimizResult.status === 'fulfilled' ? hizmetlerimizResult.value : {};

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        const makalelerData = Array.isArray(makalelerimizData?.makaleler) ? makalelerimizData.makaleler : [];

        const heroBg = makalelerimizData?.hero_image
            ? baseUrl + makalelerimizData.hero_image
            : '/images/bg.png';

        return {
            props: {
                heroBg,
                makaleler: Array.isArray(makalelerData) ? makalelerData.map(m => ({
                    id: m.id ?? null,
                    title: m.yazi_basligi ?? null,
                    summary: m.kisa_aciklama ?? null,
                    image: m.one_cikan_gorsel ? baseUrl + m.one_cikan_gorsel : null,
                    category: m.etiketler?.split(',')[0]?.trim() ?? null,
                    date: m.createdAt?.slice(0, 10) ?? null,
                    slug: m.slug ?? null,
                    rating: m.degerlendirme_yildizi ?? null,
                    reviewCount: m.degerlendirme_adedi ?? null,
                })) : [],
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
        console.error('makaleler getServerSideProps error:', e);
        return { props: { makaleler: [], heroBg: '/images/bg.png', cmsHeader: {}, cmsFooter: {} } };
    }
}