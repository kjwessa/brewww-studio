import type { FieldHook } from 'payload'

/**
 * Formats a string into a URL-friendly slug by:
 * - Replacing spaces with hyphens
 * - Removing special characters
 * - Converting to lowercase
 * - Replacing multiple hyphens with a single hyphen
 */
const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .toLowerCase()

/**
 * Formats a string into a URL-friendly slug by:
 * - Replacing spaces with hyphens
 * - Removing special characters
 * - Converting to lowercase
 * - Replacing multiple hyphens with a single hyphen
 */
export const formatSlug = (val: string): string =>
  format(val)

/**
 * Creates a field hook that automatically generates a slug from another field.
 * Used in Payload CMS for generating URL-friendly slugs.
 * 
 * @param fallback - The name of the field to use as a fallback for generating the slug
 * @returns A FieldHook function that handles slug generation
 */
export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    // If a value is provided and it's a string, format it directly
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    // Only generate a slug automatically on document creation or if no slug exists
    if (operation === 'create' || !data?.slug) {
      // Try to get the fallback value from either the incoming data or original document
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      // If we have fallback data and it's a string, format it into a slug
      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    // If no conditions are met, return the original value unchanged
    return value
  }

export default formatSlugHook
