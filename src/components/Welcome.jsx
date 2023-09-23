import { Header } from "./Header";
import playImage from "../assets/play.svg";
import welcome from "../assets/welcome.svg";
import wawe from "../assets/wawe.svg";

export const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <Header />
        <div className="container welcome__container">
          <div className="welcome__content">
            <div className="welcome__info">
              <h1 className="welcome__title">
                <span> Studying </span>
                Online is now much easier
              </h1>
              <p className="welcome__desc">
                Skilline is an interesting platform that will teach you in more
                an interactive way
              </p>
              <div className="welcome__btn">
                <a className="btn _primary" href="/">
                  Join for free
                </a>
                <a href="/" className="btn-watch">
                  <img src={playImage} alt="Play" />
                  <span>Watch how it works</span>
                </a>
              </div>
            </div>
            <div className="welcome__image">
              <img src={welcome} alt="" />
            </div>
          </div>
        </div>
        <img className="welcome__wawe" src={wawe} alt="wawe" />
      </div>
    </>
  );
};
