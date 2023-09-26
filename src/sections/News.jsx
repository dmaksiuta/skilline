import friendly from "../assets/news/friendly.jpg";
import technologies from "../assets/news/technologies.jpg";
import investors from "../assets/news/investors.jpg";
import blackboard from "../assets/news/blackboard.jpg";

export const News = () => {
  return (
    <div className="news">
      <div className="container news__container">
        <h5 data-aos="zoom-in-up" className="news__title">
          Lastest News and Resources
        </h5>
        <p data-aos="zoom-in-up" className="news__desc">
          See the developments that have occurred to Skillines in the world
        </p>

        <div data-aos="zoom-out-right" className="news__info">
          <div className="news__main-news">
            <img src={friendly} alt="" className="news__img" />
            <div className="news__title-icon">NEWS</div>
            <a href="/" className="main-news__title">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </a>
            <p className="main-news__decs">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="/" className="main-news__more">
              Read more
            </a>
          </div>

          <div data-aos="zoom-out-left" className="news__box">
            <div className="news__item">
              <img src={technologies} alt="" className="item__img" />
              <div className="item__info">
                <a href="/" className="item__title">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </a>
                <p className="item__decs">
                  Class Technologies Inc., the company that created Class,...
                </p>
              </div>
            </div>
            <div className="news__item">
              <img src={investors} alt="" className="item__img" />
              <div className="item__info">
                <a href="/" className="item__title">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </a>
                <p className="item__decs">
                  Zoom was never created to be a consumer product. Nonetheless,
                  the...
                </p>
              </div>
            </div>
            <div className="news__item">
              <img src={blackboard} alt="" className="item__img" />
              <div className="item__info">
                <a href="/" className="item__title">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </a>
                <p className="item__decs">
                  This year, investors have reaped big financial returns from
                  betting on Zoom...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
