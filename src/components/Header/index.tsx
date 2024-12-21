'use client'

import React, { useState } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import OffCanvas from './OffCanvas'
import MenuButton from './MenuButton'

export default function Header() {
  // TODO: bring back the Payload call when the design is completed
  // const payload = await getPayload({ config });
  // TODO: bring back the header when the design is completed
  // const header = (await payload.findGlobal({ slug: "header" })) as HeaderData;

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="bg-brand-dark-bg top-0 z-50 w-full text-sm text-neutral-400">
        <div className="mx-auto max-w-[120rem] px-12">
          <div className="grid grid-cols-3 items-center py-4">
            <div className="flex">
              <Link href="/home">
                <Image
                  className="w-36 max-w-full cursor-pointer"
                  src="https://bucket.brewww.studio/brewww/media/brewww_logo_logotype_full_gold.svg"
                  alt="Brewww Studio logo version logotype in brand gold"
                  width={144}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <nav className="flex items-center space-x-4 font-semibold text-white uppercase">
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/about"
              >
                About
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/why-brewww"
              >
                Why Us
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/journal"
              >
                Journal
              </Link>
              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/work"
              >
                Work
              </Link>

              <Link
                className="relative inline-block min-w-max after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                href="/services"
              >
                Services
              </Link>
            </nav>

            <div className="flex items-center justify-end space-x-4 text-white">
              <div className="flex items-center space-x-4 uppercase">
                <Link
                  className="relative inline-block min-w-max font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  href="mailto:hello@brewww.studio"
                >
                  hello@brewww.studio
                </Link>
                {/* //TODO make sure this button is correctly linked */}
                <Button href="/contact" label="Let's talk" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <OffCanvas isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}
