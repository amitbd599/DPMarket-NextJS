
import DashboardFollowers from "@/components/DashboardFollowers";
import ProfileInner from "@/components/ProfileInner";
import Preloader from "@/helper/Preloader";
import MasterLayout from "@/layout/MasterLayout";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace NEXT JS Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
};

const page = () => {
  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        
        {/* DashboardFollowers */}
        <DashboardFollowers />


      </MasterLayout>

    </>
  );
};

export default page;
