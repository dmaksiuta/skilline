import file from "../assets/Soft/file.svg";
import calendar from "../assets/Soft/calendar.svg";
import user from "../assets/Soft/user.svg";


export const Soft = () => {
  return (
    <>
      <div className="container soft">
        <h2 className="soft__title"><span>All-In-One </span> Cloud Software.</h2>
        <p className="soft__desc">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        <div className="soft__info">
            <div className="info__online">
                <div className="info__online-image">
                    <img src={file} alt="" />
                </div>
                <h4 className="info__online-title">Online Billing, Invoicing, & Contracts</h4>
                <p className="info__online-text">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
            </div>
            <div className="info__ease">
                <div className="info__ease-image">
                    <img src={calendar} alt="" />
                </div>
                <h4 className="info__ease-title">Easy Scheduling & Attendance Tracking</h4>
                <p className="info__ease-text">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
            </div>
            <div className="info__customer">
                <div className="info__customer-image">
                    <img src={user} alt="" />
                </div>
                <h4 className="info__customer-title">Customer Tracking</h4>
                <p className="info__customer-text">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
            </div>
        </div>
      </div>
    </>
  );
};