/**
 * libraries
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * components
 */
import MenuItem from "../menu-item/menu-item.component";
/**
 * styles
 */
import "./directory.styles.scss";
/**
 * redux
 */

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
