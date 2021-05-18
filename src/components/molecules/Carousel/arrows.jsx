"use strict";

import React from "react";
import classnames from "classnames";
import { canGoNext } from "./utils/innerSliderUtils";

export class PrevArrow extends React.PureComponent {

  render() {
    const { currentSlide, slideCount, slidesToShow, infinite } = this.props;
    const customProps = { currentSlide, slideCount };
    const disableArrow = !infinite && (currentSlide === 0 || slideCount <= slidesToShow);

    let prevClasses = { "carousel14Arrow": true, "carousel14Prev": true };
    let prevHandler = this.clickHandler.bind(this, { message: "previous" });

    if (disableArrow) {
      prevClasses[ "carousel14Disabled" ] = true;
      prevHandler = null;
    }

    let prevArrowProps = {
      key: "0",
      "data-role": "none",
      className: classnames(prevClasses),
      onClick: prevHandler
    };

    let prevArrow;

    if (this.props.prevArrow) {
      prevArrow = React.cloneElement(this.props.prevArrow, {
        ...prevArrowProps,
        ...customProps
      });

    } else {
      prevArrow = (
        <button key="0" type="button" {...prevArrowProps}>
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
      );
    }

    return prevArrow;
  }


  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  }
}

export class NextArrow extends React.PureComponent {

  render() {
    const { currentSlide, slideCount } = this.props;
    const customProps = { currentSlide, slideCount };

    let nextClasses = { "carousel14Arrow": true, "carousel14Next": true };
    let nextHandler = this.clickHandler.bind(this, { message: "next" });

    if (!canGoNext(this.props)) {
      nextClasses[ "carousel14Disabled" ] = true;
      nextHandler = null;
    }

    let nextArrowProps = {
      key: "1",
      "data-role": "none",
      className: classnames(nextClasses),
      onClick: nextHandler
    };


    let nextArrow;

    if (this.props.nextArrow) {
      nextArrow = React.cloneElement(this.props.nextArrow, {
        ...nextArrowProps,
        ...customProps
      });
    } else {
      nextArrow = (
        <button key="1" type="button" {...nextArrowProps}>
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      );
    }

    return nextArrow;
  }


  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this.props.clickHandler(options, e);
  }
}
