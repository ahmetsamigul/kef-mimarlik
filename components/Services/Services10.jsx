import Link from 'next/link'
import React from 'react'

const Services10 = ({ data, showIcon = true }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="d-flex flex-column gap-3">
                    {data.map((service, i) => {
                        const cardInner = (
                            <>
                                {service.imgSrc && (
                                    <div className="kef-service-card-img">
                                        <img src={service.imgSrc} alt={service.title || ''} loading="lazy" />
                                    </div>
                                )}
                                <div className="kef-service-card-body">
                                    {showIcon && service.icon && (
                                        <div className="icon-xl mb-2">
                                            <i className={`bi ${service.icon}`}></i>
                                        </div>
                                    )}
                                    <h4 className="mb-2">{service.title}</h4>
                                    <p className="mb-0" style={{ opacity: 0.75, lineHeight: 1.7 }}>{service.description}</p>
                                    {service.slug && (
                                        <span className="button-circle button-circle-outline-dashed mt-4" style={{ pointerEvents: 'none', display: 'inline-flex', width: '50px', height: '50px', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    )}
                                </div>
                            </>
                        );

                        return service.slug ? (
                            <Link key={service.id ?? i} className="kef-service-card hover-border" href={`/hizmetlerimiz/${service.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {cardInner}
                            </Link>
                        ) : (
                            <div key={service.id ?? i} className="kef-service-card hover-border">
                                {cardInner}
                            </div>
                        );
                    })}
                </div>
            </div>
            <style>{`
                .kef-service-card {
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .kef-service-card-img {
                    flex: 0 0 340px;
                    max-width: 340px;
                    overflow: hidden;
                }
                .kef-service-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s ease;
                }
                .kef-service-card:hover .kef-service-card-img img {
                    transform: scale(1.04);
                }
                .kef-service-card-body {
                    flex: 1;
                    padding: 2.5rem 2.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                @media (max-width: 767px) {
                    .kef-service-card { flex-direction: column; }
                    .kef-service-card-img { flex: 0 0 220px; max-width: 100%; height: 220px; }
                    .kef-service-card-body { padding: 1.5rem; }
                }
            `}</style>
        </div>
    )
}

export default Services10