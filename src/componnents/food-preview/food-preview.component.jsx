/**
 * libraries
 */

import React from "react";

/**
 * css
 */
import "./food-preview.styles.scss";
import FoodItem from "../food-item/food-item.component";

const FoodPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default FoodPreview;
