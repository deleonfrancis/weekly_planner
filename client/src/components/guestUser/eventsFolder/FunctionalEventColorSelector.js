import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { setEventBackgroundColor } from "../../../redux/actions/eventActions";

function FunctionalEventColorSelector() {
  const { eventBackgroundColor } = useSelector((state) => state.eventReducer);

  const [state, setState] = useState({
    displayColorPicker: false,
    color: eventBackgroundColor.color,
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    setState((obj) => ({
      ...obj,
      displayColorPicker: !obj.displayColorPicker,
    }));
  };

  const handleClose = () => {
    setState((obj) => ({ ...obj, displayColorPicker: false }));
  };

  const handleChange = (color) => {
    setState((obj) => ({ ...obj, color: color.rgb }));
    const selectedColor = { color: color.rgb };
    dispatch(setEventBackgroundColor(selectedColor));
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "transparent",
        borderRadius: "0px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      <h4 style={{ margin: "0px" }}>Background Color:</h4>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {state.displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={state.color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default FunctionalEventColorSelector;
