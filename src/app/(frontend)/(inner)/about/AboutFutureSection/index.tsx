import { Section } from '@/components/layout/Section'

export function AboutFutureSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="border-b-2 border-solid border-black">
        <div className="m-auto w-[95vw] max-w-[95vw]">
          <div className="m-auto flex min-h-[calc(240px)] max-w-[56.25rem] flex-col flex-wrap content-center items-center justify-center py-20 text-center">
            <h1 className="text-display-large mb-8 leading-none">Future-Forward, Human-First</h1>
            <h3 className="mb-8 text-[2.38rem] leading-none">
              We're a team of strategists and creators who see beyond the obvious to craft brands
              that endure. Our secret? We never forget that behind every pixel and strategy lives a
              human story waiting to be told.
            </h3>
          </div>
        </div>
      </div>
    </Section>
  )
}
