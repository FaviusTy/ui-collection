// see: https://type-scale.com/

type ScalewWeight = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

function getFontsize(scaleList: string[]) {
  return function _getFontsize(weight: ScalewWeight) {
    return scaleList.slice(weight)[0];
  };
}

const MinerSecond = [
  "1rem",
  "1.067rem",
  "1.138rem",
  "1.215rem",
  "1.296rem",
  "1.383rem",
  "0.823rem",
  "0.878rem",
  "0.937rem",
];

export function minerSecond(weight: ScalewWeight) {
  return getFontsize(MinerSecond)(weight);
}

const MajorSecond = [
  "1rem",
  "1.125rem",
  "1.266rem",
  "1.424rem",
  "1.602rem",
  "1.802rem",
  "0.702rem",
  "0.79rem",
  "0.889rem",
];

export function majorSecond(weight: ScalewWeight) {
  return getFontsize(MajorSecond)(weight);
}

const MinerThird = [
  "1rem",
  "1.2rem",
  "1.44rem",
  "1.728rem",
  "2.074rem",
  "2.488rem",
  "0.579rem",
  "0.694rem",
  "0.833rem",
];

export function minerThird(weight: ScalewWeight) {
  return getFontsize(MinerThird)(weight);
}

const MajorThird = [
  "1rem",
  "1.25rem",
  "1.563rem",
  "1.953rem",
  "2.441rem",
  "3.052rem",
  "0.512rem",
  "0.64rem",
  "0.8rem",
];

export function majorThird(weight: ScalewWeight) {
  return getFontsize(MajorThird)(weight);
}
