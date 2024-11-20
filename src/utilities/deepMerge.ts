// Temporarily disable TypeScript type checking for this file
// @ts-nocheck

/**
 * Checks if a value is a plain object (not null, not an array, and typeof 'object')
 * @param item - The value to check
 * @returns {boolean} - True if the item is a plain object, false otherwise
 */
export function isObject(item: unknown): boolean {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Recursively merges two objects together, creating a new object without modifying the originals.
 * If both objects have the same key and the value is an object, it will deep merge those objects.
 * If the value is not an object, the source value will override the target value.
 * 
 * @param target - The first object to merge
 * @param source - The second object to merge, its values take precedence
 * @returns - A new object containing the merged properties
 * 
 * @example
 * const obj1 = { a: { b: 2 }, c: 3 }
 * const obj2 = { a: { d: 4 }, e: 5 }
 * deepMerge(obj1, obj2) // { a: { b: 2, d: 4 }, c: 3, e: 5 }
 */
export default function deepMerge<T, R>(target: T, source: R): T {
  // Create a shallow copy of the target object as our starting point
  const output = { ...target }

  // Only proceed if both target and source are objects
  if (isObject(target) && isObject(source)) {
    // Iterate through all keys in the source object
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        // If the current source value is an object
        if (!(key in target)) {
          // If the key doesn't exist in target, simply assign the source value
          Object.assign(output, { [key]: source[key] })
        } else {
          // If the key exists in both and both are objects, recursively merge them
          output[key] = deepMerge(target[key], source[key])
        }
      } else {
        // If the source value is not an object, override the target value
        Object.assign(output, { [key]: source[key] })
      }
    })
  }

  return output
}




