import { view } from "react-easy-state";
import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import state from "../../../store";

const getCurrentData = () => {
  const data = state.getState("factorCorrelationsTableData");
  const numFacs2 = state.getState("userSelectedFactors");
  const numFacs = numFacs2.length;
  // pull out header row
  const headerRow = data[3];

  return [data, numFacs, headerRow];
};

let gridRowDataFacCorrTable = [];
let gridColDefsFacCorrTable = [];

const getGridColDefsFacCorrTable = (data, numFacs, headerRow) => {
  gridColDefsFacCorrTable = [
    {
      headerName: "",
      field: "factorList",
      pinned: true,
      editable: false,
      width: 180,
      cellStyle: {
        textAlign: "center"
      }
    }
  ];

  for (let i = 1; i < numFacs + 1; i++) {
    gridColDefsFacCorrTable.push({
      headerName: headerRow[i],
      field: headerRow[i],
      pinned: false,
      editable: false,
      width: 90,
      cellStyle: {
        textAlign: "center"
      }
    }); // end push
  } // end loop

  return gridColDefsFacCorrTable;
};

const getGridRowDataFacCorrTable = (data, headerRow) => {
  gridRowDataFacCorrTable = [];

  for (let j = 4; j < data.length; j++) {
    // let responNum = j + 1;
    const tempObj = {};
    tempObj.factorList = data[j][0];

    for (let k = 1; k < headerRow.length; k++) {
      tempObj[headerRow[k]] = data[j][k];
    }
    gridRowDataFacCorrTable.push(tempObj);
  }

  return gridRowDataFacCorrTable;
};

class FactorCorrelationsTable extends Component {
  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    // this.gridApi.sizeColumnsToFit();
  }

  render() {
    const currentData = getCurrentData();

    let widthVal = 182 + 90 * currentData[1];
    if (widthVal > window.innerWidth - 100) {
      widthVal = window.innerWidth - 100;
    }
    widthVal += "px";

    gridColDefsFacCorrTable = getGridColDefsFacCorrTable(...currentData); // state.getState("gridColDefsFacTableEigen");
    gridRowDataFacCorrTable = getGridRowDataFacCorrTable(
      currentData[0],
      currentData[2]
    );

    return (
      <div>
        <div
          style={{ height: "auto", width: widthVal }}
          className="ag-theme-fresh"
        >
          <AgGridReact
            id="facCorTable"
            columnDefs={gridColDefsFacCorrTable}
            rowData={gridRowDataFacCorrTable}
            onGridReady={this.onGridReady.bind(this)}
            gridAutoHeight
            enableSorting
          />
        </div>
      </div>
    );
  }
}

export default view(FactorCorrelationsTable);
