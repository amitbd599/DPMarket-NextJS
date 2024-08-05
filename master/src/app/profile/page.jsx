import BrandSectionOne from "@/components/BrandSectionOne";
import BreadcrumbThree from "@/components/BreadcrumbThree";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Profile from "@/components/Profile";
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

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbThree */}
      <BreadcrumbThree />


      {/* Profile */}
      <Profile />


      {/* BrandSectionOne */}
      <BrandSectionOne />


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
