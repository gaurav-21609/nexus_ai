  "use client"

  import { HeroContent } from "./hero-content"
  import { FeaturesContent } from "./features-content"
  import { ProductContent } from "./product-content"
  import { TestimonialsContent } from "./testimonials-content"
  import { DemoContent } from "./demo-content"
  import { Footer } from "./footer"


  export function HtmlContent() {
    return (
      <div className="w-full">
        <HeroContent />
        <FeaturesContent />
        <ProductContent />
        <TestimonialsContent />
        <DemoContent />
        <Footer />
      </div>
    )
  }
