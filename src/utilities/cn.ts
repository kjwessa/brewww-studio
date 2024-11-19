import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for merging Tailwind CSS classes and handling conditional classes
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated className string
 * 
 * Example usage:
 * cn('px-2 py-1', condition && 'bg-blue-500', ['text-white', 'rounded'])
 * 
 * This function combines:
 * 1. clsx - for conditional class merging and array handling
 * 2. tailwind-merge - for deduplicating and resolving Tailwind class conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
