import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import footerBg from "../../assets/footer-bg.png";
import phone from "../../assets/phoneInfo.png";
import address from "../../assets/addressInfo.png";
import email from "../../assets/emailInfo.png";
import footerDec1 from "../../assets/footer-dec1.png";
import footerDec2 from "../../assets/footer-dec2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC<{}> = () => {
  return (
    <div className={classes["footer"]}>
      <img
        data-aos="fade-right"
        data-aos-duration="1500"
        className={classes["footer__dec"]}
        src={footerDec1}
        alt="footer decoration"
      />
      <img
        data-aos="fade-left"
        data-aos-duration="1500"
        className={classes["footer__dec"]}
        src={footerDec2}
        alt="footer decoration"
      />
      <img className={classes["footer__shape"]} src={footerBg} alt="shape" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img src={logo} alt="logo" />
            <div className={classes["footer__social-link"]}>
              <span>Follow us :</span>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGooglePlus} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </ul>
            </div>
            <form className={classes["footer__form"]}>
              <input type="text" placeholder="Your email address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={classes["footer__info-box"]}>
                  <img src={phone} alt="phone" />
                  <p>Phone Number:</p>
                  <p>+1 111 000 111</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={classes["footer__info-box"]}>
                  <img src={address} alt="address" />
                  <p>17 South Sherman Street Astoria, NY 11106</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={classes["footer__info-box"]}>
                  <img src={email} alt="email" />
                  <p>Drop us a line:</p>
                  <p>hello@zooshi.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={classes["footer__copyright-text"]}>
              <p>Copyright © 2020.All Rights Reserved By Zooshi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
