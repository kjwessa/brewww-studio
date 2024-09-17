import Image from "next/image";

export function HomeImage() {
  return (
    <div className="relative h-[80vh] w-full bg-neutral-900 text-white">
      <Image
        src="/5f109d8acc3b4cf5ce8f9ebe_DSC04349-Edit.1920.jpg"
        alt="Background"
        fill
        className="object-cover"
        style={{
          objectPosition: "50% 30%",
        }}
      />
    </div>
  );
}
