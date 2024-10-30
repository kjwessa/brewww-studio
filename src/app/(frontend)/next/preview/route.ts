import jwt from "jsonwebtoken";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { CollectionSlug } from "payload";

const payloadToken = "payload-token";

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string;
      };
    };
  },
): Promise<Response> {
  console.log("[preview/route.ts] Starting preview request...");
  const payload = await getPayloadHMR({ config: configPromise });
  const token = req.cookies.get(payloadToken)?.value;
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const collection = searchParams.get("collection") as CollectionSlug;
  const slug = searchParams.get("slug");

  const previewSecret = searchParams.get("previewSecret");

  if (previewSecret) {
    console.log("[preview/route.ts] Preview secret provided - access denied");
    return new Response("You are not allowed to preview this page", {
      status: 403,
    });
  } else {
    if (!path) {
      console.log("[preview/route.ts] No path provided");
      return new Response("No path provided", { status: 404 });
    }

    if (!collection) {
      console.log("[preview/route.ts] No collection provided");
      return new Response("No path provided", { status: 404 });
    }

    if (!slug) {
      console.log("[preview/route.ts] No slug provided");
      return new Response("No path provided", { status: 404 });
    }

    if (!token) {
      console.log("[preview/route.ts] No token provided");
      new Response("You are not allowed to preview this page", { status: 403 });
    }

    if (!path.startsWith("/")) {
      console.log("[preview/route.ts] Invalid path - must start with /");
      new Response("This endpoint can only be used for internal previews", {
        status: 500,
      });
    }

    let user;

    try {
      user = jwt.verify(token, payload.secret);
      console.log("[preview/route.ts] Token verified successfully");
    } catch (error) {
      console.log("[preview/route.ts] Error verifying token:", error);
      payload.logger.error("Error verifying token for live preview:", error);
    }

    const draft = await draftMode();

    // You can add additional checks here to see if the user is allowed to preview this page
    if (!user) {
      console.log("[preview/route.ts] No user found - disabling draft mode");
      draft.disable();
      return new Response("You are not allowed to preview this page", {
        status: 403,
      });
    }

    // Verify the given slug exists
    try {
      console.log(
        `[preview/route.ts] Searching for document in collection: ${collection}, slug: ${slug}`,
      );
      const docs = await payload.find({
        collection: collection,
        draft: true,
        where: {
          slug: {
            equals: slug,
          },
        },
      });

      if (!docs.docs.length) {
        console.log("[preview/route.ts] Document not found");
        return new Response("Document not found", { status: 404 });
      }
      console.log("[preview/route.ts] Document found successfully");
    } catch (error) {
      console.log("[preview/route.ts] Error finding document:", error);
      payload.logger.error("Error verifying token for live preview:", error);
    }

    console.log(
      "[preview/route.ts] Enabling draft mode and redirecting to:",
      path,
    );
    draft.enable();

    redirect(path);
  }
}
