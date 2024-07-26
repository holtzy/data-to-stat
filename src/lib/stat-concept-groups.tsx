export type StatConceptGroupId =
  | "descriptive"
  | "probability"
  | "regression"
  | "hypothesis"
  | "todo";

export type statConceptGroup = {
  id: StatConceptGroupId;
  label: string;
  color: string;
};

export const statConceptGroups: statConceptGroup[] = [
  {
    id: "descriptive",
    label: "Describe some data",
    color: "#FED789FF",
  },
  {
    id: "probability",
    label: "Compute some probability",
    color: "#023743FF",
  },
  {
    id: "hypothesis",
    label: "Compute some probability",
    color: "#72874EFF",
  },
  {
    id: "regression",
    label: "Compute some probability",
    color: "#476F84FF",
  },
  {
    id: "todo",
    label: "Compute some probability",
    color: "#A4BED5FF",
  },
];
