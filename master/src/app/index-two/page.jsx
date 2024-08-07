import ArrivalTwo from "@/components/ArrivalTwo";
import BannerTwo from "@/components/BannerTwo";
import BecomeSellerTwo from "@/components/BecomeSellerTwo";
import BlogTwo from "@/components/BlogTwo";
import BrandSectionTwo from "@/components/BrandSectionTwo";
import FeaturedTwo from "@/components/FeaturedTwo";
import FooterTwo from "@/components/FooterTwo";
import HeaderOne from "@/components/HeaderOne";
import Newsletter from "@/components/Newsletter";
import PopularTwo from "@/components/PopularTwo";
import PricingOne from "@/components/PricingOne";
import ResourceOne from "@/components/ResourceOne";
import SaleOfferTwo from "@/components/SaleOfferTwo";
import SellingTwo from "@/components/SellingTwo";
import ServiceOne from "@/components/ServiceOne";
import Testimonial from "@/components/Testimonial";
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

      {/* SaleOfferTwo */}
      <SaleOfferTwo />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PopularTwo */}
      <PopularTwo />

      {/* SellingTwo */}
      <SellingTwo />

      {/* ArrivalTwo */}
      <ArrivalTwo />

      {/* FeaturedTwo */}
      <FeaturedTwo />

      {/* ServiceOne */}
      <ServiceOne />

      {/* Testimonial */}
      <Testimonial />

      {/* PricingOne */}
      <PricingOne />

      {/* BrandSectionTwo */}
      <BrandSectionTwo />

      {/* BecomeSellerTwo */}
      <BecomeSellerTwo />

      {/* BlogTwo */}
      <BlogTwo />

      {/* ResourceOne */}
      <ResourceOne />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default page;
