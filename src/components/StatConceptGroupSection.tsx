import {
  StatConceptGroupId,
  statConceptGroups,
} from "@/lib/stat-concept-groups";
import { statConcepts } from "@/lib/stat-concepts";
import Link from "next/link";

type StatConceptGroupSectionProps = {
  id: StatConceptGroupId;
};

export const StatConceptGroupSection = ({
  id,
}: StatConceptGroupSectionProps) => {
  const section = statConceptGroups.find((c) => c.id === id);

  const concepts = statConcepts.filter((c) => c.group === id);

  if (!section || !concepts) {
    return null;
  }

  const conceptItems = concepts.map((c, i) => {
    return (
      <Link className="no-underline" href={c.url}>
        <div
          key={i}
          className="flex flex-col gap-2 items-center hover:bg-gray-100 p-4 rounded-md"
        >
          <div
            className="rounded-full h-28 w-28 cursor-pointer"
            style={{ backgroundColor: section.color }}
          />
          <span className="text-xs">{c.name}</span>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h2>{section.label}</h2>
      <div className="flex gap-2 my-4">{conceptItems}</div>
    </div>
  );
};
