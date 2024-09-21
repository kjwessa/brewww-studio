import Image from "next/image";

export default function Page() {
  return (
    <section className="fixed z-50 flex min-h-dvh w-full flex-row items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <Image
          src="/images/brewww_mark.png"
          width={256}
          height={256}
          alt="Brewww Studio logo"
        />
        <p className="mt-4 text-xl text-white">Coming soon</p>
      </div>
    </section>
  );
}
