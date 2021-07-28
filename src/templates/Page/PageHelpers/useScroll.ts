import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    setIsTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isTop;
};
