import friendly from "../assets/news/friendly.jpg";
import technologies from "../assets/news/technologies.jpg";
import investors from "../assets/news/investors.jpg";
import blackboard from "../assets/news/blackboard.jpg";

export const News = () => {
  return (
    <section className="section-news container">
      <div className="container section-news__container">
        <h5 data-aos="zoom-in-up" className="section-news__title">
          Lastest section-news and Resources
        </h5>
        <p data-aos="zoom-in-up" className="section-news__desc">
          See the developments that have occurred to Skillines in the world
        </p>

        <div data-aos="zoom-out-right" className="section-news__info">
          <div className="section-news__main-section-news">
            <img src={friendly} alt="" className="section-news__img" />
            <div className="section-news__title-icon">section-news</div>
            <a href="/" className="main-section-news__title">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </a>
            <p className="main-section-news__decs">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="/" className="main-section-news__more">
              Read more
            </a>
          </div>

          <div data-aos="zoom-out-left" className="section-news__box">
            <div className="section-news__item">
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
            <div className="section-news__item">
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
            <div className="section-news__item">
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
    </section>
  );
};
