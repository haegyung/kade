import React from "react";
import state from "../../../../store";

const styles = {
  stroke: "black",
  strokeWidth: 0.5,
  // zindex: 99,
  fontSize: 10,
  cursor: "default"
};

const showPopUp = info => {
  state.setState({
    participantDataObject: info
  });
};

const closePopUp = () => {
  state.setState({
    participantDataObject: false
  });
};

const renderCircleText = props => (coords, index) => {
  const circleProps = {
    x: props.xScale(props.data[index].factor2),
    y: props.yScale(props.data[index].factor1 - 0.01),
    key: props.data[index].num,
    text: props.data[index].num,
    textAnchor: "middle"
  };
  return (
    <text
      onMouseOver={() => showPopUp(props.data[index])}
      onMouseOut={() => closePopUp()}
      {...styles}
      {...circleProps}
    >
      {" "}
      {circleProps.text}
    </text>
  );
};

export default props => <g>{props.data.map(renderCircleText(props))}</g>;
