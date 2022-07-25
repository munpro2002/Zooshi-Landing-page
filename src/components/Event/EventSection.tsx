import React from "react";
import classes from "./EventSection.module.scss";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";
import event3 from "../../assets/event3.png";
import pointer from "../../assets/more-recipes.png";

const EventSection: React.FC<{}> = () => {
  return (
    <div id="event-section" className={`${classes.event} position-relative`}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 d-flex flex-column justify-content-between">
            <div className={classes["event-header"]}>
              <div data-aos="fade-up" data-aos-duration="1500">
                <h6>plan your next</h6>
                <h2>Event</h2>
              </div>
              <p>Transform your Event from Ordinary to Extraordinary</p>
            </div>
            <ul className={`${classes["event-places"]} d-flex flex-wrap`}>
              <li>
                <img src={event1} alt="place1" />
              </li>
              <li>
                <img src={event2} alt="place2" />
              </li>
              <li>
                <img src={event3} alt="place3" />
              </li>
            </ul>
          </div>
          <div
            className={`col-lg-8 ${classes["current-event"]} position-relative`}
          >
            <span>
              Book Now <img src={pointer} alt="pointer" />
            </span>
            <img src={event1} alt="event1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
