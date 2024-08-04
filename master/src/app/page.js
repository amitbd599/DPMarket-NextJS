import ArrivalOne from "@/components/ArrivalOne";
import BannerOne from "@/components/BannerOne";
import BecomeSellerOne from "@/components/BecomeSellerOne";
import BlogOne from "@/components/BlogOne";
import BrandSectionOne from "@/components/BrandSectionOne";
import FeaturedAuthor from "@/components/FeaturedAuthor";
import FeaturedOne from "@/components/FeaturedOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import PerformanceAuthor from "@/components/PerformanceAuthor";
import PopularOne from "@/components/PopularOne";
import SaleOffer from "@/components/SaleOffer";
import SellingOne from "@/components/SellingOne";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace Html5 Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
};

const page = () => {
  return (
    <section className="change-gradient">
      {/* Preloader */}
      <Preloader />

      {/* SaleOffer */}
      <SaleOffer />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* PopularOne */}
      <PopularOne />

      {/* ArrivalOne */}
      <ArrivalOne />

      {/* FeaturedOne */}
      <FeaturedOne />

      {/* SellingOne */}
      <SellingOne />

      {/* FeaturedAuthor */}
      <FeaturedAuthor />

      {/* PerformanceAuthor */}
      <PerformanceAuthor />

      {/* BlogOne */}
      <BlogOne />

      {/* BecomeSellerOne */}
      <BecomeSellerOne />

      {/* BrandSectionOne */}
      <BrandSectionOne />

      {/* FooterOne */}
      <FooterOne />
    </section>
  );
};

export default page;
