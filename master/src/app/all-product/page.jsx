import AllProduct from "@/components/AllProduct";
import BrandSectionOne from "@/components/BrandSectionOne";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ResourceOne from "@/components/ResourceOne";
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

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* AllProduct */}
      <AllProduct />

      {/* ResourceOne */}
      <div className="resource-style-two">
      <ResourceOne/>
      </div>

      
      {/* BrandSectionOne */}

      <BrandSectionOne />
 

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
