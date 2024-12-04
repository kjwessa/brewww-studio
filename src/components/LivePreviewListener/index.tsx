'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'
import React from 'react'

/**
 * LivePreviewListener Component
 * 
 * This component enables real-time preview functionality by listening for changes
 * in the Payload CMS admin panel and automatically refreshing the preview route.
 * 
 * It uses the @payloadcms/live-preview-react package to establish a connection
 * with the Payload server and trigger refreshes when content is updated.
 */
export const LivePreviewListener: React.FC = () => {
  const router = useRouter()
  return (
    <PayloadLivePreview refresh={router.refresh} serverURL={process.env.NEXT_PUBLIC_SERVER_URL!} />
  )
}
