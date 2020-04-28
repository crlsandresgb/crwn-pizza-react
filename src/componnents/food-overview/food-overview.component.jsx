/**
 * libraries
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * css
 */
import "./food-overview.styles.scss";
/**
 * component
 */
import FoodPreview from "../food-preview/food-preview.component";
/**
 * redux
 */

import { selectFoodForPreview } from "../../redux/food/food.selectors";

const FoodOverview = ({ food }) => (
  <div className="collections-overview">
    {food.map(({ id, ...otherMenuProps }) => (
      <FoodPreview key={id} {...otherMenuProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  food: selectFoodForPreview,
});

export default connect(mapStateToProps)(FoodOverview);
