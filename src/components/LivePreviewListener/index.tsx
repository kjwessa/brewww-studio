"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
import React from "react";

export const LivePreviewListener: React.FC = () => {
  const router = useRouter();
  console.log("[LivePreviewListener] Component mounted");

  const handleRefresh = () => {
    console.log("[LivePreviewListener] Refreshing route");
    router.refresh();
  };

  return (
    <PayloadLivePreview
      refresh={handleRefresh}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL!}
    />
  );
};