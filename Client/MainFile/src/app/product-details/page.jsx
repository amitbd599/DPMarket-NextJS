import BrandSectionOne from "@/components/BrandSectionOne";
import BreadcrumbTwo from "@/components/BreadcrumbTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ProductDetails from "@/components/ProductDetails";
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

      {/* BreadcrumbTwo */}
      <BreadcrumbTwo />


      {/* ProductDetails */}
      <ProductDetails />


      {/* BrandSectionOne */}

      <BrandSectionOne />


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
