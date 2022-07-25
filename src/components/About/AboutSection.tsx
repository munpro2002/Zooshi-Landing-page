import React from "react";
import classes from "./AboutSection.module.scss";
import sign from "../../assets/about1.png";
import spaghetti from "../../assets/about2.png";
import shape from "../../assets/vegetales-shapes.png";

const AboutSection: React.FC<{}> = () => {
  return (
    <div id="about-section" className={classes.about}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-6 ${classes["about__content"]}`}>
            <div data-aos="fade-up" data-aos-duration="1500">
              <h6>About Us</h6>
              <h2>Dedicated To Delight You</h2>
            </div>
            <p>
              Zooshi blends contemporary elegance and comfort with innovative
              cuisine and excellent service. The original menu and unique decor
              make Zooshi an ideal setting for business meetings, romantic
              evenings, or a night out with friends.
            </p>
            <p>
              A meal at Zooshi is one you won't soon forget and value you won't
              believe.
            </p>
            <img
              src={sign}
              alt="sign"
              className={classes["about__content-sign"]}
            />
          </div>
          <div className="col-lg-6">
            <div className={`${classes.image} position-relative`}>
              <img src={spaghetti} alt="spaghetti" />
              <img src={shape} alt="vegetables shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
