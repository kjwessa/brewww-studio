import { draftMode } from "next/headers";

export async function GET(): Promise<Response> {
  console.log("[exit-preview/GET.ts] Disabling draft mode...");
  const draft = await draftMode();
  draft.disable();
  console.log("[exit-preview/GET.ts] Draft mode disabled successfully");
  return new Response("Draft mode is disabled");
}
