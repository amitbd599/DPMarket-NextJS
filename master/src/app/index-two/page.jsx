import ArrivalTwo from "@/components/ArrivalTwo";
import BannerTwo from "@/components/BannerTwo";
import FeaturedTwo from "@/components/FeaturedTwo";
import HeaderOne from "@/components/HeaderOne";
import PopularTwo from "@/components/PopularTwo";
import SaleOfferTwo from "@/components/SaleOfferTwo";
import SellingTwo from "@/components/SellingTwo";
import ServiceOne from "@/components/ServiceOne";
import Testimonial from "@/components/Testimonial";
import Preloader from "@/helper/Preloader";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace Html5 Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
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
    </>
  );
};

export default page;
