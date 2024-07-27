import AboutOne from "@/components/AboutOne";
import BlogAreaOne from "@/components/BlogAreaOne";
import CTAAreaOne from "@/components/CTAAreaOne";
import ClientAreaOne from "@/components/ClientAreaOne";
import CounterOne from "@/components/CounterOne";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterAreaOne from "@/components/FooterAreaOne";
import HeaderOne from "@/components/HeaderOne";
import HeroOne from "@/components/HeroOne";
import MarqueeOne from "@/components/MarqueeOne";
import PortfolioOne from "@/components/PortfolioOne";
import PricingPlanOne from "@/components/PricingPlanOne";
import ProcessAreaOne from "@/components/ProcessAreaOne";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import TestimonialOne from "@/components/TestimonialOne";
import Animation from "@/helper/Animation";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Home || Fixturbo - Car Repair & Auto Services NEXT Js Template",
  description:
    "Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation init */}
      <Animation />

      {/* Header one */}
      <HeaderOne />

      {/* Hero One */}
      <HeroOne />

      {/* Counter One */}
      <CounterOne />

      {/* About One */}
      <AboutOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Marquee One */}
      <MarqueeOne />

      {/* Portfolio One */}
      <PortfolioOne />

      {/* Client Area One */}
      <ClientAreaOne />

      {/* Pricing Plan One */}
      <PricingPlanOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/* Faq Area One */}
      <FaqAreaOne />

      {/* Blog Area One */}
      <BlogAreaOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
