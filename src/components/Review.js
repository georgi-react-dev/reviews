import { React, useState } from "react";
import classes from "./Review.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import dummyReviews from "../data.js";
function Review({ review }) {
  const [currentReview, setCurrentReview] = useState(0);
  const { id, name, job, image, text } = dummyReviews[currentReview];
  console.log(review);

  const checkNumber = (number) => {
    if (number > dummyReviews.length - 1) {
      return 0;
    }

    if (number < 0) {
      return dummyReviews.length - 1;
    }

    return number;
  };

  const prev = () => {
    console.log("prev");
    setCurrentReview((currentReview) => {
      let prev = currentReview - 1;
      console.log("PREV", prev);
      return checkNumber(prev);
    });
  };

  const next = () => {
    console.log("next");
    setCurrentReview((currentReview) => {
      let next = currentReview + 1;
      return checkNumber(next);
    });
  };
  const getRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * dummyReviews.length);
    console.log("num", randomNumber);
    if (randomNumber === currentReview) {
      randomNumber = currentReview + 1;
    }
    setCurrentReview(checkNumber(randomNumber));
  };
  return (
    <div key={id} className={classes.review}>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src={image}
          width="40"
          height="40"
          alt="user"
        />
        <span className={classes.quoteIcon}>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className={classes.reviewName}>{name}</h4>

      <h4 className={classes.reviewJob}>{job}</h4>
      <h4 className={classes.info}>{text}</h4>
      <div className={classes.buttonsContainer}>
        <button className={classes.sliderButton} onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className={classes.sliderButton} onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className={classes.randomBtn} onClick={getRandomPerson}>
        Get random review
      </button>
    </div>
  );
}

export default Review;
