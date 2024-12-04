import Image from 'next/image'
export default function Page() {
  return (
    <div
      className="fixed z-50 flex min-h-dvh w-full items-center justify-center bg-brand-dark-bg"
    >
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Image
          src="/images/brand/brewww-mark-gold.png"
          width={256}
          height={256}
          alt="Brewww Studio logo"
        />
        <p className="text-brand-gold text-xl font-light">new site coming soon</p>
      </div>
    </div>
  )
}
