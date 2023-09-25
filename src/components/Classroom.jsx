import withBg from "../assets/withbg.png";

export const Classroom = () => {
  return (
    <>
      <div className="classroom">
        <div className="classroom__container">
          <div className="classroom__info">
            <h2 className="classroom__title">
              Everything you can do in a physical classroom,
              <span className="classroom__span">you can do with Skilline</span>
            </h2>
            <p className="classroom__desc">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a href="/" className="classroom__a">
              Learn more
            </a>
          </div>
          <div className="classroom__avatar">
            <div className="classroom__border">
              <div className="with__border-bg"></div>
              <a href="/">
                <img
                  width="705px"
                  height="471.079px"
                  className="classroom__img"
                  src={withBg}
                  alt="Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
