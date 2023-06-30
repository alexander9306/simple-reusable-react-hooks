import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    "sm" | "md" | "lg" | "lg" | "xl" | "2xl"
  >("lg");

  const getScreenSize = () => {
    const { innerWidth } = window;

    if (innerWidth < 640) return "sm"
    
    if (innerWidth < 768) return "md"
    
    if (innerWidth < 1024) return "lg"
    
    if (innerWidth < 1280) return "xl"

    return "2xl"
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize())
    handleResize()
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
