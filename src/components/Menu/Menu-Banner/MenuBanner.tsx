import React from "react";
import classes from "./MenuBanner.module.scss";
import infoBoxBg from "../../../assets/infoBoxBg.png";

const MenuBanner: React.FC<{}> = () => {
  return (
    <div className={classes["menu-banner"]}>
      <div className={classes["menu-banner__info-box"]}>
        <span>Our Exclusive Menu</span>
      </div>
      <img
        className={classes["menu-banner__info-box-bg"]}
        src={infoBoxBg}
        alt="background decoration of info box"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-4">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className={classes["menu-banner__content"]}
            >
              <h3>Experience Our Delicious Menu!</h3>
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
