import state from "../../../store";
import sortsDisplayText from "../logic/sortsDisplayText";
import motivationalToArray from "../logic/motivationalToArray";

function uploadBuzzwordData() {
  const data = [
    [
      "res-1",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -1,
      -3,
      1,
      -4,
      1,
      2,
      1,
      1,
      -4,
      -2,
      5,
      1,
      -2,
      2,
      0,
      4,
      3,
      5,
      0,
      -3,
      -1,
      3,
      0,
      2,
      4,
      0,
      -2,
      3,
      0,
      -4,
      4,
      3,
      0,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-2",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      -4,
      -2,
      -2,
      4,
      -1,
      1,
      1,
      -4,
      0,
      5,
      1,
      0,
      5,
      0,
      3,
      4,
      4,
      1,
      0,
      3,
      -2,
      3,
      -1,
      2,
      0,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-3",
      0,
      -4,
      3,
      0,
      2,
      1,
      -5,
      0,
      -2,
      1,
      4,
      -3,
      5,
      -1,
      -3,
      4,
      2,
      0,
      0,
      3,
      -5,
      -2,
      0,
      0,
      -1,
      1,
      -1,
      -1,
      -3,
      -3,
      -1,
      -1,
      2,
      2,
      -4,
      3,
      4,
      3,
      -4,
      1,
      2,
      5,
      1,
      -2,
      -2,
      0,
      1,
      -2,
      1,
      -1
    ],
    [
      "res-4",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      4,
      -2,
      -4,
      0,
      0,
      1,
      5,
      3,
      5,
      0,
      2,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-5",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      3,
      5,
      1,
      -4,
      -2,
      1,
      3,
      1,
      5,
      0,
      0,
      2,
      -3,
      -3,
      -1,
      0,
      3,
      1,
      2,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-6",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      -3,
      4,
      -1,
      -3,
      2,
      5,
      3,
      -4,
      2,
      4,
      1,
      1,
      1,
      0,
      -2,
      0,
      3,
      4,
      0,
      3,
      3,
      5,
      -2,
      0,
      -2,
      -1,
      1,
      -4,
      1,
      0,
      0,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-7",
      0,
      0,
      2,
      2,
      2,
      -2,
      4,
      0,
      -2,
      3,
      1,
      1,
      -4,
      -4,
      4,
      5,
      -2,
      -1,
      -2,
      3,
      -1,
      -3,
      3,
      5,
      0,
      -5,
      -3,
      1,
      1,
      -1,
      3,
      -1,
      2,
      -2,
      -3,
      -1,
      0,
      1,
      -5,
      -4,
      0,
      1,
      4,
      0,
      -1,
      1,
      -3,
      0,
      2,
      -1
    ],
    [
      "res-8",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -1,
      0,
      3,
      2,
      0,
      1,
      -3,
      3,
      1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-9",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      0,
      1,
      0,
      0,
      3,
      3,
      1,
      4,
      2,
      -1,
      3,
      5,
      4,
      5,
      -2,
      -1,
      1,
      0,
      -4,
      1,
      3,
      -2,
      1,
      0,
      -4,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-10",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-11",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      0,
      1,
      1,
      1,
      -2,
      2,
      0,
      0,
      3,
      1,
      -4,
      -1,
      3,
      2,
      3,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-12",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      1,
      0,
      0,
      -1,
      2,
      1,
      1,
      2,
      -2,
      3,
      0,
      0,
      0,
      -3,
      5,
      1,
      1,
      4,
      3,
      5,
      -4,
      3,
      -2,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-13",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      5,
      -4,
      1,
      1,
      0,
      3,
      -2,
      5,
      0,
      2,
      -2,
      1,
      -1,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-14",
      0,
      -1,
      -1,
      -1,
      -3,
      5,
      0,
      0,
      1,
      -1,
      2,
      -4,
      3,
      3,
      -5,
      1,
      -4,
      5,
      1,
      -2,
      0,
      0,
      2,
      -4,
      3,
      3,
      0,
      4,
      1,
      -1,
      2,
      2,
      4,
      -3,
      -3,
      0,
      0,
      -1,
      1,
      -3,
      4,
      1,
      -2,
      -2,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-15",
      0,
      -1,
      -1,
      -1,
      2,
      0,
      -3,
      0,
      1,
      5,
      0,
      0,
      -4,
      -4,
      3,
      -2,
      0,
      4,
      -2,
      1,
      -3,
      4,
      1,
      -3,
      -1,
      -1,
      4,
      -5,
      1,
      2,
      0,
      5,
      3,
      2,
      1,
      -4,
      3,
      1,
      -3,
      -1,
      -2,
      3,
      2,
      0,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-16",
      0,
      1,
      2,
      -2,
      2,
      -2,
      -4,
      1,
      -3,
      -1,
      1,
      -5,
      3,
      -3,
      -4,
      4,
      -2,
      -1,
      3,
      -3,
      5,
      -1,
      0,
      5,
      3,
      0,
      0,
      -3,
      -1,
      1,
      2,
      -2,
      -1,
      3,
      4,
      1,
      2,
      0,
      -4,
      4,
      -1,
      1,
      0,
      0,
      0,
      -2,
      1,
      -5,
      2,
      -1
    ],
    [
      "res-17",
      0,
      -1,
      1,
      -2,
      0,
      0,
      3,
      1,
      2,
      -4,
      0,
      -3,
      2,
      -4,
      -1,
      1,
      4,
      3,
      5,
      1,
      0,
      1,
      5,
      -1,
      -3,
      0,
      -1,
      3,
      -2,
      0,
      2,
      1,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-18",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-19",
      0,
      -1,
      -1,
      0,
      1,
      5,
      1,
      0,
      4,
      1,
      4,
      -3,
      5,
      1,
      -2,
      -4,
      -4,
      3,
      0,
      3,
      2,
      -3,
      -1,
      2,
      1,
      -1,
      0,
      2,
      0,
      -2,
      1,
      0,
      3,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-20",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-21",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-22",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      0,
      0,
      2,
      5,
      3,
      -3,
      5,
      -4,
      3,
      1,
      2,
      3,
      1,
      -1,
      1,
      -2,
      1,
      0,
      0,
      -2,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-23",
      0,
      -1,
      -3,
      4,
      1,
      0,
      3,
      3,
      1,
      -3,
      1,
      -4,
      2,
      2,
      -4,
      -1,
      1,
      5,
      2,
      -2,
      5,
      -3,
      -2,
      1,
      1,
      -1,
      0,
      -2,
      0,
      3,
      -4,
      0,
      2,
      1,
      0,
      4,
      -1,
      3,
      4,
      -5,
      -1,
      -1,
      0,
      -3,
      0,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-24",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      1,
      2,
      5,
      3,
      -2,
      -4,
      5,
      0,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-25",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-26",
      0,
      -1,
      -1,
      -1,
      2,
      0,
      1,
      0,
      3,
      0,
      -2,
      -3,
      1,
      2,
      1,
      -4,
      1,
      -1,
      0,
      3,
      -3,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-27",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      -4,
      -2,
      0,
      -4,
      1,
      0,
      4,
      5,
      4,
      1,
      3,
      -1,
      2,
      0,
      -2,
      -1,
      5,
      -2,
      0,
      3,
      1,
      1,
      0,
      3,
      4,
      0,
      3,
      1,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-28",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      1,
      -2,
      2,
      0,
      5,
      -2,
      3,
      1,
      0,
      0,
      0,
      0,
      1,
      4,
      -1,
      3,
      5,
      -4,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-29",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      5,
      2,
      4,
      5,
      0,
      -1,
      -4,
      0,
      1,
      0,
      -2,
      -2,
      1,
      3,
      0,
      1,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-30",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-31",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      3,
      0,
      5,
      1,
      4,
      1,
      -3,
      3,
      -2,
      -4,
      0,
      1,
      0,
      2,
      1,
      -3,
      5,
      4,
      -1,
      -1,
      0,
      -2,
      3,
      2,
      3,
      -4,
      0,
      1,
      0,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-32",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      3,
      1,
      1,
      2,
      3,
      0,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-33",
      0,
      2,
      0,
      2,
      4,
      2,
      -4,
      0,
      3,
      3,
      -3,
      1,
      3,
      -2,
      1,
      5,
      -1,
      -3,
      3,
      4,
      -1,
      1,
      0,
      0,
      -1,
      -2,
      -4,
      -1,
      -2,
      0,
      -5,
      -1,
      1,
      -3,
      5,
      1,
      2,
      4,
      0,
      -3,
      -4,
      0,
      2,
      1,
      -1,
      1,
      -2,
      -2,
      -5,
      -1
    ],
    [
      "res-34",
      0,
      -2,
      -4,
      5,
      5,
      1,
      2,
      -3,
      1,
      -3,
      -1,
      -2,
      4,
      2,
      -1,
      -1,
      -5,
      1,
      -4,
      3,
      0,
      4,
      1,
      -4,
      -2,
      -1,
      1,
      3,
      0,
      0,
      3,
      -2,
      -3,
      -1,
      0,
      2,
      1,
      2,
      -5,
      -1,
      1,
      -3,
      0,
      0,
      4,
      -2,
      0,
      3,
      2,
      -1
    ],
    [
      "res-35",
      0,
      -1,
      -1,
      -1,
      0,
      -3,
      3,
      3,
      1,
      -3,
      -2,
      1,
      0,
      2,
      1,
      0,
      2,
      -1,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-36",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-37",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      1,
      1,
      3,
      0,
      -1,
      -4,
      -3,
      0,
      2,
      1,
      3,
      0,
      1,
      5,
      -2,
      2,
      3,
      -3,
      0,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-38",
      -3,
      0,
      -1,
      -2,
      2,
      -1,
      1,
      2,
      3,
      2,
      -1,
      1,
      -4,
      -5,
      -1,
      1,
      1,
      -3,
      1,
      -4,
      5,
      5,
      1,
      -5,
      2,
      0,
      -3,
      1,
      4,
      -1,
      4,
      -2,
      2,
      3,
      4,
      3,
      -2,
      -2,
      -2,
      -3,
      -1,
      3,
      0,
      -4,
      0,
      0,
      -1,
      0,
      0,
      0
    ],
    [
      "res-39",
      0,
      -1,
      -4,
      -3,
      -2,
      0,
      2,
      2,
      1,
      3,
      -1,
      3,
      0,
      -3,
      0,
      0,
      1,
      -1,
      -1,
      1,
      1,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-40",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      4,
      0,
      3,
      4,
      4,
      0,
      -2,
      1,
      1,
      1,
      1,
      -4,
      3,
      -1,
      0,
      5,
      0,
      5,
      0,
      0,
      -2,
      3,
      -2,
      2,
      -1,
      -4,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-41",
      0,
      0,
      -3,
      2,
      4,
      -5,
      2,
      0,
      1,
      3,
      5,
      -1,
      -5,
      3,
      -1,
      -3,
      -2,
      -3,
      1,
      -1,
      -1,
      0,
      1,
      -2,
      -2,
      1,
      -3,
      -2,
      2,
      0,
      -4,
      -1,
      -1,
      1,
      0,
      4,
      1,
      -4,
      -4,
      2,
      5,
      -2,
      0,
      0,
      3,
      3,
      4,
      1,
      2,
      -1
    ],
    [
      "res-42",
      0,
      -1,
      -1,
      -1,
      2,
      3,
      1,
      3,
      5,
      1,
      0,
      -3,
      -2,
      4,
      2,
      -3,
      3,
      1,
      0,
      5,
      -2,
      1,
      -4,
      0,
      0,
      3,
      1,
      1,
      -1,
      2,
      4,
      0,
      -4,
      0,
      -1,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-43",
      2,
      0,
      4,
      -2,
      0,
      1,
      -1,
      3,
      4,
      1,
      1,
      -4,
      3,
      2,
      -3,
      5,
      -3,
      0,
      -1,
      5,
      -1,
      0,
      -1,
      -4,
      -1,
      -2,
      1,
      0,
      2,
      1,
      -3,
      0,
      4,
      -3,
      -1,
      0,
      -2,
      2,
      3,
      0,
      1,
      3,
      -4,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-44",
      0,
      -1,
      -1,
      0,
      1,
      1,
      3,
      -1,
      4,
      -1,
      0,
      0,
      1,
      3,
      -4,
      -2,
      1,
      4,
      -3,
      -3,
      0,
      3,
      0,
      2,
      -4,
      5,
      4,
      5,
      3,
      -2,
      1,
      2,
      -2,
      1,
      -1,
      0,
      2,
      -4,
      0,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-45",
      0,
      -1,
      -3,
      -1,
      3,
      3,
      1,
      1,
      1,
      0,
      2,
      -1,
      -1,
      0,
      1,
      -4,
      3,
      0,
      2,
      0,
      1,
      -3,
      -2,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-46",
      0,
      -1,
      4,
      3,
      5,
      0,
      0,
      3,
      1,
      -2,
      2,
      -1,
      1,
      4,
      -2,
      1,
      1,
      -1,
      3,
      0,
      -3,
      2,
      1,
      -2,
      2,
      -3,
      3,
      -4,
      -1,
      -3,
      0,
      -1,
      1,
      0,
      2,
      0,
      5,
      -1,
      0,
      -4,
      -4,
      4,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-47",
      0,
      -1,
      -1,
      -3,
      -3,
      1,
      3,
      1,
      0,
      5,
      3,
      2,
      0,
      -1,
      2,
      1,
      -4,
      0,
      1,
      2,
      1,
      -1,
      -2,
      5,
      0,
      3,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-48",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      4,
      1,
      1,
      -4,
      -1,
      4,
      5,
      0,
      3,
      5,
      -3,
      1,
      1,
      3,
      0,
      0,
      -2,
      2,
      2,
      -3,
      -2,
      0,
      3,
      0,
      1,
      0,
      -1,
      -4,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-49",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      1,
      -4,
      1,
      1,
      -3,
      3,
      0,
      0,
      -2,
      3,
      -1,
      0,
      1,
      2,
      3,
      -3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-50",
      0,
      -1,
      -1,
      -1,
      -2,
      3,
      0,
      -3,
      4,
      0,
      -4,
      1,
      -2,
      -1,
      1,
      -3,
      5,
      0,
      3,
      4,
      1,
      2,
      0,
      1,
      0,
      3,
      1,
      2,
      -1,
      -2,
      0,
      4,
      3,
      0,
      5,
      2,
      -4,
      1,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-51",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      1,
      -1,
      0,
      1,
      3,
      -3,
      4,
      -1,
      -2,
      3,
      1,
      -2,
      4,
      3,
      2,
      -2,
      -3,
      0,
      3,
      4,
      5,
      5,
      1,
      0,
      0,
      0,
      1,
      -4,
      0,
      2,
      -4,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-52",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      -1,
      -2,
      3,
      0,
      1,
      -4,
      0,
      1,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-53",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      0,
      1,
      -4,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-54",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-55",
      0,
      -1,
      3,
      0,
      -1,
      1,
      -1,
      3,
      1,
      0,
      4,
      -2,
      1,
      2,
      5,
      1,
      3,
      1,
      5,
      0,
      -3,
      -3,
      -1,
      1,
      2,
      -3,
      0,
      -2,
      2,
      -2,
      3,
      4,
      -5,
      4,
      0,
      0,
      -1,
      2,
      -3,
      1,
      -4,
      -4,
      0,
      -1,
      -4,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-56",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      -2,
      0,
      -4,
      -1,
      0,
      1,
      2,
      1,
      5,
      1,
      3,
      0,
      0,
      -2,
      5,
      0,
      4,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-57",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -2,
      1,
      1,
      0,
      -1,
      3,
      -2,
      -4,
      2,
      5,
      0,
      5,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-58",
      0,
      2,
      3,
      -3,
      0,
      -1,
      3,
      -4,
      0,
      0,
      -3,
      -5,
      -1,
      -2,
      2,
      -5,
      1,
      2,
      1,
      4,
      1,
      3,
      2,
      -4,
      -1,
      0,
      1,
      -3,
      1,
      3,
      4,
      -2,
      2,
      5,
      -3,
      4,
      0,
      0,
      -2,
      -1,
      -1,
      -1,
      -4,
      -2,
      1,
      -1,
      5,
      -2,
      0,
      1
    ],
    [
      "res-59",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      1,
      -4,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ],
    [
      "res-60",
      0,
      -1,
      -1,
      -1,
      2,
      1,
      0,
      -3,
      -3,
      2,
      3,
      1,
      3,
      0,
      1,
      0,
      -1,
      -2,
      -4,
      1,
      0,
      1,
      3,
      2,
      5,
      5,
      -2,
      0,
      4,
      0,
      1,
      -4,
      4,
      -1,
      3,
      4,
      -2,
      0,
      -4,
      2,
      -3,
      -1,
      -3,
      -5,
      1,
      -2,
      -2,
      -5,
      2,
      -1
    ]
  ];

  const statements = [
    "Collaboratively administrate empowered markets via plug-and-play networks.",
    "Dynamically procrastinate B2C users after installed base benefits.",
    "Dramatically visualize customer directed convergence without revolutionary ROI.",
    "Efficiently unleash cross-media information without cross-media value.",
    "Quickly maximize timely deliverables for real-time schemas.",
    "Dramatically maintain clicks-and-mortar solutions without functional solutions.",
    "Completely synergize resource taxing relationships via premier niche markets.",
    "Professionally cultivate one-to-one customer service with robust ideas.",
    "Dynamically innovate resource-leveling customer service for state of the art customer service.",
    "Objectively innovate empowered manufactured products whereas parallel platforms.",
    "Holisticly predominate extensible testing procedures for reliable supply chains.",
    "Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.",
    "Proactively envisioned multimedia based expertise and cross-media growth strategies.",
    "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
    "Holistically pontificate installed base portals after maintainable products.",
    "Phosfluorescently engage worldwide methodologies with web - enabled technology.",
    "Interactively coordinate proactive e - commerce via process - centric 'outside the box' thinking.",
    "Completely pursue scalable customer service through sustainable potentialities.",
    "Collaboratively administrate turnkey channels whereas virtual e - tailers.",
    "Objectively seize scalable metrics whereas proactive e - services.",
    "Seamlessly empower fully researched growth strategies and interoperable internal or 'organic' sources.",
    "Credibly innovate granular internal or 'organic' sources whereas high standards in web - readiness.",
    "Energistically scale future - proof core competencies vis - a - vis impactful experiences.",
    "Dramatically synthesize integrated schemas with optimal networks.",
    "Interactively procrastinate high - payoff content without backward - compatible data.",
    "Quickly cultivate optimal processes and tactical architectures.",
    "Completely iterate covalent strategic theme areas via accurate e - markets.",
    "Globally incubate standards compliant channels before scalable benefits.",
    "Quickly drive clicks - and - mortar catalysts for change before vertical architectures.",
    "Credibly reintermediate backend ideas for cross - platform models.",
    "Continually reintermediate integrated processes through technically sound intellectual capital.",
    "Holistically foster superior methodologies without market - driven best practices.",
    "Distinctively exploit optimal alignments for intuitive bandwidth.",
    "Quickly coordinate e - business applications through revolutionary catalysts for change.",
    "Seamlessly underwhelm optimal testing procedures whereas bricks - and - clicks processes.",
    "Synergistically evolve 2.0 technologies rather than just in time initiatives.",
    "Quickly deploy strategic networks with compelling e - business.",
    "Credibly pontificate highly efficient manufactured products and enabled data.",
    "Dynamically target high - payoff intellectual capital for customized technologies.",
    "Objectively integrate emerging core competencies before process - centric communities.",
    "Dramatically evisculate holistic innovation rather than client - centric data.",
    "Progressively maintain extensive infomediaries via extensible niches.",
    "Dramatically disseminate standardized metrics after resource - leveling processes.",
    "Objectively pursue diverse catalysts for change for interoperable meta - services.",
    "Proactively fabricate one - to - one materials via effective e - business.",
    "Completely synergize scalable e - commerce rather than high standards in e - services.",
    "Assertively iterate resource maximizing products after leading - edge intellectual capital.",
    "Distinctively re - engineer revolutionary meta - services and premium architectures.",
    "Intrinsically incubate intuitive opportunities and real - time potentialities.",
    "Appropriately communicate one - to - one technology after plug - and - play networks."
  ];

  const sortsData = motivationalToArray(data, 50, -5);
  const sortsDisplayText2 = sortsDisplayText(sortsData[1]);

  state.setState({
    projectName: "Buzzwords",
    projectHistoryArray: ["Buzzwords project loaded from demo data"],
    statements,
    numQsorts: 60,
    numStatements: 50,
    multiplierArray: ["not loaded"],
    mainDataObject: sortsData[1],
    sortsDisplayText: sortsDisplayText2,
    respondentNames: sortsData[0],
    qSortPattern: [
      -5,
      -5,
      -4,
      -4,
      -4,
      -3,
      -3,
      -3,
      -3,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      5,
      5
    ]
  });
}
;

export default uploadBuzzwordData;
