import { CallToAction7, Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop, Services10, SlidingText3 } from '@/components';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

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

function ServicesAbout({ html }) {
    if (!html) return null;
    return (
        <div className="section-spacing pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-9">
                        <div
                            className="kef-html-content kef-services-about"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </div>
            <style>{`
                .kef-services-about p { line-height: 1.85; margin-bottom: 0.75rem; }
                .kef-services-about p:last-child { margin-bottom: 0; }
                .kef-services-about ul, .kef-services-about ol { padding-left: 1.4rem; margin-bottom: 0.75rem; }
                .kef-services-about li { line-height: 1.75; margin-bottom: 0.25rem; }
                .kef-services-about strong { font-weight: 600; }
                .kef-services-about h1, .kef-services-about h2, .kef-services-about h3,
                .kef-services-about h4, .kef-services-about h5, .kef-services-about h6 {
                    margin-top: 1.25rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
}

export default function PageInteriorServices({ cmsHeader, cmsHero, cmsSliding, cmsServicesAbout, cmsServices, cmsCTA, cmsSecondServices, cmsFooter }) {
    const themeData = mainData.pageInteriorServices;

    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedSliding = cmsSliding ?? slidingData.interior;
    const mergedServices = cmsServices ?? servicesData.interiorServices;
    const mergedCTA = { ...callToActionData.interiorServices, ...cmsCTA };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    const heroBg = cmsHero?.photo ? `url(${cmsHero.photo})` : `url(/images/bg.png)`;
    const heroTitle = cmsHero?.title || 'Hizmetlerimiz';

    return (
        <>
            <Head>
                <title>{`${themeData.title} - ${mainData.websiteTitle}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                {/* Hero */}
                <div className="bg-image parallax" style={{ backgroundImage: heroBg, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center center' }}>
                    <div className="section-spacing-xl bg-black-40">
                        <div className="container text-center">
                            <h1 className="display-2 fw-semi-bold uppercase mb-0">{heroTitle}</h1>
                        </div>
                    </div>
                </div>

                {/* Sliding */}
                <SlidingText3 data={mergedSliding} />

                {/* Services About */}
                <ServicesAbout html={cmsServicesAbout} />

                {/* Services */}
                <Services10 data={mergedServices} showIcon={false} />

                {/* Call to Action */}
                <CallToAction7 data={mergedCTA} />

                {/* Second Services */}
                {Array.isArray(cmsSecondServices) && cmsSecondServices.length > 0 && (
                    <div className="section-spacing">
                        <div className="container">
                            <h5 className="sm-heading mb-4">SERVİSLERİMİZ</h5>
                            <div className="row g-3" style={{ flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
                                {cmsSecondServices.map((s, i) => (
                                    <div key={i} style={{ flex: '0 0 calc(100% / 6)', minWidth: '140px' }}>
                                        {s.slug ? <Link href={`/second-services/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
                                        </Link> : <div style={{ display: 'block' }}>
                                            <div className="hover-border" style={{ padding: '12px' }}>
                                                {s.header_image && (
                                                    <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', borderRadius: '6px', overflow: 'hidden', marginBottom: '0.6rem' }}>
                                                        <img src={s.header_image} alt={s.title || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                )}
                                                <h6 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>{s.title}</h6>
                                            </div>
                                        </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <Footer3 data={mergedFooter} />
            </main>

            <Cursor />
            <ScrollToTop />
        </>
    )
}

async function getSecondServices() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'second_services/all', {
        cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
}

async function getHizmetlerimiz() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "hizmetlerimiz", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch hizmetlerimiz");
    return await res.json();
}

async function getNavItems() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "settings/menu", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch nav items");
    return await res.json();
}

async function getFooter() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "footer", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch footer");
    return await res.json();
}

async function getHeader() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "header", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch header");
    return await res.json();
}

export async function getServerSideProps() {
    try {
        const [hizmetlerimizResult, navItemsResult, footerResult, headerResult, secondServicesResult] = await Promise.allSettled([
            getHizmetlerimiz(), getNavItems(), getFooter(), getHeader(), getSecondServices()
        ]);
        const hizmetlerimizData  = hizmetlerimizResult.status  === 'fulfilled' ? hizmetlerimizResult.value  : {};
        const navItems           = navItemsResult.status       === 'fulfilled' ? navItemsResult.value       : [];
        const footerApiData      = footerResult.status         === 'fulfilled' ? footerResult.value         : {};
        const headerApiData      = headerResult.status         === 'fulfilled' ? headerResult.value         : {};
        const allSecondServices  = secondServicesResult.status === 'fulfilled' ? secondServicesResult.value : [];

        const {
            hero_text,
            hero_image,
            sliding_text,
            services,
            services_about,
            ready_text,
            ready_button,
        } = hizmetlerimizData;

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        return {
            props: {
                cmsHero: {
                    title: hero_text ?? null,
                    photo: hero_image ? baseUrl + hero_image : null,
                },
                cmsSliding: sliding_text ? { text: sliding_text } : null,
                cmsServicesAbout: services_about ? decodeHtml(services_about) : null,
                cmsServices: Array.isArray(services) && services.length
                    ? services.map((s, i) => ({
                        id: s.id ?? i,
                        slug: s.slug ?? null,
                        icon: s.service_icon?.trim() ?? 'bi-house-door',
                        title: s.service_header ?? null,
                        description: s.service_description ?? null,
                        imgSrc: s.service_header_image ? baseUrl + s.service_header_image : null,
                        orderMd: i % 2 !== 0,
                        active: i === 0,
                    }))
                    : null,
                cmsCTA: {
                    ...(hero_image && { backgroundImage: baseUrl + hero_image }),
                    ...(ready_text && { title: ready_text }),
                    ...(ready_button && { button: { text: ready_button, link: '/iletisim' } }),
                },
                cmsSecondServices: Array.isArray(allSecondServices) && allSecondServices.length
                    ? allSecondServices.map(s => ({
                        slug: s.slug ?? null,
                        title: s.header ?? null,
                        description: s.header_description ?? null,
                        icon: s.icon?.trim() ?? null,
                        header_image: s.header_image ? baseUrl + s.header_image : null,
                    }))
                    : [],
                cmsHeader: {
                    ...(headerApiData?.header_logo && { logoImage: baseUrl + headerApiData.header_logo }),
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
                    ...(Array.isArray(services) && services.length && {
                        footerServices: services.map(s => ({
                            text: s.service_header ?? '',
                            href: s.slug ? `/hizmetlerimiz/${s.slug}` : '/hizmetlerimiz',
                        })),
                    }),
                },
            },
        };
    } catch (err) {
        console.error("[hizmetlerimiz] getServerSideProps error:", err);
        return {
            props: {
                cmsHero: {},
                cmsSliding: null,
                cmsServicesAbout: null,
                cmsServices: null,
                cmsCTA: {},
                cmsHeader: {},
                cmsFooter: {},
            },
        };
    }
}