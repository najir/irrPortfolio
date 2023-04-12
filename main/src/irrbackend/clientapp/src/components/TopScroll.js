import { useEffect, useState } from "react";
import React from 'react';
import "./styles/topscroll.css";

const TopScroll = () => {
    const [showTopScroll, setTopScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 1800) {
                setTopScroll(true);
            } else {
                setTopScroll(false)
            }
        })
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div style={showTopScroll ? {visibility: 'visible'} : {visibility: 'hidden'}} className={showTopScroll ? "topscroll transition-in" : "topscroll"}>
          <button onClick={scrollToTop}><i class="bi bi-arrow-up-circle-fill"></i></button>
        </div>
    )


}

export default TopScroll;
