import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { Technology } from "@/payload-types";
import { LocationTechSlider } from "./index";

export async function TechSliderServer() {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    const technologies = await payload.find({
      collection: "technologies",
      limit: 100,
      where: {
        and: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            logoLight: {
              exists: true,
            },
          },
        ],
      },
    });

    if (!technologies?.docs || technologies.docs.length === 0) {
      return null;
    }

    return <LocationTechSlider technologies={technologies.docs} />;
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return null;
  }
}
