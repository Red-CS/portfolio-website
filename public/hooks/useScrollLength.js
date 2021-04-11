import { useState, useEffect } from 'react';

const useScrollLength = () => {

    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
        // console.log(window.pageYOffset);
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        // console.log(scrolledToTop);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrolledToTop]);

    return scrolledToTop;
}

export default useScrollLength;