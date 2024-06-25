import { getPlayProjects } from "@/app/lib/playProjects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getPlayProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function PlayProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = getPlayProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
      <div className="mb-4">
        <span className="font-semibold">Brand:</span> {project.brand}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Type:</span> {project.type}
      </div>
      <img
        src={project.heroImage}
        alt={project.title}
        className="mb-4 h-64 w-full object-cover"
      />
      <div className="mb-4">
        <span className="font-semibold">Description:</span>{" "}
        {project.description}
      </div>
      {project.items && project.items.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-2 text-2xl font-semibold">Items</h2>
          {project.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {item.images.map((image, i) => (
                  <img
                    key={i}
                    src={image.url}
                    alt={image.alt}
                    className="h-auto w-full object-cover"
                  />
                ))}
              </div>
              {item.externalLink && item.externalLink.url && (
                <a
                  href={item.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  {item.externalLink.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
      {project.tags && project.tags.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-2 text-2xl font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="rounded bg-gray-200 px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
