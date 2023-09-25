import footer from "../assets/footer.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <div className="footer__logo">
          <img src={footer} alt="footer logo" />
        </div>
      </div>
      <div className="footer__desc">Subscribe to get our Newsletter</div>
      <div className="footer__contact">
        <label>
          <input
            className="footer__forms"
            type="text"
            name="email"
            placeholder="Your email"
          />
        </label>
        <button className="footer__btn">Subscribe</button>
      </div>
      <div className="footer__about">
        <div className="footer__info">
          <ul className="footer__ul">
            <li className="footer__li">Careers</li>
            <li className="footer__li">Privacy Policy</li>
            <li className="footer__li">Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer__copyright">© 2021 Class Technologies Inc. </div>
      </div>
    </footer>
  );
};
