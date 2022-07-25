import React from "react";
import classes from "./AmenitiesSection.module.scss";
import amenities1 from "../../assets/amenities1.png";
import amenities2 from "../../assets/amenities2.png";
import amenities3 from "../../assets/amenities3.png";

const AmenitiesSection: React.FC<{}> = () => {
  return (
    <div id="visit-section" className={classes["amenities"]}>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className={classes["amenities__title"]}
      >
        <h6>AMENITIES</h6>
        <h2>Make Plans To Visit Us</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-lg-4 col-md-6">
            <div className={classes.amenity}>
              <div className={classes.icon}>
                <img src={amenities1} alt="parking" />
              </div>
              <p>Parking Available</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={classes.amenity}>
              <div className={classes.icon}>
                <img src={amenities2} alt="kid playground" />
              </div>
              <p>Kids Play Area</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={classes.amenity}>
              <div className={classes.icon}>
                <img src={amenities3} alt="menu" />
              </div>
              <p>Menu à la Carte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
