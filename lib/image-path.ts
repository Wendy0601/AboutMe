/**
 * Helper function to ensure image paths include the base path for GitHub Pages
 * @param path The original image path
 * @returns The image path with the base path prefix if needed
 */
export function getImagePath(path: string): string {
  if (!path) return "/AboutMe/placeholder.svg"

  // If the path already starts with the base path or is an external URL, return it as is
  if (path.startsWith("/AboutMe") || path.startsWith("http")) {
    return path
  }

  // Otherwise, add the base path
  return `/AboutMe${path}`
}
