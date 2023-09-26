import classrom from "../assets/classrom-bg.png";

export const Classroom = () => {
  return (
    <>
      <section className="section-classroom container">
        <div className="section-classroom__info">
          <h2 className="section-classroom__title">
            Everything you can do in a physical classroom,
            <span className="section-classroom__span">
              you can do with Skilline
            </span>
          </h2>
          <p className="section-classroom__desc">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <a href="/" className="section-classroom__a">
            Learn more
          </a>
        </div>
        <div className="section-classroom__avatar">
          <div className="section-classroom__border">
            <div className="section-classroom__border-bg"></div>
            <a href="/">
              <img
                width="705px"
                height="471.079px"
                className="section-classroom__img"
                src={classrom}
                alt="classroom__img"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
