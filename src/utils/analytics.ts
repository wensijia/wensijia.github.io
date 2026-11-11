export const BUSUANZI_SCRIPT_ID = 'busuanzi-page-view-script'
export const BUSUANZI_SCRIPT_SRC =
  'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
export const PRODUCTION_HOST = 'wensijia.github.io'

/**
 * Busuanzi counts are scoped to the host that loads the script. Only the
 * production Pages host should report, so local development and preview
 * servers never pollute the public numbers.
 */
export function shouldLoadPageViews(hostname: string = window.location.hostname): boolean {
  return hostname === PRODUCTION_HOST
}

export function injectBusuanziScript(doc: Document = document): void {
  if (doc.getElementById(BUSUANZI_SCRIPT_ID)) return

  const script = doc.createElement('script')
  script.id = BUSUANZI_SCRIPT_ID
  script.src = BUSUANZI_SCRIPT_SRC
  script.async = true
  script.referrerPolicy = 'no-referrer-when-downgrade'
  script.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')
  doc.head.appendChild(script)
}
