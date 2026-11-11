import { afterEach, describe, expect, it } from 'vitest'

import {
  BUSUANZI_SCRIPT_ID,
  injectBusuanziScript,
  shouldLoadPageViews,
} from '@/utils/analytics'

afterEach(() => {
  document.getElementById(BUSUANZI_SCRIPT_ID)?.remove()
})

describe('page view analytics', () => {
  it('loads the counter only on the production host', () => {
    expect(shouldLoadPageViews('wensijia.github.io')).toBe(true)
    expect(shouldLoadPageViews('localhost')).toBe(false)
    expect(shouldLoadPageViews('127.0.0.1')).toBe(false)
  })

  it('injects the Busuanzi script only once', () => {
    injectBusuanziScript(document)
    injectBusuanziScript(document)

    const scripts = document.querySelectorAll<HTMLScriptElement>(`#${BUSUANZI_SCRIPT_ID}`)
    expect(scripts).toHaveLength(1)
    expect(scripts[0].src).toBe(
      'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
    )
    expect(scripts[0].async).toBe(true)
    expect(scripts[0].getAttribute('referrerpolicy')).toBe('no-referrer-when-downgrade')
  })
})
