import React from "react";
import classes from "./BookingTable.module.scss";
import chef1 from "../../assets/chef1.png";
import chef2 from "../../assets/chef2.png";
import phone from "../../assets/phone.png";
import bookIcon from "../../assets/booking-icon.png";
import calender from "../../assets/calender.png";
import timer from "../../assets/time-icon.png";

const BookingTable: React.FC<{}> = () => {
  return (
    <div
      id="booking-section"
      className={`${classes[`booking`]} position-relative`}
    >
      <img src={chef2} alt="chef2" />
      <img src={chef1} alt="chef1" />
      <div className={`container ${classes["booking__table"]}`}>
        <div data-aos="fade-up" data-aos-duration="1500">
          <h6>WORLD CLASS ATMOSPHERE</h6>
          <h2>You Only Deserve Exceptional.</h2>
        </div>
        <div className={`${classes.form} bg-primary`}>
          <p>
            <img src={phone} alt="phone" />
            +12345 678 910
          </p>
          <div className={classes["booking__opening-time"]}>
            <p>
              Monday to Tuesday <strong>09:00 AM - 22:00 PM</strong>
            </p>
            <p>|</p>
            <p>
              Friday to Sunday <strong>11:00 AM - 20:00 PM</strong>
            </p>
          </div>
          <div className={classes["booking__title"]}>
            <img src={bookIcon} alt="booking icon" />
            <h2>Book a table</h2>
            <img src={bookIcon} alt="booking icon" />
          </div>
          <div className={`${classes["booking__input-content"]} row`}>
            <div className="col-lg-6">
              <input
                className={classes["input-field"]}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="col-lg-6">
              <input
                className={classes["input-field"]}
                type="text"
                placeholder="Enter Your Phone"
              />
            </div>
            <div className="col-lg-6">
              <div className={classes["input-group"]}>
                <div className={classes["first-group"]}>
                  <img src={calender} alt="calender" />
                  <input
                    className={classes["input-field"]}
                    type="date"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className={classes["second-group"]}>
                  <img src={timer} alt="timer" />
                  <input
                    className={classes["input-field"]}
                    type="time"
                    placeholder="Enter Your Phone"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <input
                className={classes["input-field"]}
                type="text"
                placeholder="Enter Number of Persons"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className={classes["booking__submit"]}>
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTable;
