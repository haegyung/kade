import React from "react";
// import state from "../../store";
import { view } from "react-easy-state";
import ResetAnalysisButton from "./ResetAnalysisButton";
import PcaButton from "./factorSelection/ExtractPrinCompButton";
import NoFacSelectedModal from "./factorSelection/NoFacSelectedModal";
import CentroidSelectDropdown from "./factorSelection/CentroidSelectDropdown";

class TypeOfAnalysisTransitionContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="centroidContainer">
          <div style={ { display: "flex" } }>
            <CentroidSelectDropdown />
            <NoFacSelectedModal />
            <PcaButton />
            <ResetAnalysisButton />
          </div>
        </div>
      </div>
      );
  }
}

export default view(TypeOfAnalysisTransitionContainer);
