import React from "react";
import classes from "./BannerSection.module.scss";
import bannerImg from "../../assets/banner.png";

const BannerSection: React.FC<{}> = () => {
  return (
    <div id="home" className={` bg-primary ${classes.banner}`}>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-7">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className={classes["banner__main-sub"]}
            >
              Welcome To Zooshi
            </h1>
            <h1
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className={classes["banner__title"]}
            >
              Food Is Art
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className={classes["banner__description"]}
            >
              Our dishes are not a list of ingredients, they're a blend of
              techniques, cultures and passion
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className={classes["banner__btn"]}
            >
              Book With Confidence
            </button>
          </div>
        </div>
      </div>
      <img src={bannerImg} alt="banner" />
    </div>
  );
};

export default BannerSection;
