export function HomeHero() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mx-auto mb-6 max-w-5xl text-center text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Some brands are content with silver. Others aim for{" "}
          <span className="text-amber-400">gold</span>.
        </h1>
        <div className="mt-10 flex justify-center">
          <div className="relative inline-block h-20 w-3 overflow-hidden md:h-28">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transform bg-white/35" />
            <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 transform bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
