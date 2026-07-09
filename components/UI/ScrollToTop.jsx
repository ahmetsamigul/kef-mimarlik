import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scrolltotop icon-lg ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
            <i className="bi bi-arrow-up-short"></i>
        </div>
    );
};

export default ScrollToTop;
