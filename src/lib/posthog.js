import posthog from 'posthog-js'

const POSTHOG_KEY = 'phc_IcPQJj7BhrYiUqhf8IuJEei80OAzsFmfvdl0uF970R'
const POSTHOG_HOST = 'https://eu.i.posthog.com'

export function initPostHog() {
  if (typeof window === 'undefined' || !POSTHOG_KEY) return posthog
  const init = () => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      capture_pageview: true,
      autocapture: true,
      session_recording: {},
      respect_dnt: true,
    })
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(init, { timeout: 2000 })
  } else {
    setTimeout(init, 0)
  }
  return posthog
}

export { posthog }
