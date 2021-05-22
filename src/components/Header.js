import styles from "@styles/Header.module.css";
import Navbar from "./Navbar";
import useScrollDirection from "@hooks/useScrollDirection";
import useScrollLength from "@hooks/useScrollLength";

function Header() {
  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrollLength();

  const scrollDownStyles = {
    backgroundColor: "var(--color-white)",
    height: "var(--nav-scroll-height)",
    transform: "translateY(calc(var(--nav-scroll-height) * -1))",
    boxShadow: "0 10px 30px -10px var(--color-black)",
  };
  const scrollUpStyles = {
    backgroundColor: "var(--color-white)",
    height: "var(--nav-scroll-height)",
    transform: "translateY(0px)",
    boxShadow: "0 10px 30px -10px var(--color-black)",
  };

  return (
    <header
      className={styles["nav-header"]}
      style={
        !scrolledToTop
          ? scrollDirection === "down"
            ? scrollDownStyles
            : scrollUpStyles
          : null
      }
    >
      <Navbar />
    </header>
  );
}

export default Header;
