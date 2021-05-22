import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = () => {
    let scrollY = window.pageYOffset;

    if (scrollY === 0) {
      setScrollDirection(null);
    }

    if (scrollY > prevOffset) {
      setScrollDirection("down");
    } else if (scrollY < prevOffset) {
      setScrollDirection("up");
    }

    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);
    // console.log(scrollDirection);

    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  });

  return scrollDirection;
};

export default useScrollDirection;
