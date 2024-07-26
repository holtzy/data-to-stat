import { ReactNode } from "react";
import { StatConceptGroupId } from "./stat-concept-groups";

export type StatConcept = {
  name: string;
  url: string;
  group: StatConceptGroupId;
  icon: "";
  description: ReactNode;
};

export const statConcepts: StatConcept[] = [
  {
    name: "central tendency",
    url: "",
    group: "descriptive",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "dispersion",
    url: "",
    group: "descriptive",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "summarization",
    url: "",
    group: "descriptive",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },

  {
    name: "normal",
    url: "",
    group: "probability",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "binomial",
    url: "",
    group: "probability",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "poisson",
    url: "",
    group: "probability",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },

  {
    name: "t-test",
    url: "t-test",
    group: "hypothesis",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "ANOVA",
    url: "",
    group: "hypothesis",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "poisson",
    url: "",
    group: "hypothesis",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },

  {
    name: "linear regression",
    url: "",
    group: "regression",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "logistic regression",
    url: "",
    group: "regression",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
  {
    name: "poisson",
    url: "",
    group: "regression",
    icon: "",
    description: (
      <>
        <p>Hello</p>
      </>
    ),
  },
];
