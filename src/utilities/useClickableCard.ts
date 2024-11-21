'use client'
import type { RefObject } from 'react'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

// Type definition for the hook's return value
// Contains refs for both the card container and the link element
type UseClickableCardType<T extends HTMLElement> = {
  card: {
    ref: RefObject<T | null>
  }
  link: {
    ref: RefObject<HTMLAnchorElement | null>
  }
}

// Props interface for configuring the clickable card behavior
interface Props {
  external?: boolean  // Whether the link points to an external site
  newTab?: boolean    // Whether to open the link in a new tab
  scroll?: boolean    // Whether to scroll to top on navigation
}

/**
 * A custom hook that makes a card element clickable while preserving nested link functionality
 * Handles both internal and external navigation with configurable behavior
 */
function useClickableCard<T extends HTMLElement>({
  external = false,
  newTab = false,
  scroll = true,
}: Props): UseClickableCardType<T> {
  const router = useRouter()
  const card = useRef<T>(null)                           // Reference to the card container
  const link = useRef<HTMLAnchorElement>(null)           // Reference to the link element
  const timeDown = useRef<number>(0)                     // Tracks when mouse button was pressed
  const hasActiveParent = useRef<boolean>(false)         // Tracks if click originated on a nested link
  const pressedButton = useRef<number>(0)                // Tracks which mouse button was pressed

  /**
   * Handles the mousedown event
   * Records timing and checks if click started on a nested link
   */
  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (e.target) {
        const target = e.target as Element
        const timeNow = +new Date()
        const parent = target?.closest('a')

        pressedButton.current = e.button

        if (!parent) {
          hasActiveParent.current = false
          timeDown.current = timeNow
        } else {
          hasActiveParent.current = true
        }
      }
    },
    [], // No dependencies needed as we're only using refs
  )

  /**
   * Handles the mouseup event
   * Triggers navigation if conditions are met:
   * - Click duration is less than 250ms
   * - Click didn't start on a nested link
   * - Left mouse button was used
   * - Ctrl key wasn't pressed
   */
  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (link.current?.href) {
        const timeNow = +new Date()
        const difference = timeNow - timeDown.current

        if (link.current?.href && difference <= 250) {
          if (!hasActiveParent.current && pressedButton.current === 0 && !e.ctrlKey) {
            if (external) {
              const target = newTab ? '_blank' : '_self'
              window.open(link.current.href, target)
            } else {
              router.push(link.current.href, { scroll })
            }
          }
        }
      }
    },
    [external, newTab, scroll], // Only include props that affect the behavior
  )

  /**
   * Sets up and cleans up event listeners on the card element
   */
  useEffect(() => {
    const cardNode = card.current

    if (cardNode) {
      cardNode.addEventListener('mousedown', handleMouseDown)
      cardNode.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      if (cardNode) {
        cardNode?.removeEventListener('mousedown', handleMouseDown)
        cardNode?.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [card, link, router, handleMouseDown, handleMouseUp])

  // Return refs for the card container and link element
  return {
    card: {
      ref: card,
    },
    link: {
      ref: link,
    },
  }
}

export default useClickableCard
