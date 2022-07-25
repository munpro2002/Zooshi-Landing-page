import React from "react";
import classes from "./TestimonialsSection.module.scss";
import reviewer from "../../assets/reviewer.png";
import circle from "../../assets/circle.png";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialsSection: React.FC<{}> = () => {
  return (
    <div className={classes.testimonials}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-1 col-lg-7 order-last order-lg-first">
            <div className={classes["testimonials__carousel"]}>
              <img
                className={classes["big-circle"]}
                src={circle}
                alt="circle"
              />
              <img
                className={classes["small-circle"]}
                src={circle}
                alt="circle"
              />
              <Carousel indicators={false}>
                <Carousel.Item>
                  <div className={classes["testimonials__carousel-content"]}>
                    <img src={reviewer} alt="First slide" />
                    <div className={classes.star}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>
                      The fantastic dishes, the restaurant itself, the friendly
                      and attentive staff and of course the marvelous Chef de
                      Zooshi made our stay in Nice.
                    </p>
                    <h4>Donnie Neal</h4>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className={classes["testimonials__carousel-content"]}>
                    <img src={reviewer} alt="Second slide" />
                    <div className={classes.star}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>
                      The fantastic dishes, the restaurant itself, the friendly
                      and attentive staff and of course the marvelous Chef de
                      Zooshi made our stay in Nice.
                    </p>
                    <h4>Donnie Neal</h4>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-xl-4 offset-xl-1 col-lg-5 align-self-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className={classes["testimonials__header"]}
            >
              <h6>TESTIMONIALS</h6>
              <h2>What Our Clients Say</h2>
              <button>
                <span>Leave a review</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
