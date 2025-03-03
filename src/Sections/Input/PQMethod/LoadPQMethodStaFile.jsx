import { view, store } from "react-easy-state";
import React, { Component } from "react";
import styled from "styled-components";
import state from "../../../store";
import revertLoadButtonsColors from "../DemoData/revertLoadButtonsColors";
import numStatementsMatchErrorModal from "../numStatementsMatchErrorModal";

const { dialog } = require("electron").remote;
const fs = require("fs");

const localStore = store({
  isLoadPqmethodTextButtonButtonGreen: false
});

const handleClick = () => {
  // check to see if data loaded and correlations started - true ==> throw error
  const isDataAlreadyLoaded = state.getState("isDataAlreadyLoaded");
  if (isDataAlreadyLoaded) {
    state.setState({
      showErrorMessageBar: true,
      errorMessage: `Data are already loaded, click "Clear Project" to restart`,
      extendedErrorMessage: `Data have already been loaded and the analysis has started. To clear this analysis and restart the application, click the "Clear Project" button near the bottom of the navigation panel.`,
      errorStackTrace: "no stack trace available"
    });
  } else {
    let isNoError = true;
    dialog.showOpenDialog(
      {
        properties: ["openFile"],
        filters: [
          {
            name: "STA",
            extensions: ["sta", "STA"]
          }
        ]
      },
      files => {
        if (files !== undefined) {
          const fileName = files[0];
          fs.readFile(fileName, "utf-8", (err, data) => {
            // split into lines
            const lines = data.split(/[\r\n]+/g);
            // remove empty strings
            const lines2 = lines.filter(e => e === 0 || e);

            const areQsortsLoaded = state.getState("areQsortsLoaded");
            if (areQsortsLoaded) {
              const qSortPattern = state.getState("qSortPattern");
              if (qSortPattern.length !== lines2.length) {
                isNoError = false;
                numStatementsMatchErrorModal();
              }
            }

            if (isNoError) {
              state.setState({
                statements: lines2,
                statementsLoaded: true
              });
              localStore.isLoadPqmethodTextButtonButtonGreen = true;
              revertLoadButtonsColors("pqmethod");
              state.setState({
                notifyDataUploadSuccess: true,
                areStatementsLoaded: true,
                isLoadPqmethodTextButtonButtonGreen: true,
                isInputButtonGreen: state.getState("areQsortsLoaded"),
                isDataButtonGreen: state.getState("areQsortsLoaded")
              });
            }
          });
        }
      }
    );
  }
};

class LoadTxtStatementFile extends Component {
  render() {
    const isLoadPqmethodTextButtonButtonGreen = state.getState(
      "isLoadPqmethodTextButtonButtonGreen"
    );
    localStore.isLoadPqmethodTextButtonButtonGreen = isLoadPqmethodTextButtonButtonGreen;

    return (
      <LoadTxtButton
        isActive={localStore.isLoadPqmethodTextButtonButtonGreen}
        onClick={() => handleClick()}
      >
        <p>Load STA File</p>
      </LoadTxtButton>
    );
  }
}

export default view(LoadTxtStatementFile);

const LoadTxtButton = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${props =>
    props.isActive ? "rgba(144,	238, 144, .6)" : "#d6dbe0"};
  height: 60px;
  width: 240px;
  border: 1px solid black;
  text-align: center;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
  border-radius: 4px;
  margin-right: 3px;
  margin-bottom: 3px;
  box-shadow: 0 2px 2px 0 black;
  outline: none;

  &:hover {
    background-color: ${props => (props.isActive ? "#009a00" : "#abafb3")};
  }

  &:active {
    box-shadow: 0 0 1px 0 black inset;
    margin-left: 3px;
    /* margin-top: 3px; */
  }
`;
