import { useEffect, useLayoutEffect } from 'react'

/**
 * A hook that uses useLayoutEffect on the client side and useEffect on the server side.
 * This prevents warnings during SSR while maintaining the benefits of useLayoutEffect in the browser.
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
