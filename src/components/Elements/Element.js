import React from "react";
import PropTypes from "prop-types";
import "./Elements.css";

const Element = ({ element, onDelete }) => {
  const onClick = (event) => {
    event.preventDefault();
    onDelete(element.id);
  };

  return (
    <li>
      <span>{element.title}</span>
      {/* <a href="#" onClick={onClick}>
        Delete
      </a> */}
      <button onClick={onClick}>Delete</button>
    </li>
  );
};

Element.propTypes = {};

Element.defaultProps = {};

export default Element;
