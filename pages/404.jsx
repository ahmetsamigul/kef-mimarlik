import { Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Page404({ cmsHeader, cmsFooter }) {
    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    return (
        <>
            <Head>
                <title>Sayfa Bulunamadı - {mainData.websiteTitle}</title>
                <meta name="description" content="Aradığınız sayfa bulunamadı." />
            </Head>

            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                <div
                    className="bg-image parallax"
                    style={{
                        backgroundImage: `url(/images/bg.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center center',
                    }}
                >
                    <div className="section-spacing-xl bg-black-40 d-flex align-items-center" style={{ minHeight: '80vh' }}>
                        <div className="container text-center">
                            <h1 className="display-1 fw-semi-bold stroke-text mb-0">404</h1>
                            <h2 className="display-4 fw-light mt-3 mb-4">Sayfa Bulunamadı</h2>
                            <p className="mb-5" style={{ fontSize: '1.1rem', opacity: 0.85 }}>
                                Aradığınız sayfa taşınmış veya mevcut değil.
                            </p>
                            <Link className="button button-md button-rounded button-outline-dashed button-hover-slide" href="/">
                                <span data-text="Ana Sayfaya Dön">Ana Sayfaya Dön</span>
                            </Link>
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

async function getFooter() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "footer", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch footer");
    return await res.json();
}

async function getNavItems() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "settings/menu", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch nav items");
    return await res.json();
}

async function getHeader() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "header", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch header");
    return await res.json();
}

export async function getStaticProps() {
    try {
        const [footerResult, navItemsResult, headerResult] = await Promise.allSettled([
            getFooter(),
            getNavItems(),
            getHeader(),
        ]);

        const footerApiData  = footerResult.status   === 'fulfilled' ? footerResult.value   : {};
        const navItems       = navItemsResult.status === 'fulfilled' ? navItemsResult.value : [];
        const headerApiData  = headerResult.status   === 'fulfilled' ? headerResult.value   : {};

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        const { header_logo } = headerApiData;
        const {
            footer_logo,
            footer_logo_description,
            footer_mail,
            footer_work_hours,
            footer_phone_number,
            footer_contact_via,
            footer_copy_right_text,
            socials,
            adress,
        } = footerApiData;

        return {
            props: {
                cmsHeader: {
                    ...(header_logo && { logoImage: baseUrl + header_logo }),
                    ...(navItems?.length && {
                        menuItems: navItems.map(item => ({
                            text: item.text,
                            href: item.href,
                        })),
                    }),
                    ...(adress && { address: adress }),
                    contact: {
                        phone1: footer_phone_number ?? null,
                        phone2: null,
                        gsm: footerApiData?.footer_gsm_number ?? null,
                        email: footer_mail ?? null,
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
                    ...(footer_logo && { logoImage: baseUrl + footer_logo }),
                    ...(footer_logo_description && { logoText: footer_logo_description }),
                    ...(footer_mail && { email: footer_mail }),
                    ...(footer_work_hours && { emailInfo: footer_work_hours }),
                    ...(footer_phone_number && { phone: footer_phone_number }),
                    ...(footer_contact_via && { phoneInfo: footer_contact_via }),
                    ...(footer_copy_right_text && { rights: footer_copy_right_text }),
                    ...(adress && { address: adress }),
                    ...(footerApiData?.footer_gsm_number && { gsm: footerApiData.footer_gsm_number }),
                    ...(footerApiData?.adress_second && { addressSecond: footerApiData.adress_second }),
                    ...(socials?.length && {
                        socialLinks: socials.map(s => {
                            const link = s.social_link?.trim() ?? '';
                            const href = link && !/^https?:\/\//i.test(link) ? `https://${link}` : link;
                            return { href: href || '#', iconClass: s.social_icon?.trim() };
                        }),
                    }),
                },
            },
            revalidate: 60,
        };
    } catch {
        return {
            props: {
                cmsHeader: {},
                cmsFooter: {},
            },
            revalidate: 60,
        };
    }
}