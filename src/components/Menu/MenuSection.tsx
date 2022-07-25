import React from "react";
import classes from "./MenuSection.module.scss";
import icon1 from "../../assets/menu-icon1.png";
import icon2 from "../../assets/menu-icon2.png";
import icon3 from "../../assets/menu-icon3.png";
import icon4 from "../../assets/menu-icon4.png";
import recipe1 from "../../assets/recipe1.png";
import recipe2 from "../../assets/recipe2.png";
import recipe3 from "../../assets/recipe3.png";
import recipe4 from "../../assets/recipe4.png";
import decor1 from "../../assets/food-decor1.png";
import decor2 from "../../assets/food-decor2.png";
import moreRecipes from "../../assets/more-recipes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const MenuSection: React.FC<{}> = () => {
  return (
    <div id="menu-section" className={`${classes.menu}`}>
      <img className={classes["bg-decor"]} src={decor1} alt="food decor 1" />
      <img className={classes["bg-decor"]} src={decor2} alt="food decor 2" />
      <div className={`${classes["menu__content"]} container`}>
        <div data-aos="fade-up" data-aos-duration="1500">
          <h6>Explore Our Menus</h6>
          <h2>Try Our Specialities</h2>
        </div>
        <div
          className={`d-flex flex-wrap justify-content-center ${classes["menu__categories"]}`}
        >
          <div className={classes["menu__category"]}>
            <img src={icon1} alt="starters" />
            <span>Starters</span>
          </div>
          <div className={classes["menu__category"]}>
            <img src={icon2} alt="dishes" />
            <span>Dishes</span>
          </div>
          <div className={classes["menu__category"]}>
            <img src={icon3} alt="starters" />
            <span>Starters</span>
          </div>
          <div className={classes["menu__category"]}>
            <img src={icon4} alt="starters" />
            <span>Starters</span>
          </div>
        </div>
        <div className={`row ${classes["menu-dishes"]}`}>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-white">
            <img src={recipe1} alt="recipe1" />
            <FontAwesomeIcon
              icon={faHeart}
              className={classes["menu__heart"]}
            />
            <span>$16.00</span>
            <h4>Chicken</h4>
            <button>Order Now</button>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-white">
            <img src={recipe2} alt="recipe2" />
            <FontAwesomeIcon
              icon={faHeart}
              className={classes["menu__heart"]}
            />
            <span>$16.00</span>
            <h4>Guerrilla</h4>
            <button>Order Now</button>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-white">
            <img src={recipe3} alt="recipe3" />
            <FontAwesomeIcon
              icon={faHeart}
              className={classes["menu__heart"]}
            />
            <span>$16.00</span>
            <h4>Boruto</h4>
            <button>Order Now</button>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-white">
            <img src={recipe4} alt="recipe" />
            <FontAwesomeIcon
              icon={faHeart}
              className={classes["menu__heart"]}
            />
            <span>$16.00</span>
            <h4>Israeli</h4>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <p>
        More Recipes
        <img src={moreRecipes} alt="more recipes" />
      </p>
    </div>
  );
};

export default MenuSection;
