import girl from "../assets/skilline/girl.png";
import team from "../assets/skilline/team.png";

export const Skilline = () => {
  return (
    <section className="section-skilline container ">
      <div data-aos="zoom-in" className="section-skilline__text ">
        <h2 className="section-skilline__main-title">
          What is <span className="section-skilline__span">Skilline?</span>
        </h2>

        <p className="section-skilline__desc">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>

      <div className="section-skilline__photo container">
        <div data-aos="flip-up" className="section-skilline__photo-girl">
          <div className="section-skilline__bg-girl">
            <img className="girl" src={girl} alt="girl" />
          </div>

          <div className="section-skilline__girl-text">
            <h4 className="section-skilline__title-girl">FOR INSTRUCTORS</h4>

            <div className="section-skilline__girl-btn">
              <a href="/" className="section-skilline__link">
                Start a class day
              </a>
            </div>
          </div>
        </div>

        <div data-aos="flip-up" className="section-skilline__photo-team">
          <div className="section-skilline__bg-girl">
            <img className="team" src={team} alt="girl" />
          </div>

          <div className="section-skilline__girl-text">
            <h4 className="section-skilline__title-team">FOR STUDENTS</h4>

            <div className="section-skilline__team-btn">
              <a href="/" className="section-skilline__team-link">
                Enter acces code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
