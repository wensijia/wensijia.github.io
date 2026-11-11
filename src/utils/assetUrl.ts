/**
 * Resolve a file in public/ against the Vite base URL so the same build works
 * at a project path and at the root of a custom domain.
 */
export function assetUrl(file: string): string {
  const normalizedFile = file.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalizedFile}`
}
