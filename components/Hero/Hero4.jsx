import React from 'react'

const Hero4 = ({ data }) => {
    return (
        <div className="bg-black-40" style={{ position: 'relative', overflow: 'hidden', padding: '300px 0' }}>
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
        </div>
    )
}

export default Hero4