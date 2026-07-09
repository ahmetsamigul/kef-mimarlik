import React from 'react'

const Hero4 = ({ data }) => {
    return (
        <div className="section-spacing-xl bg-black-40" style={{ padding: '60px 0' }}>
            <div className="bg-video">
                {data.youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${data.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${data.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
                        allow="autoplay; fullscreen"
                        frameBorder="0"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '177.78vh',
                            minWidth: '100%',
                            height: '56.25vw',
                            minHeight: '100%',
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                        }}
                    />
                ) : (
                    <video key={data.videoSrc} playsInline autoPlay muted loop>
                        <source src={data.videoSrc} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <div style={{ padding: '8px 0' }}>
                            {data.heroPng ? (
                                <img
                                    src={data.heroPng}
                                    alt={data.title || ''}
                                    style={{ width: '63%', height: 'auto', maxWidth: '630px', display: 'inline-block' }}
                                />
                            ) : (
                                <h1 className="display-1 fw-semi-bold uppercase mb-0">{data.title}</h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4