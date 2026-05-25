import { NavLink } from "react-router-dom";
import schoolLogo from "../assets/icons/ssp-school-logo.svg";
import "../styles/components/Footer.css";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <span className="footer__logo" aria-hidden="true">
              <img className="footer__logo-image" src={schoolLogo} alt="" />
            </span>
            <span className="footer__school-name">SSP School</span>
          </div>
          <p className="footer__text">
            Building a strong learning environment with care, discipline, and growth.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className="footer__link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <p className="footer__copyright">
          © {new Date().getFullYear()} SSP School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;