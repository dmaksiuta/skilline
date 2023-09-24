export const Features = () => {
  return (
    <section className="section-features container">
      <div className="section-features__head">
        <h2 className="section-features__title">
          Our <span className="span">Features</span>
        </h2>
        <p className="section-features__desc">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className="section-features__blocks">
        <div className="section-features__block _block-tools">
          <div className="section-features__info _info-tools">
            <h3 className="section-features__title-block _title-tools">
              <span className="span">Tools</span> For Teachers And Learners
            </h3>
            <p className="section-features__desc-block _desc-tools">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <img
            src="src/assets/features/tools.svg"
            alt="tools-img"
            className="section-features__tools-img"
          />
        </div>

        <div className="section-features__block _block-quizzes">
          <img
            src="src/assets/features/quizzes.svg"
            alt="quizzes-img"
            className="section-features__quizzes-img"
          />
          <div className="section-features__info _info-quizzes">
            <h3 className="section-features__title-block _title-quizzes">
              Assessments, <span className="span">Quizzes</span>, Tests
            </h3>
            <p className="section-features__desc-block _desc-quizzes">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>

        <div className="section-features__block _block-management">
          <div className="section-features__info _info-management">
            <h3 className="section-features__title-block _title-management">
              <span className="span">Class Management</span> Tools for Educators
            </h3>
            <p className="section-features__desc-block _desc-management">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <img
            src="src/assets/features/management.svg"
            alt="management-img"
            className="section-features__management-img"
          />
        </div>

        <div className="section-features__block _block-discussion">
          <img
            src="src/assets/features/discussion.svg"
            alt="discussion-img"
            className="section-features__discussion-img"
          />
          <div className="section-features__info _info-discussion">
            <h3 className="section-features__title-block _title-discussion">
              One-on-One <span className="span">Discussions</span>
            </h3>
            <p className="section-features__desc-block _desc-discussion">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </div>
      <div className="section-features__btn">
        <a className="btn _features" href="/">
          See more features
        </a>
      </div>
    </section>
  );
};
