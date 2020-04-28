/**
 * libraries
 */
import React from "react";
import { Route } from "react-router-dom";
/**
 * css
 */
import "./food.styles.scss";

/**
 * components
 */
import FoodOverview from "../../componnents/food-overview/food-overview.component";
import CategoryPage from "../category/category.component";

const MenuPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={FoodOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default MenuPage;
