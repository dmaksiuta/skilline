import student from "../assets/say/student.png";
import arrow from "../assets/say/arrow.svg";
import star from "../assets/say/star.svg";
import line from "../assets/say/line.svg";

export const Say = () => {
  return (
    <>
      <section className="container say">
        <div data-aos="zoom-out-up" className="say__info">
          <h5 className="say__info-header">
            <span className="say__info-span">
              <img src={line} alt="" />
            </span>
            TESTIMONIAL
          </h5>
          <h3 className="say__info-title">What They Say?</h3>
          <p className="say__info-desc">
            Skilline has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p className="say__info-desc">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="say__info-text">
            Are you too? Please give your assessment
          </p>
          <div className="say__btn-asse">
            <a href="/" className="btn-asse _say">
              <span>Write your assessment</span>
              <span className="btn-asse__icon">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="#F48C06" />
                  <path
                    d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                    fill="#F48C06"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div data-aos="flip-down" className="say__about">
          <div className="say__about-image">
            <img className="say__about-image _student" src={student} alt="" />
            <img className="say__about-image _arrow" src={arrow} alt="" />
          </div>
          <div className="say__about-border">
            <div className="say__about-item">
              <p className="say__about-text">
                Thank you so much for your help. Its exactly what Ive been
                looking for. You wont regret it. It really saves me time and
                effort. Skilline is exactly what our business has been lacking.
              </p>
              <div className="say__about-reviews">
                <h5 className="say__about-name">Gloria Rose</h5>
                <a href="/" className="say__about-mark">
                  <img src={star} alt="" />
                  <span className="say__about-span">12 reviews at Yelp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
