/**
 * Scroll-triggered fade-up animation system.
 *
 * Usage — call `initScrollAnimations()` once on the client side.
 * Any element with the `data-animate` attribute will fade up into
 * view when it enters the viewport. Add `data-delay="200"` (etc.)
 * for staggered reveals.
 */

export function initScrollAnimations(): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Unobserve once revealed so it never replays
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  const targets = document.querySelectorAll<HTMLElement>("[data-animate]");
  targets.forEach((el) => observer.observe(el));

  // Return a cleanup function for use in useEffect
  return () => observer.disconnect();
}
