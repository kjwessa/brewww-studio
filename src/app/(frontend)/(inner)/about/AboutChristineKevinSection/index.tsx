import Image from 'next/image'

export function AboutChristineKevinSection() {
  return (
    <section className="bg-brand-dark-bg h-full w-full pr-28 pl-0 text-white">
      <div className="flex h-screen w-full max-w-full overflow-visible">
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
    </section>
  )
}
