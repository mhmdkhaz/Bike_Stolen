import loadable from "@loadable/component";

export const BikeDetailsRouting = loadable(() =>
  import("../modules/BikeCardDetails/BikeCardDetailsRouting")
);
