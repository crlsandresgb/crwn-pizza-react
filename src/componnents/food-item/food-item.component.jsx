/**
 * libraries
 */
import React from "react";

/**
 * CSS
 */
import "./food-item.styles.scss";

const FoodItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default FoodItem;
