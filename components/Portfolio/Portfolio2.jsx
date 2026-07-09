import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Portfolio2 = ({ data }) => {
    const projects = data.showAll
        ? (data.projects ?? [])
        : (data.projects ?? []).slice(0, 4);

    const content = (
        <>
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h2 className="display-3 fw-semi-bold uppercase">{data.title ?? 'Our Recent Works'}</h2>
                </div>
            </div>
            <div className="row custom-row portfolio-grid mt-4 mt-lg-5">
                {projects.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 custom-col portfolio-item">
                        <div className="portfolio-box" data-hover-text="İncele">
                            <Link href={item.slug}>
                                <div className="portfolio-img" style={{ height: '320px', overflow: 'hidden' }}>
                                    {typeof item.mainImage === 'string'
                                        ? <img src={item.mainImage} alt={item.title || ''} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        : item.mainImage
                                            ? <Image src={item.mainImage} alt={item.title || ''} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            : null
                                    }
                                </div>
                                <div className="d-flex pt-3 justify-content-start align-items-start">
                                    <h3>{item.title}</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {!data.showAll && (
                <div className="text-center mt-5">
                    <Link href="/projelerimiz" className="button button-rounded button-lg button-white-2 button-hover-slide" style={{ padding: '22.5px 51px', fontSize: '1.5rem' }}>
                        <span data-text="Keşfedin">Keşfedin</span>
                    </Link>
                </div>
            )}
        </>
    );

    if (data.bgImage) {
        return (
            <div className="bg-image parallax" style={{ backgroundImage: `url(${data.bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center center' }}>
                <div className="section-spacing bg-black-50">
                    <div className="container">
                        {content}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section-spacing bg-dark">
            <div className="container">
                {content}
            </div>
        </div>
    );
}

export default Portfolio2