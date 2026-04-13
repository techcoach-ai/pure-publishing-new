"use client";

import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/animations";

/**
 * Mounts the IntersectionObserver that drives [data-animate] fade-up
 * animations. Render this once inside the root layout.
 */
export default function AnimationObserver() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return null;
}
