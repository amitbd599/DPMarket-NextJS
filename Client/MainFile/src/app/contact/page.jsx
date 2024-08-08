import BrandSectionOne from "@/components/BrandSectionOne";
import BreadcrumbEight from "@/components/BreadcrumbEight";
import Contact from "@/components/Contact";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import NewsletterTwo from "@/components/NewsletterTwo";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace NEXT JS Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbEight */}
      <BreadcrumbEight />

      {/* Contact */}
      <Contact />


      {/* NewsletterTwo */}
      <NewsletterTwo />


      {/* BrandSectionOne */}
      <BrandSectionOne />


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
