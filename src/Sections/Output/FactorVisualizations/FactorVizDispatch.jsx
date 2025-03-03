import React from "react";
import { view } from "react-easy-state";
import state from "../../../store";
import FactorViz from "./FactorViz";
// import refreshVizOptionsState from "./refreshVizOptionsState";
import createFactorVizDataObjectForProps from "./createFactorVizDataObjectForProps";

const styles = {
  width: "100%",
  height: 1200,
  padding: 30,
  margin: 10
};

// todo - need to calculate dynamic height here for styles

class FactorVizDispatch extends React.Component {
  render() {
    const factorVizOptions = state.getState("factorVizOptions");
    const factorData = createFactorVizDataObjectForProps(factorVizOptions);
    const shouldDisplayFactorViz = state.getState(
      "displayFactorVisualizations"
    );

    if (shouldDisplayFactorViz) {
      return (
        <div>
          {factorData.map((i, index) => (
            <div key={`key${index.toString()}`}>
              <FactorViz
                key={`viz${index}`}
                {...factorData[index]}
                {...this.props}
                {...styles}
              />
            </div>
          ))}
        </div>
      );
    }
    return null;
  }
}

export default view(FactorVizDispatch);
