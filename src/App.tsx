import React, { Fragment, useEffect, useState } from "react";
import BannerSection from "./components/Banner/BannerSection";
import Header from "./components/Header/Header";
import AboutSection from "./components/About/AboutSection";
import MenuSection from "./components/Menu/MenuSection";
import EventSection from "./components/Event/EventSection";
import BookingTable from "./components/Booking/BookingTable";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import MenuBanner from "./components/Menu/Menu-Banner/MenuBanner";
import AmenitiesSection from "./components/Amenities/AmenitiesSection";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import classes from "./App.module.scss";

const App: React.FC<{}> = () => {
  const [isScrollToTopBtn, setIsScrollToTopBtn] = useState(false);

  const scrollToTopHandler = () => {
    if (window.scrollY > 500) {
      setIsScrollToTopBtn(true);
    } else {
      setIsScrollToTopBtn(false);
    }
  };

  useEffect(() => {
    Aos.init();
    Aos.refresh();
    window.addEventListener("scroll", scrollToTopHandler);
    return () => {
      window.removeEventListener("scroll", scrollToTopHandler);
    };
  }, []);

  return (
    <Fragment>
      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="home"
        className={`${classes["btn--scroll-to-top"]} ${
          isScrollToTopBtn ? classes.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Link>
      <Header />
      <BannerSection />
      <AboutSection />
      <MenuSection />
      <EventSection />
      <BookingTable />
      <TestimonialsSection />
      <MenuBanner />
      <AmenitiesSection />
      <Footer />
    </Fragment>
  );
};

export default App;
