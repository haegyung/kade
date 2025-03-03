import React from "react";
import { Checkbox } from "semantic-ui-react";
import state from "../../../store";

class CheckboxRenderer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    this.props.data[this.props.colDef.field] = !this.props.data[
        this.props.colDef.field
    ];
    this.setState({
      value: this.props.data[this.props.colDef.field]
    });
    state.setState({
      showOutputFactorSelection: false,
      showFactorCorrelationsTable: false,
      showStandardErrorsDifferences: false,
      showFactorCharacteristicsTable: false,
      showDownloadOutputButtons: false,
      shouldDisplayFactorVizOptions: false,
      displayFactorVisualizations: false,
      sendDataToOutputButtonColor: "orange"
    });
  }

  render() {
    return (
      <Checkbox style={ { marginTop: 3, marginLeft: -3 } } checked={ this.state.value } onChange={ this.handleCheckboxChange } />
      );
  }
}

export default CheckboxRenderer;
