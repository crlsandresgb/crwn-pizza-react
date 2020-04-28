/**
 * libraries
 */
import React from "react";
import { connect } from "react-redux";
/**
 * css
 */
import "./category.styles.scss";
/**
 * componetn
 */
import FoodItem from "../../componnents/food-item/food-item.component";
/**
 * redux
 */
import { selectCategory } from "../../redux/food/food.selectors";

const CategoryPage = ({ category }) => {
  if (category != null) {
    const { title, items } = category;

    return (
      <div className="collection-page">
        <h2 className="title"> {title}</h2>
        <div className="items">
          {items.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
