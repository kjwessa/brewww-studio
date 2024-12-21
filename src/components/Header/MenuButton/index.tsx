'use client'

import React from 'react'
import MenuIcon from '../MenuIcon'

interface MenuButtonProps {
  isOpen: boolean
  toggleMenu: () => void
}

export default function MenuButton({ isOpen, toggleMenu }: MenuButtonProps) {
  return (
    <button
      className="fixed top-4 right-12 z-[60] h-12 min-w-8 cursor-pointer"
      onClick={toggleMenu}
    >
      <span className="flex h-full w-full items-center justify-center">
        <MenuIcon isOpen={isOpen} />
      </span>
    </button>
  )
}
