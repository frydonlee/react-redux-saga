import React, { useState, useEffect, unwrap } from "react";
import PropTypes from "prop-types";
import "./Elements.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  selectElement,
  addElement,
  removeElement,
  addElementAsync,
} from "./ElementsSlices";
import Element from "./Element";

const Elements = () => {
  const dispatch = useDispatch();
  const { elements, status } = useSelector(selectElement);
  const [element, setElement] = useState({ id: 1, title: "" });

  useEffect(() => {
    console.log("status", status);
  }, [status]);

  const onChange = (event) => {
    const { value } = event.target;
    setElement({ ...element, title: value });
  };

  const onClick = () => {
    dispatch(addElement(element));
    setElement({ id: element.id + 1, title: "" });
  };

  const onClickAsync = () => {
    dispatch(addElementAsync(element));
    setElement({ id: element.id + 1, title: "" });
    // .unwrap()
    // .then((originalPromiseResult) => {
    //   // handle result here
    // })
    // .catch((rejectedValueOrSerializedError) => {
    //   // handle error here
    // });
  };

  const onDelete = (id) => {
    dispatch(removeElement({ id }));
  };

  return (
    // <div className="Elements" data-testid="Elements">
    //   Elements Component
    // </div>
    <div>
      <input type="text" onChange={onChange} value={element.title} />
      <button onClick={onClick}>Add element</button>
      <button onClick={onClickAsync}>Add element API</button>
      <ul>
        {elements.map((element) => (
          <Element key={element.id} element={element} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

Elements.propTypes = {};

Elements.defaultProps = {};

export default Elements;
