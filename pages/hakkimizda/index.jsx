import { Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

/* ── Vizyon & Misyon kartları ── */
function VizyonMisyon({ data }) {
    if (!data?.vizyon && !data?.misyon) return null;
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4">
                    {data.vizyon && (
                        <div className="col-12 col-md-6">
                            <div className="kef-vm-card">
                                <div className="kef-vm-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 0 3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                                    </svg>
                                </div>
                                <h4 className="kef-vm-title">Vizyonumuz</h4>
                                <div
                                    className="kef-html-content kef-vm-text"
                                    dangerouslySetInnerHTML={{ __html: data.vizyon }}
                                />
                            </div>
                        </div>
                    )}
                    {data.misyon && (
                        <div className="col-12 col-md-6">
                            <div className="kef-vm-card">
                                <div className="kef-vm-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.818m2.562-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </div>
                                <h4 className="kef-vm-title">Misyonumuz</h4>
                                <div
                                    className="kef-html-content kef-vm-text"
                                    dangerouslySetInnerHTML={{ __html: data.misyon }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                .kef-vm-card {
                    border: 1px solid rgba(15, 47, 64, 0.12);
                    border-radius: 14px;
                    padding: 2.5rem 2rem;
                    height: 100%;
                    transition: box-shadow 0.3s ease, transform 0.3s ease;
                    background: transparent;
                }
                .kef-vm-card:hover {
                    box-shadow: 0 8px 32px rgba(15, 47, 64, 0.1);
                    transform: translateY(-3px);
                }
                .kef-vm-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 12px;
                    border: 1px solid rgba(15, 47, 64, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                    color: var(--color-dark, #0f2f40);
                }
                .kef-vm-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    letter-spacing: 0.05em;
                    color: var(--color-dark, #0f2f40);
                    text-transform: uppercase;
                }
                .kef-vm-text p {
                    margin-bottom: 0.5rem;
                }
                .kef-vm-text p:last-child {
                    margin-bottom: 0;
                }
            `}</style>
        </div>
    );
}

/* ── About9 (resimler + başlık + açıklama) ── */
function AboutImages({ data }) {
    return (
        <>
            <div className="section-spacing pt-0">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <h2 className="display-5 fw-medium">
                                {data.title?.first}{' '}
                                {data.title?.highlight && (
                                    <span className="text-highlight-gradient-2">{data.title.highlight}</span>
                                )}{' '}
                                {data.title?.last}
                            </h2>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .kef-img-wrap {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    height: 380px;
                }
                .kef-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease, filter 0.5s ease;
                    display: block;
                }
                .kef-img-wrap:hover img {
                    transform: scale(1.04);
                    filter: blur(2px) brightness(0.85);
                }
                .kef-img-wrap::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%);
                    border-radius: 12px;
                    pointer-events: none;
                }
            `}</style>
            <div className="section-spacing pt-0">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-md-4" style={{ marginTop: '2rem' }}>
                            <div className="kef-img-wrap">
                                {data.image1?.src && (
                                    <img src={data.image1.src} alt={data.image1.alt || ''} loading="lazy" />
                                )}
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="kef-img-wrap">
                                {data.image2?.src && (
                                    <img src={data.image2.src} alt={data.image2.alt || ''} loading="lazy" />
                                )}
                            </div>
                        </div>
                        <div className="col-12 col-md-4" style={{ marginTop: '2rem' }}>
                            <div className="kef-img-wrap">
                                {data.image3?.src && (
                                    <img src={data.image3.src} alt={data.image3.alt || ''} loading="lazy" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/* ── About12 (dönen metin + progress bar'lar + html içerik) ── */
function AboutSpinning({ data }) {
    return (
        <div className="section-spacing pt-0">
            <style>{`
                .kef-html-content p { line-height: 1.85; margin-bottom: 0.75rem; }
                .kef-html-content p:last-child { margin-bottom: 0; }
                .kef-html-content ul, .kef-html-content ol { padding-left: 1.4rem; margin-bottom: 0.75rem; }
                .kef-html-content li { line-height: 1.75; margin-bottom: 0.25rem; }
                .kef-html-content strong { font-weight: 600; }
                .kef-html-content a { text-decoration: underline; }
                .kef-html-content h1, .kef-html-content h2, .kef-html-content h3,
                .kef-html-content h4, .kef-html-content h5, .kef-html-content h6 {
                    margin-top: 1.25rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }
            `}</style>
            <div className="container">

                {/* HTML içerik - tam genişlik */}
                {data.htmlContent && (
                    <div className="row mb-5">
                        <div className="col-12">
                            <div
                                className="kef-html-content"
                                dangerouslySetInnerHTML={{ __html: data.htmlContent }}
                            />
                        </div>
                    </div>
                )}

                {/* Dönen daire + progress bar'lar */}
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-4">
                        <div className="circle-text rotating" style={{ position: 'relative' }}>
                            <svg viewBox="0 0 200 200" className="circle-svg">
                                <path
                                    id="textPath"
                                    d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                                    transform="translate(100,100)"
                                    fill="none"
                                    stroke="rgba(15, 47, 64, 0.1)"
                                    strokeWidth="10"
                                />
                                <text textAnchor="start">
                                    <textPath xlinkHref="#textPath" textLength="300%">
                                        {data.textPath}
                                    </textPath>
                                </text>
                            </svg>
                            {data.centerImage && (
                                <img
                                    src={data.centerImage}
                                    alt=""
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '55%',
                                        height: '55%',
                                        objectFit: 'contain',
                                        borderRadius: '50%',
                                        pointerEvents: 'none',
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="row g-4">
                            {(data.progressBars ?? []).map((progress, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div className="progress-box">
                                        <h5>{progress.label}</h5>
                                        <div className="animated-progress">
                                            <div
                                                data-progress={progress.value}
                                                className="progress-show"
                                                style={{ width: `${progress.value}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function PageInteriorAbout({ cmsHeader, cmsHero, cmsAbout, cmsVizyonMisyon, cmsAbout2, cmsFooter }) {
    const themeData = mainData.pageInteriorAbout;

    const mergedHeader = { ...headerData.interior, ...cmsHeader };
    const mergedFooter = { ...footerData.interior, ...cmsFooter };

    const heroBg = cmsHero?.photo ? `url(${cmsHero.photo})` : `url(/images/bg.png)`;
    const heroTitle = cmsHero?.title || 'Hakkımızda';

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

                {/* Vizyon & Misyon */}
                <VizyonMisyon data={cmsVizyonMisyon} />

                {/* Başlık + Görseller */}
                <AboutImages data={cmsAbout} />

                {/* HTML içerik + Dönen daire + Progress */}
                <AboutSpinning data={cmsAbout2} />

                <Footer3 data={mergedFooter} />
            </main>

            <Cursor />
            <ScrollToTop />
        </>
    )
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

async function getHakkimizda() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "hakkimizda", {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch hakkimizda");
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
    if (!res.ok) throw new Error("Failed to fetch hizmetlerimiz");
    return await res.json();
}

export async function getServerSideProps() {
    try {
        const [hakkimizdaResult, navItemsResult, footerResult, headerResult, hizmetlerimizResult] = await Promise.allSettled([
            getHakkimizda(), getNavItems(), getFooter(), getHeaderMain(), getHizmetlerimiz()
        ]);
        const hakkimizdaData  = hakkimizdaResult.status  === 'fulfilled' ? hakkimizdaResult.value  : {};
        const navItems        = navItemsResult.status    === 'fulfilled' ? navItemsResult.value    : [];
        const footerApiData   = footerResult.status      === 'fulfilled' ? footerResult.value      : {};
        const headerMainData  = headerResult.status      === 'fulfilled' ? headerResult.value      : {};
        const hizmetlerimizData = hizmetlerimizResult.status === 'fulfilled' ? hizmetlerimizResult.value : {};

        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/$/, '/');

        const {
            hero_text,
            hero_image,
            header1,
            header1_description,
            about_us_image1,
            about_us_image2,
            about_us_image3,
            spinning_text,
            spinning_text_image,
            progress,
            about_us_long_text,
            about_us,
            vizyon,
            misyon,
        } = hakkimizdaData;

        const aboutText = decodeHtml(about_us_long_text || about_us || null);

        return {
            props: {
                cmsHero: {
                    title: hero_text ?? null,
                    photo: hero_image ? baseUrl + hero_image : null,
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
                cmsAbout: {
                    ...(header1 && { title: { first: header1 } }),
                    ...(header1_description && { description: header1_description }),
                    ...(aboutText && !header1_description && { description: aboutText }),
                    facts: [],
                    ...(about_us_image1 && {
                        image1: { src: baseUrl + about_us_image1, alt: '' },
                        image2: { src: about_us_image2 ? baseUrl + about_us_image2 : null, alt: '' },
                        image3: { src: about_us_image3 ? baseUrl + about_us_image3 : null, alt: '' },
                    }),
                },
                cmsVizyonMisyon: {
                    vizyon: decodeHtml(vizyon ?? null),
                    misyon: decodeHtml(misyon ?? null),
                },
                cmsAbout2: {
                    ...(spinning_text && { textPath: spinning_text }),
                    ...(spinning_text_image && { centerImage: baseUrl + spinning_text_image }),
                    ...(aboutText && { htmlContent: aboutText }),
                    features: [],
                    ...(Array.isArray(progress) && progress.length && {
                        progressBars: progress.map(p => ({
                            label: p.progress_text1 ?? null,
                            value: p.progress_text_percentage ?? 0,
                        })),
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
        console.error("getServerSideProps error:", e);
        return {
            props: {
                cmsHero: {},
                cmsHeader: {},
                cmsAbout: {},
                cmsVizyonMisyon: {},
                cmsAbout2: {},
                cmsFooter: {},
            },
        };
    }
}