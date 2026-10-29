import type { Variants } from "framer-motion";

// Both leaves rotate around the same spine. Forward and backward turns mirror
// each other; direction 0 preserves the first reveal from the temple.
export function pageTurnVariants(reduced: boolean, delay = 0): Variants {
  return {
    enter: (direction: number) => ({
      rotateY: reduced || direction === 0 ? 0 : direction * 88,
      opacity: reduced || direction !== 0 ? 1 : 0,
      boxShadow: "0px 8px 35px rgba(41, 28, 26, 0.18)",
    }),
    visible: {
      rotateY: 0,
      opacity: 1,
      boxShadow: "0px 3px 18px rgba(41, 28, 26, 0.03)",
      transition: {
        duration: reduced ? 0 : 0.7,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      rotateY: reduced ? 0 : -direction * 88,
      opacity: reduced || direction === 0 ? 0 : 1,
      boxShadow: "18px 8px 45px rgba(41, 28, 26, 0.24)",
      transition: {
        duration: reduced ? 0 : 0.65,
        delay: 0,
        ease: [0.55, 0, 0.8, 0.45],
      },
    }),
  };
}

export function pageShadeVariants(reduced: boolean): Variants {
  return {
    enter: { opacity: reduced ? 0 : 0.18 },
    visible: { opacity: 0, transition: { duration: reduced ? 0 : 0.7 } },
    exit: {
      opacity: reduced ? 0 : 0.28,
      transition: { duration: reduced ? 0 : 0.65 },
    },
  };
}
