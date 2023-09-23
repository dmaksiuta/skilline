import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header className="header container">
        <a href='/' className="header__logo">
            <img src={logo} alt="Skilline" />
        </a>
        <nav className="header__nav">
            <ul className="header__ul">
                <li className="header__li"><a href="/" className="header__a">Home</a></li>
                <li className="header__li"><a href="/" className="header__a">Careers</a></li>
                <li className="header__li"><a href="/" className="header__a">Blog</a></li>
                <li className="header__li"><a href="/" className="header__a">About Us</a></li>
            </ul>
            <div className="header__btn">
                <a className='btn _secondary' href="/">Login</a>
                <a className='btn _primary' href="/">Sign up</a>
            </div>
        </nav>
    </header>
  )
}
