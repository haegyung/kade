import cloneDeep from "lodash/cloneDeep";
import * as numeric from "numeric-1.2.6.min";
import store from "../../../store";
import sortEigenValues from "./sortEigenValues";
import calcEigenVectors from "./calcEigenVectors";
import determineNumberPCs from "./determineNumberPCs";
import transposeMatrix from "../../../Utils/transposeMatrix";
import factorTableDataPrep from "../FactorTable/factorTableDataPrep";
import calcEigenCumulPercentArray from "./calcEigenCumulPercentArray";
import inflectPrincipalComponents from "./inflectPrincipalComponents";
import factorTableEigenDataPrep from "../FactorTableEigen/FactorTableEigenDataPrep";
import calculateCommunalities from "../../Rotation/varimaxLogic/2calculateCommunalities";

const pcaDispatch = () => {
  const projectHistoryArray = store.getState("projectHistoryArray");

  const X = store.getState("correlation5Calcs");
  const m = X.length;
  const numberOfSorts = m;
  const numberofPrincipalComps = determineNumberPCs();

  const eigens = numeric.eig(X);

  const sigma = numeric.div(numeric.dot(numeric.transpose(X), X), m);
  const svd = numeric.svd(sigma).U;

  const eigenValuesSorted = sortEigenValues(eigens.lambda.x);
  const getEigenCumulPercentArray = calcEigenCumulPercentArray(
    eigenValuesSorted,
    m
  );

  const eigenValuesAsPercents = getEigenCumulPercentArray[0];
  const eigenValuesCumulPercentArray = getEigenCumulPercentArray[1];

  const doEigenVecsCalcs = calcEigenVectors(
    numberOfSorts,
    numberofPrincipalComps,
    eigenValuesSorted,
    svd
  );

  let eigenVecs = doEigenVecsCalcs[0];
  const inflectionArray = doEigenVecsCalcs[1];
  eigenVecs = inflectPrincipalComponents(eigenVecs, inflectionArray);

  calculateCommunalities([...eigenVecs]);

  // transpose
  const eigenVecsTransposed = transposeMatrix(eigenVecs);

  // truncate arrays
  eigenValuesSorted.length = 8;
  eigenValuesAsPercents.length = 8;
  eigenValuesCumulPercentArray.length = 8;

  // formatted for output file
  const formattedEigenCum = cloneDeep(eigenValuesCumulPercentArray);
  formattedEigenCum.unshift("Cumulative % Expln Var");
  const formattedEigenPer = cloneDeep(eigenValuesAsPercents);
  formattedEigenPer.unshift("% Explained Variance");

  // create data for scree plot
  const eigenData = cloneDeep(eigenValuesSorted);
  const screeData = [];
  eigenData.forEach((element, index) => {
    const tempArray = [];
    tempArray.push(index + 1, eigenData[index]);
    screeData.push(tempArray);
  }, this);

  projectHistoryArray.push("Extracted 8 Principal Components");

  store.setState({
    factorMatrix: eigenVecsTransposed,
    unrotatedFactorMatrix: eigenVecsTransposed,
    eigenvalues: eigenValuesSorted,
    screePlotData: screeData,
    eigensPercentExpVar: formattedEigenPer,
    cumulEigenPerVar: formattedEigenCum,
    projectHistoryArray,
    numFacsForTableWidth: 8
  });

  const eigenvaluesArray = [
    eigenValuesSorted,
    eigenValuesAsPercents,
    eigenValuesCumulPercentArray
  ];
  // draw extracted factors table
  factorTableDataPrep(numberofPrincipalComps, eigenVecsTransposed);

  // draw eigenvalues sub table
  factorTableEigenDataPrep(numberofPrincipalComps, eigenvaluesArray);

  store.setState({
    showUnrotatedFactorTable: true,
    showEigenvaluesTable: true,
    showScreePlot: true,
    pcaButtonText: "Principal Components",
    calculatingPca: false
  });

  // to use with the undo function in Project History
  sessionStorage.setItem("facMatrixArc0", JSON.stringify(eigenVecsTransposed));
};

export default pcaDispatch;
