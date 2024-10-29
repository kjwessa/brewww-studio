// This utility function checks if the DOM (Document Object Model) is available
// It returns true if we're in a browser environment where we can use DOM APIs
export default !!(
  // Check if the 'window' object exists (it doesn't in server-side environments)
  (
    typeof window !== "undefined" &&
    // Check if the 'document' object exists on the window
    window.document &&
    // Check if we can create DOM elements
    window.document.createElement
  )
);
