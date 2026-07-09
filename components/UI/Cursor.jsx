import { useRef, useEffect } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorInner = cursorInnerRef.current;

        const hoverTitle = document.querySelectorAll("div[data-hover-title]");
        const hoverTitleDark = document.querySelectorAll("div[data-hover-title-dark]");
        const hoverText = document.querySelectorAll("div[data-hover-text]");
        const hoverTextDark = document.querySelectorAll("div[data-hover-text-dark]");
        const hoverImgs = document.querySelectorAll("[data-hover-img]");

        const handleMouseMove = (event) => {
            cursor.style.left = event.pageX + "px";
            cursor.style.top = event.pageY + "px";
        };

        document.addEventListener("mousemove", handleMouseMove);

        hoverTitle.forEach(hoverItem => {
            hoverItem.addEventListener("mouseover", () => {
                cursorInner.innerHTML = "<div class='mouse-caption'><h2>" + hoverItem.getAttribute('data-hover-title') + "</h2></div>";
                cursorInner.classList.add("visible");
            });
            hoverItem.addEventListener("mouseout", () => {
                cursorInner.innerHTML = "";
            });
        });

        hoverTitleDark.forEach(hoverItem => {
            hoverItem.addEventListener("mouseover", () => {
                cursorInner.innerHTML = "<div class='mouse-caption mouse-caption-dark'><h2>" + hoverItem.getAttribute('data-hover-title-dark') + "</h2></div>";
                cursorInner.classList.add("visible");
            });
            hoverItem.addEventListener("mouseout", () => {
                cursorInner.innerHTML = "";
            });
        });

        hoverText.forEach(hoverItem => {
            hoverItem.addEventListener("mouseover", () => {
                cursorInner.innerHTML = "<div class='mouse-caption'><h5>" + hoverItem.getAttribute('data-hover-text') + "</h5></div>";
                cursorInner.classList.add("visible");
            });
            hoverItem.addEventListener("mouseout", () => {
                cursorInner.innerHTML = "";
            });
        });

        hoverTextDark.forEach(hoverItem => {
            hoverItem.addEventListener("mouseover", () => {
                cursorInner.innerHTML = "<div class='mouse-caption mouse-caption-dark'><h5>" + hoverItem.getAttribute('data-hover-text-dark') + "</h5></div>";
                cursorInner.classList.add("visible");
            });
            hoverItem.addEventListener("mouseout", () => {
                cursorInner.innerHTML = "";
            });
        });

        hoverImgs.forEach(hoverImg => {
            hoverImg.addEventListener("mouseover", () => {
                cursorInner.innerHTML = "<img src='" + hoverImg.getAttribute('data-hover-img') + "'>";
                cursorInner.classList.add("visible");
            });
            hoverImg.addEventListener("mouseout", () => {
                cursorInner.innerHTML = "";
            });
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="cursors" ref={cursorRef}>
            <div className="cursor-inner" ref={cursorInnerRef}></div>
        </div>
    );
};

export default Cursor;
