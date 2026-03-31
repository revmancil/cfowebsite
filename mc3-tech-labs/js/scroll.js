document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -30px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
});
