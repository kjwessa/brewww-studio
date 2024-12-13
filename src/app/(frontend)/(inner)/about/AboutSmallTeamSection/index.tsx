import { Section } from '@/components/layout/Section'

export function AboutSmallTeamSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="container mx-auto border-t-2 border-solid border-t-neutral-100/[0.23] py-16 text-[1.38rem] leading-7 font-light lg:py-24">
        <div className="float-left mt-1 mr-5 text-sm lg:mt-3 lg:mr-8 lg:min-w-[7.50rem]">
          BREWWW
        </div>
        <h2 className="text-[5.00rem] leading-none">
          We're a small team that solves big problems. By blending sharp strategy with fearless
          creativity, we build brands that don't just look different—they act different.
        </h2>
      </div>
    </Section>
  )
}
