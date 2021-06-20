import styles from "@styles/component/Menu.module.css";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import useOnClickOutside from "@hooks/useOnClickOutside";
import Link from "next/link";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const wrapperRef = useRef();

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const KEY_CODES = {
    ARROW_LEFT: "ArrowLeft",
    ARROW_LEFT_IE11: "Left",
    ARROW_RIGHT: "ArrowRight",
    ARROW_RIGHT_IE11: "Right",
    ESCAPE: "Escape",
    ESCAPE_IE11: "Esc",
    TAB: "Tab",
    SPACE: " ",
    SPACE_IE11: "Spacebar",
    ENTER: "Enter",
  };

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from(navRef.current.querySelectorAll("a")),
    ];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    setFocusables();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`${styles.menu} ${styles["fade-enter-done"]}`}
      ref={wrapperRef}
    >
      <Helmet>
        <body className={menuOpen ? "blur" : ""} />
      </Helmet>
      <div
        className={styles["ham-button"]}
        onClick={toggleMenu}
        ref={buttonRef}
      >
        <div className={styles["ham-box"]}>
          <div className={`${styles["ham-box-inner"]}`}></div>
        </div>
      </div>
      <aside className={styles.aside} aria-hidden={!menuOpen}>
        <nav className={styles["aside-nav"]} ref={navRef}>
          <ol className={styles["aside-ol"]}>
            <li>
              <Link href="/resume">
                <a className="link-hover">Resume</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="link-hover">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="link-hover">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/TBA">
                <a className="link-hover">TBD</a>
              </Link>
            </li>
          </ol>
        </nav>
      </aside>
      <style jsx>
        {`
          .${styles["ham-box-inner"]} {
            transition-delay: ${menuOpen ? "0.12s" : "0s"};
            transform: rotate(${menuOpen ? "225deg" : "0deg"});
            transition-timing-function: cubic-bezier(
              ${menuOpen ? "0.215, 0.61, 0.355, 1" : "0.55, 0.055, 0.675, 0.19"}
            );
            background-color: ${menuOpen
              ? "var(--color-white)"
              : "var(--color-black)"};
          }

          .${styles["ham-box-inner"]}::before {
            top: ${menuOpen ? "0px" : "-10px"};
            opacity: ${menuOpen ? "0" : "1"};
            transition: ${menuOpen
              ? "var(--ham-before-active)"
              : "var(--ham-before)"};
          }

          .${styles["ham-box-inner"]}::after {
            bottom: ${menuOpen ? "0px" : "-10px"};
            transform: ${menuOpen ? "rotate(-90deg)" : "rotate(0)"};
            background-color: ${menuOpen
              ? "var(--color-white)"
              : "var(--color-black)"};
            transition: ${menuOpen
              ? "var(--ham-after-active)"
              : "var(--ham-after)"};
          }

          @media (max-width: 768px) {
            .${styles.aside} {
              transform: translateX(${menuOpen ? "0" : "100"}vw);
              visibility: ${menuOpen ? "visible" : "hidden"};
            }
          }
        `}
      </style>
    </div>
  );
}

export default Menu;
