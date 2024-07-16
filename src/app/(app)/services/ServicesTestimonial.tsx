import { TestimonialCard } from "@/app/components/TestimonialCard";
import { getTestimonialData } from "@/lib/testimonialData";
export function ServicesTestimonial() {
  const allTestimonials = getTestimonialData();
  console.log(allTestimonials);
  const testimonial = allTestimonials.find((t) => t.id === "TX-AZL");

  if (!testimonial) {
    return null;
  }

  return (
    <section className="border-t-2 border-solid border-stone-950 bg-white px-16 py-32 text-center text-stone-950">
      <TestimonialCard {...testimonial} />
    </section>
  );
}
