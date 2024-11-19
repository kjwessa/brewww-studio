import type React from 'react'
import type { Page, Post } from '@/payload-types'

import { getCachedDocument } from '@/utilities/getDocument'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'

interface Props {
  /** If true, prevents the 404 page from showing when no redirect is found */
  disableNotFound?: boolean
  /** The URL path to check for redirects */
  url: string
}

/**
 * PayloadRedirects - Handles server-side redirects based on configured redirect rules
 * This component checks if the current URL matches any redirect rules and performs
 * the appropriate redirect. It can handle both direct URL redirects and
 * reference-based redirects (to Pages or Posts).
 */
export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
  // Ensure the slug starts with a forward slash
  const slug = url.startsWith('/') ? url : `${url}`

  // Fetch all configured redirects from the cache
  const redirects = await getCachedRedirects()()

  // Find a redirect rule that matches the current URL
  const redirectItem = redirects.find((redirect) => redirect.from === slug)

  if (redirectItem) {
    // Handle direct URL redirects
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url)
    }

    let redirectUrl: string

    // Handle reference-based redirects (when the redirect points to a document ID)
    if (typeof redirectItem.to?.reference?.value === 'string') {
      const collection = redirectItem.to?.reference?.relationTo
      const id = redirectItem.to?.reference?.value

      // Fetch the referenced document (Page or Post)
      const document = (await getCachedDocument(collection, id)()) as Page | Post
      
      // Construct the redirect URL based on the document type and slug
      // For pages, we use the slug directly
      // For other types (like posts), we prefix with the collection name
      redirectUrl = `${redirectItem.to?.reference?.relationTo !== 'pages' ? `/${redirectItem.to?.reference?.relationTo}` : ''}/${
        document?.slug
      }`
    } else {
      // Handle reference-based redirects (when the redirect points to an object with a slug)
      redirectUrl = `${redirectItem.to?.reference?.relationTo !== 'pages' ? `/${redirectItem.to?.reference?.relationTo}` : ''}/${
        typeof redirectItem.to?.reference?.value === 'object'
          ? redirectItem.to?.reference?.value?.slug
          : ''
      }`
    }

    // Perform the redirect if we have a valid URL
    if (redirectUrl) redirect(redirectUrl)
  }

  // If no redirect was found and notFound is not disabled, show the 404 page
  if (disableNotFound) return null

  notFound()
}
