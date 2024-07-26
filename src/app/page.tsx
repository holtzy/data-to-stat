import { StatConceptGroupSection } from "@/components/StatConceptGroupSection";
import { Button } from "@/components/ui/button";
import { data } from "@/data/data";
import { Barplot } from "@/dataviz/barplot/Barplot";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 " style={{ maxWidth: 700 }}>
      <div>
        <p className="mt-12 mb-4 uppercase text-gray-600 text-xl">
          Data To Stat
        </p>
        <h1>Visual explanations of core statistical concepts</h1>

        <p>
          We’re here to make learning key statistical concepts fun and
          accessible through <b>visual essays</b>. Our approach emphasizes{" "}
          <b>intuition</b> over intricate explanations and <b>visual clues</b>{" "}
          over complex equations.
        </p>
        <p>
          Plus, you’ll always find R and Python code included so you can run the
          analysis yourself at home.
        </p>

        <p>
          Now, here is the question you need to answer to visit this website:
        </p>

        <blockquote>What are you trying to do with your data?</blockquote>

        <div className="my-12">
          <StatConceptGroupSection id="descriptive" />
          <br />
          <br />
          <StatConceptGroupSection id="probability" />
          <br />
          <br />
          <StatConceptGroupSection id="hypothesis" />
          <br />
          <br />
          <StatConceptGroupSection id="regression" />
        </div>
      </div>
    </main>
  );
}
