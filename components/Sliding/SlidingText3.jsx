import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

const SlidingText3 = ({ data }) => {
    const minSlides = 20;

    if (data.images?.length) {
        const base = data.images;
        // Her zaman tam 2 set: ilk yarı görünür, ikinci yarı seamless loop için
        const half = Math.max(1, Math.ceil(minSlides / base.length));
        const slides = [
            ...Array.from({ length: half }, () => base).flat(),
            ...Array.from({ length: half }, () => base).flat(),
        ];

        return (
            <div className="bg-white overflow-hidden" style={{ width: '100%', padding: '28px 0' }}>
                <div className="kef-marquee-track">
                    {slides.map((src, index) => (
                        <div
                            key={index}
                            style={{
                                width: '140px',
                                height: '72px',
                                flexShrink: 0,
                                marginRight: '64px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={src}
                                alt={`Referans ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.75,
                                    transition: 'filter 0.3s ease, opacity 0.3s ease',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
                                onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.75'; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const base = data.texts ?? [];
    if (!base.length) return null;
    const times = Math.ceil(minSlides / base.length);
    const slides = Array.from({ length: times }, () => base).flat();
    const canLoop = slides.length >= 6;

    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={70}
            speed={20000}
            loop={canLoop}
            allowTouchMove={false}
            autoplay={{
                delay: 0,
                clickable: false,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="sliding-text bg-white py-3">
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <h2 className="display-1 font-family-poppins fw-bold stroke-text uppercase mb-0">{item.text}</h2>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SlidingText3;