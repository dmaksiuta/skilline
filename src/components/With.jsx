import withBg from "../assets/withbg.png";

export const With = () => {
  return (
    <>
      <div className="with__container">
        <div className="with__info">
          <h2 className="with__title">
            Everything you can do in a physical classroom,
            <span className="with__span">you can do with Skilline</span>
          </h2>
          <p className="with__desc">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <a href="/" className="with__a">
            Learn more
          </a>
        </div>
        <div className="with__avatar">
          <div className="with__border">
            <div className="with__border-bg"></div>
            <img
              width="705px"
              height="471.079px"
              className="with__img"
              src={withBg}
              alt="Play"
            />
          </div>
        </div>
      </div>
    </>
  );
};
