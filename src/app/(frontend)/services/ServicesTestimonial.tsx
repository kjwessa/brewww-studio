import { TestimonialCard } from "@/app/components/TestimonialCard";
import { getTestimonialData } from "@/lib/testimonialData";
export function ServicesTestimonial() {
  const allTestimonials = getTestimonialData();
  const testimonial = allTestimonials.find((t) => t.id === "GA-CC");

  if (!testimonial) {
    return null;
  }

  return (
    <section className="bg-white px-16 py-32 text-center text-stone-950">
      <TestimonialCard {...testimonial} />
    </section>
  );
}
