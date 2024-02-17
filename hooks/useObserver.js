import { useEffect, useState } from "react";

export function useObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        entry.isIntersecting
          ? setIsIntersecting(true)
          : setIsIntersecting(false);
      },
      { threshold: 0.9 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    } else {
      observer.observe(document.getElementById(ref));
    }

    // observer.observe(mdRef.current);

    return () => observer.disconnect();
  }, []);

  return { isIntersecting };
}
