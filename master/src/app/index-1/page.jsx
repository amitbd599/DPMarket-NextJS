import BannerOne from "@/components/BannerOne";
import HeaderOne from "@/components/HeaderOne";
import SaleOffer from "@/components/SaleOffer";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace Html5 Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
};

const page = () => {
  return (
    <>
      {/* SaleOffer */}
      <SaleOffer />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />
    </>
  );
};

export default page;
