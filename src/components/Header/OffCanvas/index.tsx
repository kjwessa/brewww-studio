'use client'

import React from 'react'
import Link from 'next/link'

interface OffCanvasProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function OffCanvas({ isMenuOpen }: OffCanvasProps) {
  return (
    <div
      className={`bg-brand-gold fixed inset-0 z-50 h-screen w-screen transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="bg-brand-dark-surface relative m-2 flex h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] flex-col justify-between overflow-hidden rounded-md p-6">
        <div className="relative z-10 flex flex-col gap-y-4 pb-6 pl-6">
          <div className="w-full overflow-hidden text-8xl leading-none text-white uppercase">
            <Link
              className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
              href=""
            >
              <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                <div className="col-span-1 row-span-1 -mb-1">Work</div>
              </div>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="w-full overflow-hidden text-8xl leading-none text-white uppercase">
            <Link
              className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
              href=""
            >
              <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                <div className="col-span-1 row-span-1 -mb-1">About</div>
              </div>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="w-full overflow-hidden text-8xl leading-none text-white uppercase">
            <Link
              className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
              href=""
            >
              <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                <div className="col-span-1 row-span-1 -mb-1">Play</div>
              </div>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="w-full overflow-hidden text-8xl leading-none text-white uppercase">
            <Link
              className="group relative flex w-full max-w-full items-center justify-start opacity-[0.35] transition-opacity duration-300 hover:opacity-100"
              href=""
            >
              <div className="grid cursor-pointer auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] items-center justify-items-center">
                <div className="col-span-1 row-span-1 -mb-1">Contact</div>
              </div>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
