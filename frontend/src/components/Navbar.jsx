import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import schoolLogo from "../assets/icons/ssp-school-logo.svg";
import "../styles/components/Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo" aria-hidden="true">
            <img className="navbar__logo-image" src={schoolLogo} alt="" />
          </span>
          <span className="navbar__school-name">SSP School</span>
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="navbar__actions">
          <nav className={`navbar__menu ${isMenuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "is-active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          </nav>

          <NavLink to="/contact" className="navbar__cta" onClick={closeMenu}>
            Enquire Now
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;