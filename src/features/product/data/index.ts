export { costVisibilityFeatures } from "./cost-visibility.data";
export { costControlFeatures } from "./cost-control.data";
export { costGovernanceFeatures } from "./cost-governance.data";

export type FeaturePoint = {
  heading: string;
  description: string;
};

export type Feature = {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  kicker: string;
  points: FeaturePoint[];
  outcome?: string;
  visualUrl: string;
};
