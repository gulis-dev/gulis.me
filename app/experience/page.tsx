import data from "@/data/experience.en.json";

export default function ExperiencePage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Experience</h1>
      <ul className="mt-6 space-y-4">
        {data.map((item, i) => (
          <li key={i} className="rounded-lg border p-4">
            <h3 className="font-medium">
              {item.role} — {item.company}
            </h3>
            <p className="text-sm text-neutral-500">{item.location}</p>
            <ul className="mt-2 list-disc pl-5 text-sm">
              {item.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}