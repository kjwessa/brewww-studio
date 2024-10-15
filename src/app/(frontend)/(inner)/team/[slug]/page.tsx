import Image from "next/image";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { Team, Media } from "@/payload-types";

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const teams = await payload.find({
    collection: "team",
    limit: 1000,
    overrideAccess: false,
  });
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
  if (!resolvedParams.slug) {
    notFound();
  }

  const team = await queryPostBySlug({ slug: resolvedParams.slug });
  if (!team) {
    notFound();
  }

  return (
    <>
      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Image
            src={(team.image as Media)?.url || ""}
            alt={(team.image as Media)?.alt || ""}
            fill
            style={{ objectFit: "cover" }}
            quality={80}
            priority
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
      <div className="w-full bg-neutral-950 py-10 text-black lg:pb-16 lg:pt-16 min-[1450px]:pb-24 min-[1450px]:pt-24">
        <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
          <div className="relative flex flex-wrap items-start justify-between">
            <div className="relative flex w-full flex-wrap px-2 lg:mb-0 lg:w-[56.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4 min-[2100px]:w-2/4">
              <div className="order-1">
                <div className="mb-3 inline-flex w-auto items-center xl:absolute xl:left-[1.00rem] xl:top-[0.50rem]">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">
                    Meet {team.title}
                  </div>
                </div>
                <div className="mb-5 w-full indent-48 text-5xl text-white lg:mb-10 lg:pr-16">
                  <h3 className="mb-3 indent-48">
                    Get to know the founder and lead developer of Brewww Studio,
                    Kevin Wessa.
                  </h3>
                </div>
              </div>
              <div className="order-3 mb-5 w-full">
                <div className="relative inline-flex items-center">
                  <a
                    className="inline-flex"
                    href=""
                    style={{
                      outlineOffset: "2px",
                      outlineStyle: "solid",
                      outlineWidth: "2px",
                    }}
                  >
                    <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                      <div className="inline-flex">
                        Get to know {team.title}
                      </div>
                    </div>
                    <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
                  </a>
                  <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
                    <div className="relative overflow-hidden">
                      <div>
                        <svg
                          className="h-3 w-3"
                          fill="rgb(1, 2, 2)"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                            fill="rgb(1, 2, 2)"
                          />
                        </svg>
                      </div>
                      <div className="absolute left-0 top-0">
                        <svg
                          className="h-3 w-3"
                          fill="rgb(1, 2, 2)"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                            fill="rgb(1, 2, 2)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-2 text-lg font-light text-zinc-400 lg:w-[43.75%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
              <div className="mb-10 w-full xl:pr-10">
                <p className="mb-6">
                  With a background in economics, Kevin had always planned on a
                  career in finance. But while working for two start-ups after
                  college, he learned the importance of branding and the split
                  second decisions people make about the tone, voice, and
                  visuals of brand presentation. Beginning as a concept
                  NorthernDNA in 2012, it was in 2017 when Kevin went all in on
                  building Brewww.
                </p>
                <p className="mb-6">
                  Family man and entrepreneur, it's Kevin's goal to help "bring
                  about" the dreams of others, hence Brewww Studio was born. The
                  company thrives on the simple goal to craft unbounded brands.
                  Kevin's passion for branding and his entrepreneurial spirit
                  have transformed Brewww into a studio that helps businesses
                  make lasting impressions through innovative brand strategies.
                </p>
              </div>
            </div>
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
  const payload = await getPayloadHMR({ config: configPromise });
  try {
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
    if (result.docs[0]) {
      return result.docs[0];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
