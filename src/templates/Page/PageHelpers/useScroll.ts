import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window) setIsTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("scroll", handleScroll);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isTop;
};
