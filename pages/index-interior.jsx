import { Cursor, Features2, Footer3, HeaderFullscreenMenu2, Hero4, Portfolio2, ScrollToTop, Services3, SlidingText3, Testimonial4 } from '@/components';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexInterior({ cmsHeader, cmsHero, cmsSliding, cmsFeatures, cmsServices, cmsPortfolio, cmsTestimonial, cmsFooter }) {
    const themeData = mainData.interior;

    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedHero = { ...heroData.interior, ...cmsHero };
    const mergedSliding = cmsSliding ?? slidingData.interior;
    const mergedFeatures = cmsFeatures ?? featuresData.interior;
    const mergedServices = cmsServices ?? servicesData.interior;
    const mergedPortfolio = cmsPortfolio ?? portfolioData.interior;
    const mergedTestimonial = cmsTestimonial ?? testimonialData.interior;
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

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
                {/* Hero */}
                <Hero4 data={mergedHero} />

                {/* Sliding */}
                <SlidingText3 data={mergedSliding} />

                {/* Features */}
                <Features2 data={mergedFeatures} />

                {/* Services */}
                <Services3 data={mergedServices} />

                {/* Portfolio */}
                <Portfolio2 data={mergedPortfolio} />

                {/* Testimonial */}
                <Testimonial4 data={mergedTestimonial} />

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

async function getAnasayfa() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "anasayfa", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch anasayfa");
    return await res.json();
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

export async function getServerSideProps() {
    try {
        const [
            anasayfaResult,
            footerResult,
            navItemsResult,
            headerResult,
        ] = await Promise.allSettled([
            getAnasayfa(),
            getFooter(),
            getNavItems(),
            getHeader(),
        ]);

        const anasayfaData   = anasayfaResult.status   === 'fulfilled' ? anasayfaResult.value   : {};
        const footerApiData  = footerResult.status     === 'fulfilled' ? footerResult.value     : {};
        const navItems       = navItemsResult.status   === 'fulfilled' ? navItemsResult.value   : [];
        const headerApiData  = headerResult.status     === 'fulfilled' ? headerResult.value     : {};

        const {
            hero_text,
            hero_png,
            video_url,
            sliding_referances,
            services_header2,
            services_header1,
            services,
            second_services,
            project_header1,
            projects,
            projects_bg,
            customer_comments_header,
            customers,
        } = anasayfaData;

        const getYoutubeId = (url) => {
            if (!url) return null;
            const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
            return match ? match[1] : null;
        };
        const youtubeId = getYoutubeId(video_url);

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

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        const toSlug = (str) => str
            ?.toLowerCase()
            .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
            .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') ?? '';

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
                cmsHero: {
                    ...(hero_text && { title: hero_text }),
                    ...(hero_png && { heroPng: baseUrl + hero_png }),
                    ...(youtubeId && { youtubeId }),
                },
                cmsSliding: Array.isArray(sliding_referances) && sliding_referances.length
                    ? {
                        images: sliding_referances
                            .map(r => r.reference_logo ? baseUrl + r.reference_logo : null)
                            .filter(Boolean),
                    }
                    : null,
                cmsFeatures: Array.isArray(services) && services.length
                    ? services.map(s => ({
                        title: s.service_header ?? null,
                        description: s.service_description ?? null,
                        iconClass: s.service_icon?.trim() ?? null,
                        gorsel: s.service_header_image ? baseUrl + s.service_header_image : null,
                        link: s.slug ? `/hizmetlerimiz/${s.slug}` : '/hizmetlerimiz',
                    }))
                    : null,
                cmsServices: (services_header1 || services_header2 || second_services?.length)
                    ? {
                        ...(services_header1 && { title: services_header1 }),
                        ...(services_header2 && { description: services_header2 }),
                        ...(second_services?.length && {
                            services: second_services.map(s => ({
                                title: s.header ?? null,
                                description: s.header_description ?? null,
                                icon: s.icon?.trim() ?? null,
                                link: s.slug ? `/second-services/${s.slug}` : '/hizmetlerimiz',
                            })),
                        }),
                    }
                    : null,
                cmsPortfolio: (project_header1 || projects?.length)
                    ? (() => {
                        const sortedProjects = (projects ?? [])
                            .slice()
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                        const mappedProjects = sortedProjects.map(p => ({
                            title: p.project_header ?? null,
                            slug: `/projelerimiz/${p.slug || toSlug(p.project_header) || p.id}`,
                            mainImage: p.project_header_image ? baseUrl + p.project_header_image : null,
                        }));
                        return {
                            ...(project_header1 && { title: project_header1 }),
                            ...(projects_bg && { bgImage: baseUrl + projects_bg }),
                            projects: mappedProjects,
                        };
                    })()
                    : null,
                cmsTestimonial: (customer_comments_header || customers?.length)
                    ? {
                        ...(customer_comments_header && { title: customer_comments_header }),
                        ...(customers?.length && {
                            testimonial: customers.map(c => ({
                                rating: 5,
                                text: c.customer_comment ?? null,
                                name: c.customer_name ?? null,
                                position: c.customer_role ?? null,
                                avatar: {
                                    image: c.customer_image ? baseUrl + c.customer_image : null,
                                    alt: c.customer_name ?? '',
                                },
                            })),
                        }),
                    }
                    : null,
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
                            return {
                                href: href || '#',
                                iconClass: s.social_icon?.trim(),
                            };
                        }),
                    }),
                    ...(services?.length && {
                        footerServices: services.map(s => ({
                            text: s.service_header ?? '',
                            href: s.slug ? `/hizmetlerimiz/${s.slug}` : '/hizmetlerimiz',
                        })),
                    }),
                },
            },
        };
    } catch {
        return {
            props: {
                cmsHeader: {},
                cmsHero: {},
                cmsSliding: null,
                cmsFeatures: null,
                cmsServices: null,
                cmsPortfolio: null,
                cmsTestimonial: null,
                cmsFooter: {},
            },
        };
    }
}