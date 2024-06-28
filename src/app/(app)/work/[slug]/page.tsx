import { getWorkProjects } from "@/app/lib/workProjects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getWorkProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function WorkProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = getWorkProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
        <div className="mb-4">
          <span className="font-semibold">client:</span> {project.client}
        </div>
        <div className="mb-4">
          <span className="font-semibold">location:</span> {project.location}
        </div>
        <div className="mb-4">
          <span className="font-semibold">year:</span> {project.year}
        </div>
        <img
          src={project.heroImage}
          alt={project.title}
          className="mb-4 h-64 w-full object-cover"
        />
        <div>
          <span className="font-semibold">Services:</span>{" "}
          {project.services.join(", ")}
        </div>
        <div>
          <span className="font-semibold">Industry:</span>{" "}
          {project.industry.join(", ")}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Live Site
        </a>
        {project.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="mb-2 text-2xl font-semibold">{section.title}</h2>
            <p>{section.content}</p>
            {section.highlights && (
              <ul className="mt-2 list-inside list-disc">
                {section.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
