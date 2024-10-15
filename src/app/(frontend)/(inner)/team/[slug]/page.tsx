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

  return <>{team.title}</>;
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
