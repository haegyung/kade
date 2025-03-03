import state from "../../../../store";
import grabProjectStatements from "./grabProjectStatements";
import calcMultiplierArrayT2 from "./calcMultiplierArrayT2";
import createMainDataObject from "./createMainDataObject";
import calcSortTriangleShapeT2 from "./calcSortTriangleShapeT2";
import grabRespondentNamesAndSorts from "./grabRespondentNamesAndSorts";
import checkUniqueParticipantNames from "../../logic/checkUniqueParticipantName";


export default function formatype2ForDisplay(rawStatementsData, rawSortsData) {
  let noSortPatternError = false;
  let numStatementsMatchError = false;

  try {
    // store #1
    const projectName1 = rawSortsData[0][1];
    console.log('TCL: exportdefaultfunctionformatype2ForDisplay -> rawSortsData', rawSortsData)
    const projectName = projectName1.toString().replace(/,/g, "");

    // store #2 project history array
    const projectHistoryArray = [
      `${projectName} data loaded from Excel Type 2 file`
    ];

    // store #3
    // const statementsDataT2 = rawStatementsData;
    const currentStatements = grabProjectStatements(rawStatementsData[0]);

    // grab respondent names and sorts
    const sortsDataT2 = rawSortsData[0];
    const calcSorts = grabRespondentNamesAndSorts(sortsDataT2);
    const respondentNames = calcSorts[0];
    const sortsDisplayText = calcSorts[1];
    const symmetryCheckArray = calcSorts[2];

    // store #4
    const totalNumberSorts = respondentNames.length;

    // calculate sort design array
    const calcSortTriangleT2 = calcSortTriangleShapeT2(rawSortsData[0][3]);
    const copyTriangleShape = calcSortTriangleT2[0];
    if (copyTriangleShape.length < 3) {
      noSortPatternError = true;
    }
    // let testSortTriangleShapeArray = calcSortTriangleT2[1];
    const sortTriangleShape = calcSortTriangleT2[2];

    // statement number match
    if (currentStatements.length !== sortTriangleShape.length) {
      numStatementsMatchError = true;
    }

    // store #5 - set Q-sort size (number of statements)
    const originalSortSize = sortTriangleShape.length; // number of statements

    // store #6  -  statement number array
    const statementNumArray = [];
    for (let i = 0; i < currentStatements.length; i += 1) {
      statementNumArray.push(i + 1);
    }

    // store #7 - multiplierArray
    let multiplierArray = [];

    multiplierArray = calcMultiplierArrayT2(copyTriangleShape);
    state.setState({
      multiplierArray
    });

    // store #8  -  sort data
    const mainDataObject = createMainDataObject(
      respondentNames,
      symmetryCheckArray
    );

    const participantNames = checkUniqueParticipantNames(respondentNames);

    state.setState({
      projectName,
      projectHistoryArray,
      multiplierArray,
      statements: currentStatements,
      numQsorts: totalNumberSorts,
      qSortPattern: sortTriangleShape,
      numStatements: originalSortSize,
      mainDataObject,
      statementNumArray,
      sortsDisplayText,
      respondentNames: participantNames
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    state.setState({
      excelErrorMessage1: error.message,
      showExcelErrorModal: true
    });
  }
  return [noSortPatternError, numStatementsMatchError];
}
