import type { FieldHook } from 'payload'

/**
 * Formats a string into a URL-friendly slug by:
 * - Replacing spaces with hyphens
 * - Removing special characters
 * - Converting to lowercase
 */
const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

/**
 * Creates a field hook that automatically generates a slug from another field.
 * Used in Payload CMS for generating URL-friendly slugs.
 * 
 * @param fallback - The name of the field to use as a fallback for generating the slug
 * @returns A FieldHook function that handles slug generation
 */
const formatSlug =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    // If a value is provided and it's a string, format it directly
    if (typeof value === 'string') {
      return format(value)
    }

    // Only generate a slug automatically on document creation
    if (operation === 'create') {
      // Try to get the fallback value from either the incoming data or original document
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      // If we have fallback data and it's a string, format it into a slug
      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData)
      }
    }

    // If no conditions are met, return the original value unchanged
    return value
  }

export default formatSlug
