import logo from "../assets/logo.svg";

export const Header = () => {
  function navToggle() {
    document.getElementById("headerUl").classList.toggle("_active");
    document.getElementById("headerBackdrop").classList.toggle("_active");
    document.getElementById("menu").classList.toggle("_active");
    document.body.classList.toggle("no-scroll");
  }

  return (
    <header className="header container">
      <a data-aos="fade-up-right" href="/" className="header__logo">
        <img src={logo} alt="Skilline" />
      </a>
      <nav className="header__nav">
        <div
          className="header__backdrop"
          id="headerBackdrop"
          onClick={navToggle}
        ></div>
        <ul id="headerUl" className="header__ul">
          <span
            className="material-symbols-outlined icon-close"
            onClick={navToggle}
          >
            close
          </span>
          <li data-aos="flip-left" className="header__li">
            <a href="/" className="header__a">
              Home
            </a>
          </li>
          <li data-aos="flip-left" className="header__li">
            <a href="/" className="header__a">
              Careers
            </a>
          </li>
          <li data-aos="flip-left" className="header__li">
            <a href="/" className="header__a">
              Blog
            </a>
          </li>
          <li data-aos="flip-left" className="header__li">
            <a href="/" className="header__a">
              About Us
            </a>
          </li>
        </ul>
        <div data-aos="fade-down" className="header__btn">
          <a className="btn _secondary" href="/">
            Login
          </a>
          <a className="btn _primary" href="/">
            Sign up
          </a>
        </div>
        <span
          className="material-symbols-outlined icon-menu"
          id="menu"
          onClick={navToggle}
        >
          menu_open
        </span>
      </nav>
    </header>
  );
};
