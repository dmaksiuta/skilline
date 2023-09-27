import file from "../assets/soft/file.svg";
import calendar from "../assets/soft/calendar.svg";
import user from "../assets/soft/user.svg";

export const Soft = () => {
  return (
    <>
      <section className="section-soft container">
        <h2 data-aos="zoom-in" className="section-soft__title">
          <span>All-In-One </span> Cloud section-software.
        </h2>
        <p data-aos="zoom-in" className="section-soft__desc">
          Skilline is one powerful online section-software suite that combines
          all the tools needed to run a successful school or office.
        </p>
        <div className="section-soft__info">
          <div data-aos="flip-right" className="info__online">
            <div className="info__online-image">
              <img src={file} alt="file" />
            </div>
            <h4 className="info__online-title">
              Online Billing, Invoicing, & Contracts
            </h4>
            <p className="info__online-text">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
          <div data-aos="flip-right" className="info__ease">
            <div className="info__ease-image">
              <img src={calendar} alt="calendar" />
            </div>
            <h4 className="info__ease-title">
              Easy Scheduling & Attendance Tracking
            </h4>
            <p className="info__ease-text">
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </div>
          <div data-aos="flip-right" className="info__customer">
            <div className="info__customer-image">
              <img src={user} alt="user" />
            </div>
            <h4 className="info__customer-title">Customer Tracking</h4>
            <p className="info__customer-text">
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
