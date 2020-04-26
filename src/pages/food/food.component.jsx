/**
 * libraries
 */
import React from "react";

/**
 * css
 */
import "./food.styles.scss";

/**
 * components
 */
import FoodPreview from "../../componnents/food-preview/food-preview.component";

/**
 * data
 */

import MENU_DATA from "./food.data.js";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU_DATA,
    };
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        {menu.map(({ id, ...otherMenuProps }) => (
          <FoodPreview key={id} {...otherMenuProps} />
        ))}
      </div>
    );
  }
}

export default MenuPage;
