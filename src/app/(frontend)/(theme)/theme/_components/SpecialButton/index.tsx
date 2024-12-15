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
  const [scrambledText, setScrambledText] = useState(text)

  useEffect(() => {
    if (!isHovered) {
      setScrambledText(text)
      return
    }

    let iterations = 0
    const maxIterations = 10
    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (iterations > index) return char
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      iterations += 1
      if (iterations >= maxIterations) {
        clearInterval(interval)
        setScrambledText(text)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isHovered, text])

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.specialButton} ${className}`}
    >
      {scrambledText}
    </button>
  )
}
