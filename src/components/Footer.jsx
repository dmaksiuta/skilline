import footer from "../assets/footer-logo.svg";
import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="1200"
      className="footer slide-top"
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="footer__head"
      >
        <div className="footer__logo">
          <a className="footer__a" href="">
            <img className="rotate-in-center" src={footer} alt="footer-logo" />
          </a>
        </div>
        <div className="footer__title _line-title">Virtual Class for Zoom</div>
      </div>
      <div className="footer__desc">Subscribe to get our Newsletter</div>
      <div className="footer__contact">
        <div className="footer__form">
          <form>
            <input
              className="footer__input"
              type="email"
              placeholder="Your email"
              maxLength="30"
            />
          </form>
        </div>

        <a className="footer__btn-a" href="/">
          <button className="footer__btn">Subscribe</button>
        </a>
      </div>
      <div className="footer__about">
        <div className="footer__info">
          <ul className="footer__ul">
            <li className="footer__li">
              <a className="footer__a" href="/">
                Careers
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a _line" href="/">
                Privacy Policy
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a _line" href="/">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          © <span id="year"></span> Class Technologies Inc.
        </div>
      </div>
    </footer>
  );
};
