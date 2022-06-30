import {
  addDependencies,
  bignumberDependencies,
  ceilDependencies,
  create,
  expDependencies,
  floorDependencies,
  log2Dependencies,
  log10Dependencies,
  logDependencies,
  meanDependencies,
  modDependencies,
  powDependencies,
  sqrtDependencies,
} from "mathjs";

const math = create(
  {
    addDependencies,
    bignumberDependencies,
    ceilDependencies,
    expDependencies,
    floorDependencies,
    logDependencies,
    log10Dependencies,
    log2Dependencies,
    meanDependencies,
    modDependencies,
    powDependencies,
    sqrtDependencies,
  },
  {
    number: "BigNumber",
    precision: 60 + 18 + 2, // 60 significant digits, 18 decimal places, and 2 extra digits for doing the rounding correctly
  },
);

export default math;
