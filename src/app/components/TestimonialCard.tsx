import { TestimonialCard as TestimonialCardProps } from "@/types/testimonialTypes";

export function TestimonialCard({
  id,
  published,
  client,
  name,
  callout,
  full,
}: TestimonialCardProps) {
  if (!published) {
    return null;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div>
        {callout && <h2 className="text-4xl font-bold uppercase">{callout}</h2>}
        <p className="p-8">{full}</p>
        <p className="text-base">
          {name}
          <br />
          {client}
        </p>
      </div>
    </div>
  );
}
