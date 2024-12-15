'use client'

import { useState, useEffect } from 'react'
import styles from './styles.module.css'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'

interface SpecialButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

export function SpecialButton({ text = 'Start a Project', onClick, className = '' }: SpecialButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [letterStates, setLetterStates] = useState<{ char: string; isScrambling: boolean }[]>([])

  // Helper to check if a character is the first letter of a word
  const isFirstLetter = (index: number, text: string) => {
    return index === 0 || text[index - 1] === ' '
  }

  useEffect(() => {
    // Initialize letter states
    setLetterStates(text.split('').map(char => ({ char, isScrambling: false })))
  }, [text])

  useEffect(() => {
    if (!isHovered) {
      setLetterStates(prev => prev.map(state => ({ ...state, isScrambling: false })))
      return
    }

    const delays = text.split('').map((_, index) => index * 50) // Faster stagger - 50ms per letter
    const scrambleDuration = 400 // Shorter duration - 400ms per letter

    const intervals: NodeJS.Timeout[] = []

    text.split('').forEach((char, index) => {
      // Skip first letters of words
      if (isFirstLetter(index, text)) return

      // Start scrambling after delay
      const startTimeout = setTimeout(() => {
        setLetterStates(prev => {
          const newStates = [...prev]
          newStates[index] = { ...newStates[index], isScrambling: true }
          return newStates
        })

        // Create scrambling interval for this letter
        const interval = setInterval(() => {
          setLetterStates(prev => {
            const newStates = [...prev]
            if (newStates[index].isScrambling) {
              newStates[index] = {
                char: text[index] === ' ' ? ' ' : characters[Math.floor(Math.random() * characters.length)],
                isScrambling: true
              }
            }
            return newStates
          })
        }, 30) // Faster updates - 30ms
        intervals.push(interval)

        // Stop scrambling after duration
        setTimeout(() => {
          clearInterval(interval)
          setLetterStates(prev => {
            const newStates = [...prev]
            newStates[index] = { char: text[index], isScrambling: false }
            return newStates
          })
        }, scrambleDuration)
      }, delays[index])

      intervals.push(startTimeout)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [isHovered, text])

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.specialButton} ${className}`}
    >
      {letterStates.map((state, index) => (
        <span 
          key={index} 
          className={`${state.isScrambling ? styles.scrambling : ''} ${text[index] === ' ' ? styles.space : ''}`}
        >
          {state.char}
        </span>
      ))}
    </button>
  )
}
