import { Cursor, Footer3, HeaderFullscreenMenu2, Portfolio2, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageMediaAgencyPortfolio({ cmsHeader, cmsFooter, cmsHero, cmsPortfolio }) {
    const themeData = mainData.pageMediaAgencyPortfolio;

    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };
    const mergedPortfolio = { ...portfolioData.interior, ...cmsPortfolio };

    const heroBg = cmsHero?.photo ? `url(${cmsHero.photo})` : `url(/images/bg.png)`;

    return (
        <>
            <Head>
                <title>{`${themeData.title} - ${mainData.websiteTitle}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu2 data={mergedHeader} />

            <main>
                {/* Page Title */}
                <div className="bg-image parallax" style={{ backgroundImage: heroBg, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center center' }}>
                    <div className="section-spacing-xl bg-black-40">
                    </div>
                </div>

                {/* Portfolio */}
                <Portfolio2 data={mergedPortfolio} />

                {/* Footer */}
                <Footer3 data={mergedFooter} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}

async function getProjelerimiz() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "projelerimiz", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch projelerimiz");
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


async function getHeaderMain() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "header", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch header");
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
        const [projelerimizResult, navItemsResult, footerResult, headerResult, hizmetlerimizResult] = await Promise.allSettled([
            getProjelerimiz(), getNavItems(), getFooter(), getHeaderMain(), getHizmetlerimiz()
        ]);
        const projelerimizData  = projelerimizResult.status  === 'fulfilled' ? projelerimizResult.value  : {};
        const navItems          = navItemsResult.status      === 'fulfilled' ? navItemsResult.value      : [];
        const footerApiData     = footerResult.status        === 'fulfilled' ? footerResult.value        : {};
        const headerMainData    = headerResult.status        === 'fulfilled' ? headerResult.value        : {};
        const hizmetlerimizData = hizmetlerimizResult.status === 'fulfilled' ? hizmetlerimizResult.value : {};

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');
        const { hero_image, hero_text, projects: apiProjects } = projelerimizData;
        const projelerimiz = Array.isArray(apiProjects) ? apiProjects : [];

        const toSlug = (str) => str
            ?.toLowerCase()
            .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
            .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') ?? '';

        return {
            props: {
                cmsHero: {
                    photo: hero_image ? baseUrl + hero_image : null,
                },
                cmsPortfolio: {
                    showAll: true,
                    ...(hero_text && { title: hero_text }),
                    ...(Array.isArray(projelerimiz) && projelerimiz.length && (() => {
                        const sorted = projelerimiz.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                        const projects = sorted.map((p, i) => {
                            const slug = p.slug || toSlug(p.project_header) || String(p.id ?? i);
                            return {
                                id: p.id ?? i,
                                title: p.project_header ?? null,
                                slug: `/projelerimiz/${slug}`,
                                mainImage: p.project_header_image ? baseUrl + p.project_header_image : null,
                            };
                        });
                        return { projects };
                    })()),
                },
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
    } catch (err) {
        console.error("[projelerimiz] getServerSideProps error:", err);
        return {
            props: {
                cmsHero: {},
                cmsPortfolio: {},
                cmsHeader: {},
                cmsFooter: {},
            },
        };
    }
}
