import Image from 'next/image'
import { Section } from '@/components/layout/Section'

export function AboutChristineKevinSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="flex h-full w-full max-w-full overflow-visible pr-28">
        <Image
          src="/5f53f60a0033860407ff3718_ThebyWessa2020-6960.jpg"
          width={1000}
          height={1000}
          alt="Theby Wessa 2020"
          className="h-full w-full object-cover"
          style={{
            objectPosition: '50% 50%',
          }}
        />
      </div>
    </Section>
  )
}
