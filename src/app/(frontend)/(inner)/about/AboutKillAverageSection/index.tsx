import { Section } from '@/components/layout/Section'

export function AboutKillAverageSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="absolute inset-0">
        <picture>
          <source srcSet="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.25&w=2200 550w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.5&w=2200 1100w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&dpr=0.75&w=2200 1650w,https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&w=2200 2200w" />
          <img
            className="h-full w-full object-cover"
            src="https://www.datocms-assets.com/63464/1661346969-stuurmen-office-interior.jpg?auto=format&w=2200"
            alt="Stuurmen office interior"
          />
        </picture>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-8xl font-bold text-white uppercase">Kill off the Average</h2>
      </div>
    </Section>
  )
}
