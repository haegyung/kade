import state from "../../../store";

const fs = require("fs");
const {dialog} = require("electron").remote;

function saveFile(fileName, csvFile) {
  dialog.showSaveDialog(
    {
      defaultPath: `*/${fileName}`,
      filters: [
        {
          name: "csv",
          extensions: ["csv"]
        }
      ]
    },
    fileName => {
      if (fileName === undefined) return;

      fs.writeFile(fileName, csvFile, "utf-8", err => {
        if (err === undefined || err === null) {
          dialog.showMessageBox({
            message: "The file has been saved.",
            buttons: ["OK"]
          });
        } else {
          dialog.showErrorBox("File Save Error", err.message);
        }
      });
    }
  );
}

function exportToCsv(fileName, rows) {
  const processRow = row => {
    let finalVal = "";
    for (let j = 0; j < row.length; j += 1) {
      let value = row[j];
      if (value === null || value === undefined) {
        value = "";
      }
      const innerValue = value.toString();
      let result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0) {
        result = `"${result}"`;
      }
      if (j > 0) {
        finalVal += ",";
      }
      finalVal += result;
    }
    return `${finalVal}\n`;
  };

  let csvFile = "";
  for (let i = 0; i < rows.length; i += 1) {
    csvFile += processRow(rows[i]);
  }

  saveFile(fileName, csvFile);
}
function downloadCSVdata() {
  const csvBody2 = state.getState("csvData");

  // todo - find out what is adding the extra set of brackets around the data
  const csvBody = csvBody2[0];
  const projectName = state.getState("projectName");
  const nameWithExtension = `${projectName}.csv`;

  // export the file
  exportToCsv(nameWithExtension, csvBody);
}
export default downloadCSVdata;
