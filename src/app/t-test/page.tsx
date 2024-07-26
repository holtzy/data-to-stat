import { StatConceptGroupSection } from "@/components/StatConceptGroupSection";
import { Button } from "@/components/ui/button";
import { data } from "@/data/data";
import { Barplot } from "@/dataviz/barplot/Barplot";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 " style={{ maxWidth: 700 }}>
      <div>
        <p className="mt-12 mb-4 uppercase text-gray-600 text-xl">
          Are those 2 groups different?
        </p>
        <h1>T-Test</h1>

        <p>
          May be a sticky header: reads it as "theory", "R code" or "Python
          code?"
        </p>
        <p>give a good real life example</p>

        <p>Explain that the data must be normal, otherwise it does not work.</p>

        <p>
          Non normality: why does it break everything. What to do in this case?
        </p>

        <p>
          Explain that there are 1 sample t test = to compare group to a mean
          and 2 sample t test = to compare 2 groups. Those will be the subgroups
          of this branch
        </p>

        <p>I need a graph with 2 density charts.</p>

        <p>
          Something I want to explain here is that if the sample size is very
          very high, then the p-value will most likely be significant. But the
          difference remains the same! It's important to keep in mind both the
          pvalue and the difference (t value?)
        </p>

        <p>
          There should be an online calculator. You enter your data and it runs
          the test for you. Shows you the equation. With all the values in the
          equation.
        </p>

        <p>R code and Python code of course.</p>

        <div className="my-12">
          <StatConceptGroupSection id="hypothesis" />
        </div>
      </div>
    </main>
  );
}
