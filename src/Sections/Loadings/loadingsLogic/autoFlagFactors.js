import state from "../../../store";
import transposeMatrix from "../../../Utils/transposeMatrix";
import loadingsTableDataPrep from "../LoadingsTable/loadingsTableDataPrep";
import calculateCommunalities from "../../Rotation/varimaxLogic/2calculateCommunalities";
import calculateSigCriterionValues from "../../Rotation/varimaxLogic/2calculateSigCriterionValues";

const autoFlagFactors = () => {
  state.setState({
    isLoadingAutoflag: true
  });

  // should produce for Lipset calc style matrix - 9 cols by 7 rows

  // give button time to display loading spinner
  setTimeout(() => {
    // get data for current user selected significance level
    const userSelectedSigLevel = state.getState("userSelectedSigLevel");
    const lookupTable = {
      3.906: "p < 0.0001",
      3.291: "p < 0.001",
      2.575: "p < 0.01",
      1.96: "p < 0.05",
      1.645: "p < 0.1",
      majority: "Majority of Common Variance"
    };
    const criticalLevelText = lookupTable[userSelectedSigLevel];
    const requireMajorityCommonVariance = state.getState(
      "requireMajorityCommonVariance"
    );
    // setup Project History Array text
    let comVarText = "and a majority of common variance was not required";
    if (requireMajorityCommonVariance === true) {
      comVarText = " and a majority of common variance was required";
    }
    const autoFlagHistory = [
      `Autoflagging set to ${criticalLevelText}${comVarText}`
    ];

    const numFactorsKeptForRot = state.getState("numFactorsKeptForRot");

    // reset communalities
    const factorMatrix1 = state.getState("factorMatrix");
    const transposedMatrix = transposeMatrix(factorMatrix1);
    calculateCommunalities(transposedMatrix);

    calculateSigCriterionValues("flag");
    loadingsTableDataPrep(numFactorsKeptForRot);

    state.setState({
      // reset manual rotation
      shouldShowJudgeRotDiv: false,
      judgeButtonActive: false,
      showScatterPlotTableDiv: false,
      abFactors: [],
      highlightRotfactor1: false,
      highlightRotfactor2: false,
      highlightRotfactor3: false,
      highlightRotfactor4: false,
      highlightRotfactor5: false,
      highlightRotfactor6: false,
      highlightRotfactor7: false,
      highlightRotfactor8: false,
      userSelectedRotFactors: [],
      // hide section 6
      autoFlagHistory,
      showOutputFactorSelection: false,
      showFactorCorrelationsTable: false,
      showStandardErrorsDifferences: false,
      showFactorCharacteristicsTable: false,
      showDownloadOutputButtons: false,
      shouldDisplayFactorVizOptions: false,
      displayFactorVisualizations: false,
      sendDataToOutputButtonColor: "orange"
    });
    return null;
  }, 10);
};

export default autoFlagFactors;
