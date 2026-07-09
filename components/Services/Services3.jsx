import Link from 'next/link'
import React, { useRef } from 'react'

const Services3 = ({ data }) => {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
        }
    };

    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <h2 className="fw-medium font-sloop" style={{ letterSpacing: '0.12em', fontSize: '2.8rem', whiteSpace: 'nowrap' }}>{data.description}</h2>
                    </div>
                </div>
                <div className="divider-side-line mt-3 mb-4 mb-lg-5">
                    <div className="h5 mb-0 me-3" style={{ letterSpacing: '0.08em' }}>{data.title}</div>
                    <div className="d-flex gap-2 ms-auto">
                        <button
                            onClick={() => scroll(-1)}
                            className="button-circle button-circle-outline-dashed"
                            style={{ cursor: 'pointer', flexShrink: 0 }}
                        >
                            <i className="bi bi-arrow-left"></i>
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            className="button-circle button-circle-dark"
                            style={{ cursor: 'pointer', flexShrink: 0 }}
                        >
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="hover-border-wrapper"
                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        gap: '8px',
                        paddingBottom: '4px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {(data.services ?? []).map((service, index) => (
                        <div
                            key={index}
                            style={{ minWidth: '260px', maxWidth: '300px', flex: '0 0 auto' }}
                        >
                            <Link href={service.link || '/hizmetlerimiz'} className="p-4 hover-border" style={{ height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                                <div className="icon-3xl mb-3">
                                    <i className={service.icon}></i>
                                </div>
                                <h4>{service.title}</h4>
                                <p style={{ flex: 1 }}>{service.description?.length > 220 ? service.description.slice(0, 220) + '…' : service.description}</p>
                                <span className="button-circle button-circle-outline-dashed mt-3" style={{ alignSelf: 'flex-start', marginTop: 'auto', pointerEvents: 'none', display: 'inline-flex', width: '50px', height: '50px', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services3