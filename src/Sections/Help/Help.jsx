import { Tab } from "semantic-ui-react";
import React, { Component } from "react";
import { view, store } from "react-easy-state";
import styled, { keyframes } from "styled-components";
import HelpHome from './HelpHome';
import InputHelpText from './InputHelpText';
import OutputHelpText from './OutputHelpText';
import FactorsHelpText from './FactorsHelpText';
import InputHelpTextCSV from './InputHelpTextCSV';
import LoadingsHelpText from './LoadingsHelpText';
import RotationHelpText from './RotationHelpText';
import InputHelpTextJson from './InputHelpTextJson';
import InputHelpTextExcel1 from './InputHelpTextExcel1';
import InputHelpTextExcel2 from './InputHelpTextExcel2';
import InputHelpTextExcel3 from './InputHelpTextExcel3';
import CorrelationsHelpText from './CorrelationsHelpText';
import InputHelpTextPqmethod from './InputHelpTextPqmethod';

// factorScoreRanksArray

const panes = [
  {
    menuItem: "Help-Home",
    render: () => (
      <Tab.Pane>
        <DataWindow2>
          <HelpHome />
        </DataWindow2>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Help-Input",
    render: () => (
      <Tab.Pane>
        <ScrollContainer>
          <DataWindow2>
            <InputHelpText />
            <InputHelpTextCSV />
            <InputHelpTextExcel1 />
            <InputHelpTextExcel2 />
            <InputHelpTextExcel3 />
            <InputHelpTextJson />
            <InputHelpTextPqmethod />
          </DataWindow2>
          </ScrollContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Help-Correlations",
    render: () => (
      <Tab.Pane>
        <ScrollContainer>
        <DataWindow2>
          <CorrelationsHelpText />
        </DataWindow2>
        </ScrollContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Help-Factors",
    render: () => (
      <Tab.Pane>
        <ScrollContainer>
        <DataWindow2>
          <FactorsHelpText />
        </DataWindow2>
        </ScrollContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Help-Rotation",
    render: () => (
      <Tab.Pane>
        <ScrollContainer>
        <DataWindow2>
          <RotationHelpText />
        </DataWindow2>
        </ScrollContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Help-Loadings",
    render: () => (
      <Tab.Pane>
        <ScrollContainer>
        <DataWindow2>
          <LoadingsHelpText />
        </DataWindow2>
        </ScrollContainer>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Help-Output",
    render: () => (
      <Tab.Pane>
        <ScrollContainer>
        <DataWindow2>
          <OutputHelpText />
        </DataWindow2>
        </ScrollContainer>
      </Tab.Pane>
    )
  }
];

const localStore = store({
  activeIndex: 0
});

function handleTabChange(e, {activeIndex}) {
  localStore.activeIndex = activeIndex;
}

class Output extends Component {
  render() {
    const {activeIndex} = localStore;
    return (
      <MainContent>
        <Tab style={{paddingRight: "0px !important"}} panes={ panes } activeIndex={ activeIndex } onTabChange={ handleTabChange } />
      </MainContent>
      );
  }
}

export default view(Output);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  background-color: #d6dbe0;
  background-color: #d6dbe0;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  box-sizing: border-box;
  user-select: all;
 
  .tabular-menu {
    display: grid;
    grid-template-columns: 100px 100px 140px 110px 150px 170px;
    background-color: #d6dbe0;
    padding-left: 20px !important;
    height: 45px;
    align-items: end;
    list-style: none;
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    font-size: 25px;
  }

  .tabular-menu-item {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-right: 20px;
    background-color: #d6dbe0;
    height: 80%;
    border-top: 5px solid #d6dbe0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .tabular-menu-item a {
    cursor: pointer;
    color: black;
  }

  .tabs-menu-item:not(.is-active):hover {
    color: #3498db;
    background-color: white;
  }

  .tabular-menu-item.is-active {
    color: #3498db;
    background-color: white;
    border-top: 5px solid #0080ff;
    transition: all 0.25s linear;
  }

  .tabular-pane {
    padding: 10px 50px;
    background-color: white;
    padding-left: 20px !important;
  }
`;

const DataWindow2 = styled.div`
  background-color: white;
  padding-left: 5px;
  box-sizing: border-box;
  width: calc(100vw - 140px);
  height: 100%;
  overflow: auto;
  min-height:100vh;
  max-height: calc(100vh-22px);
  height: calc(100vh-22px);
`;

  const ScrollContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  `;
