import Image from 'next/image'
import React from 'react'

const Features2 = ({ data }) => {
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                {data.map((feature, index) => {
                    const title = feature.title;
                    const description = feature.description;
                    const iconClass = feature.iconClass;
                    const link = feature.link ?? '#';
                    const imageSrc = feature.gorsel ?? feature.image;
                    const isExternalUrl = typeof imageSrc === 'string' && imageSrc !== '';

                    return (
                        <div key={index} className="col-12 col-lg-4">
                            <a href={link} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                <div className="interactive-box" style={{ height: 378, position: 'relative', overflow: 'hidden' }}>
                                    {isExternalUrl
                                        ? <img src={imageSrc} alt={title || ''} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                        : imageSrc
                                            ? <Image src={imageSrc} alt={title || ''} loading="lazy" fill style={{ objectFit: 'cover' }} />
                                            : null
                                    }
                                    <div className="interactive-overlay">
                                        <div className="interactive-inner p-4 p-xl-5">
                                            <div className="icon-3xl mb-3">
                                                <i className={iconClass}></i>
                                            </div>
                                            <h5 className="mb-1">{title}</h5>
                                            <span>{description}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Features2