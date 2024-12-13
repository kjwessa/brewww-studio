import Image from 'next/image'
import { Section } from '@/components/layout/Section'

export function AboutTeamSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="mx-auto max-w-5xl md:px-24 md:py-48">
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          <div className="flex flex-col items-center text-center">
            <div className="w-96 pb-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  alt="Kevin Wessa profile picture"
                  className="h-[37.5rem] w-full object-cover"
                  src="/5f53f8986ce296e3d5512d59_kevin-profile-pic.1920.jpg"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="pt-4">
              <p>Founder + Lead Engineer</p>
              <h3 className="mt-2 text-lg font-bold">Kevin Wessa</h3>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-96 pb-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  alt="Christine Wessa profile picture"
                  className="h-[37.5rem] w-full object-cover"
                  src="/5f53f783d20ccc4fe020678f_christine-profile-pic.1920.jpg"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="pt-4">
              <p>Founder + Lead Designer</p>
              <h3 className="mt-2 text-lg font-bold">Christine Wessa</h3>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
