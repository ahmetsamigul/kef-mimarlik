import React from 'react'

const CallToAction6 = ({ data }) => {
    return (
        <div className="bg-image parallax" style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
            <div className="section-spacing bg-black-50">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-lg-8 text-center text-lg-start">
                            <div className="text-white fw-semi-bold mb-0 uppercase" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.75rem)', lineHeight: 1.3 }}>{data.title}</div>
                        </div>
                        <div className="col-12 col-lg-4 text-center text-lg-end" data-cue="slideInLeft">
                            <a className="button button-rounded button-lg button-white-2 button-hover-slide" href={data.button.link} style={{ padding: '30px 68px', fontSize: '2rem' }}>
                                <span data-text={data.button.text}>{data.button.text}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction6