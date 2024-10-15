import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== undefined) return window.matchMedia(query).matches;

    return false;
  });

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);

      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      mediaQueryList.addEventListener("change", handleChange);

      // Cleanup listener on component unmount
      return () => {
        mediaQueryList.removeEventListener("change", handleChange);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;