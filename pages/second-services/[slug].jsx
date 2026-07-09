import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { headerData } from '@/components/Header/HeaderData';
import { footerData } from '@/components/Footer/FooterData';
import { mainData } from '@/lib/data';

export default function SecondServiceDetay({ service, cmsHeader, cmsFooter }) {
    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    if (!service) return null;

    const heroBg = service.header_image || '/images/bg.png';

    return (
        <>
            <Head>
                <title>{`${service.title || 'Hizmet'} - ${mainData.websiteTitle}`}</title>
                <meta name="description" content={service.description?.slice(0, 160) || ''} />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* İçerik */}
                {service.description && (
                    <div className="section-spacing">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div style={{ whiteSpace: 'pre-line', textTransform: 'none', letterSpacing: 'normal', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                        {service.description}
                                    </div>
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

                <Footer3 data={mergedFooter} />
            </main>

            <Cursor />
            <ScrollToTop />
        </>
    );
}

async function getSecondServices() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'second_services/all', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch second_services');
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

async function getMainServices() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'services/all', {
        cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
}

export async function getServerSideProps({ params }) {
    const { slug } = params;

    try {
        const [secondServicesResult, navItemsResult, footerResult, headerResult, mainServicesResult] =
            await Promise.allSettled([
                getSecondServices(),
                getNavItems(),
                getFooter(),
                getHeaderMain(),
                getMainServices(),
            ]);

        const allSecondServices = secondServicesResult.status === 'fulfilled' ? secondServicesResult.value : [];
        const navItems          = navItemsResult.status          === 'fulfilled' ? navItemsResult.value      : [];
        const footerApiData     = footerResult.status            === 'fulfilled' ? footerResult.value        : {};
        const headerMainData    = headerResult.status            === 'fulfilled' ? headerResult.value        : {};
        const allServices       = mainServicesResult.status      === 'fulfilled' ? mainServicesResult.value  : [];

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        const items = Array.isArray(allSecondServices) ? allSecondServices : [];
        const raw = items.find(s => s.slug === slug || String(s.id) === slug);
        if (!raw) return { notFound: true };

        const service = {
            title: raw.header ?? null,
            description: raw.header_description ?? null,
            icon: raw.icon?.trim() ?? null,
            header_image: raw.header_image ? baseUrl + raw.header_image : null,
            slug: raw.slug,
        };

        const buildSocialLinks = (socials) =>
            (socials ?? []).map(s => {
                const link = s.social_link?.trim() ?? '';
                const href = link && !/^https?:\/\//i.test(link) ? `https://${link}` : link;
                return { href: href || '#', iconClass: s.social_icon?.trim() };
            });

        return {
            props: {
                service,
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
                        socialLinks: buildSocialLinks(footerApiData.socials),
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
                        socialLinks: buildSocialLinks(footerApiData.socials),
                    }),
                    ...(Array.isArray(allServices) && allServices.length && {
                        footerServices: allServices.map(s => ({
                            text: s.service_header ?? '',
                            href: s.slug ? `/hizmetlerimiz/${s.slug}` : '/hizmetlerimiz',
                        })),
                    }),
                },
            },
        };
    } catch (err) {
        console.error('[second-service-detay] getServerSideProps error:', err);
        return { notFound: true };
    }
}