import { workProjects } from "@/app/lib/workData";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const projects = workProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function WorkProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = workProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const firstSection = project.sections[0];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="min-[620px]:mb-20 min-[900px]:mb-28 min-[900px]:pr-60">
          <div className="mb-6 uppercase">{project.client}</div>

          <h1 className="text-[3.38rem] leading-none">{project.title}</h1>
        </div>
        <div>
          <div className="relative h-[500px] w-full">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="min-[900px]:flex">
          <div className="w-full uppercase text-red-500 min-[900px]:w-60">
            <div className="mb-6 mt-2 min-[900px]:mb-0 min-[900px]:pr-8">
              The Challenge
            </div>
          </div>

          <div className="w-full min-[900px]:w-[59.098vw]">
            <h2 className="mb-12 text-[2.38rem] leading-none">
              {firstSection.title}
            </h2>

            <div className="w-full text-lg font-light">
              <p>{firstSection.content}</p>
            </div>

            <div className="mt-12 text-lg min-[900px]:mt-10">
              <div className="mb-6 min-[900px]:mb-0">
                <div className="mb-1 font-bold min-[900px]:mr-8 min-[900px]:inline">
                  Services Provided
                </div>

                <p className="mr-4 mt-10 font-light">Experience Design</p>

                <p className="mr-4 mt-10 font-light">Visual Design</p>

                <p className="mr-4 mt-10 font-light">User Research</p>

                <p className="mr-4 mt-10 font-light">Front End Development</p>
              </div>

              <div className="mb-6 min-[900px]:mb-0">
                <div className="mb-1 font-bold min-[900px]:mr-8 min-[900px]:inline">
                  Industry
                </div>

                <p className="mr-4 mt-10 font-light">Customer Experience</p>
              </div>
            </div>
          </div>
        </div>

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
