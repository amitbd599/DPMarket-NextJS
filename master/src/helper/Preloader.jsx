"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events?.on("routeChangeStart", handleRouteChangeStart);
    router.events?.on("routeChangeComplete", handleRouteChangeComplete);
    router.events?.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events?.off("routeChangeStart", handleRouteChangeStart);
      router.events?.off("routeChangeComplete", handleRouteChangeComplete);
      router.events?.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      {loading === true && (
        <div className="loader-mask">
          <div className="loader">
            <div />
            <div />
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
