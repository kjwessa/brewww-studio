import Image from "next/image";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { Team } from "@/payload-types";

export async function generateStaticParams() {
  console.log("Generating static params for team members");
  const payload = await getPayloadHMR({ config: configPromise });
  console.log("Fetching team members from payload");
  const teams = await payload.find({
    collection: "team",
    limit: 1000,
    overrideAccess: false,
  });
  console.log(`Found ${teams.docs?.length || 0} team members`);
  return (
    teams.docs?.map(({ slug }) => ({
      slug,
    })) || []
  );
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  console.log("Rendering TeamPage");
  console.log(`Params: ${JSON.stringify(resolvedParams)}`);
  if (!resolvedParams.slug) {
    console.log("No slug found in params, redirecting to 404");
    notFound();
  }

  console.log(`Querying team member with slug: ${resolvedParams.slug}`);
  const team = await queryPostBySlug({ slug: resolvedParams.slug });
  if (!team) {
    console.log("Team member not found, redirecting to 404");
    notFound();
  }
  console.log(`Team member found: ${team.title}`);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src={team.image?.url || ""}
            alt={team.title}
            fill
            style={{ objectFit: "cover" }}
            quality={80}
          />
        </div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 z-30 flex items-end justify-start">
          <div className="w-full max-w-xl p-8 lg:p-16">
            <div className="relative mb-4">
              <div className="absolute bottom-0 left-0 h-7 w-3 bg-neutral-950"></div>
              <div className="relative inline-flex w-auto rounded-tl-xl rounded-tr-xl bg-neutral-950 px-4 pt-1 lg:pt-2">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  <div className="ml-2 font-light text-white">
                    Meet the Team
                  </div>
                </div>
                <svg
                  className="absolute bottom-[0.13rem] right-0 h-6 w-6 text-neutral-950 lg:h-6 lg:w-6"
                  fill="rgb(14, 15, 17)"
                  version="1.1"
                  viewBox="0 0 100 100"
                  x="0"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                    fill="rgb(14, 15, 17)"
                  />
                </svg>
              </div>
            </div>
            <h2 className="bg-neutral-950 bg-opacity-80 py-2 text-6xl text-white lg:pb-3 lg:pt-3">
              <span className="block overflow-hidden text-ellipsis pl-3 lg:pl-5">
                {team.title}
              </span>
              <span className="block overflow-hidden text-ellipsis px-3 text-3xl text-zinc-400 lg:pl-5 lg:pr-5">
                {team.role}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

async function queryPostBySlug({
  slug,
}: {
  slug: string;
}): Promise<Team | null> {
  console.log(`Querying team member with slug: ${slug}`);
  const payload = await getPayloadHMR({ config: configPromise });
  try {
    console.log("Executing payload.find query");
    const result = await payload.find({
      collection: "team",
      limit: 1,
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
        ],
      },
    });
    console.log("Query result:", result);
    if (result.docs[0]) {
      console.log("Team member found");
      return result.docs[0];
    } else {
      console.log("No team member found with the given slug");
      return null;
    }
  } catch (error) {
    console.error("Error querying team member:", error);
    return null;
  }
}
