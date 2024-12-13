import { Section } from '@/components/layout/Section'

export function AboutExpectedSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 max-w-3xl text-4xl font-bold">Beyond the Expected</h2>
        <p className="mb-2 max-w-3xl text-lg">
          The most powerful brands aren't built on guesswork—they're crafted through clarity. We
          unite strategic thinking with creative vision to build brands that don't just capture
          attention, but convert it into lasting value.
        </p>
        <p className="mb-2 max-w-3xl text-lg">
          Here's the thing about building brands that last: you can't just guess. Every choice we
          make is anchored in real business goals and human behavior. But data alone doesn't move
          people. That's where creative courage comes in—turning solid strategy into something that
          sparks imagination and drives action.
        </p>
        <p className="mb-8 max-w-3xl text-lg">
          We don't do cookie-cutter solutions or paint-by-numbers design. Your brand deserves better
          than that. Instead, we craft unique paths forward, shaped by your reality but reaching for
          your potential. Because when strategy and creativity align, that's when brands stop
          following trends and start setting them.
        </p>
      </div>
    </Section>
  )
}
