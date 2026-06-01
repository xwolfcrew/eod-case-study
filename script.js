window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".nav-lower", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });

  gsap.to(".nav-lower", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.out",
    scrollTrigger: {
      trigger: "body",
      start: () => window.innerHeight * 0.1,
      end: () => window.innerHeight * 0.2,
      scrub: 1,
    },
  });

  gsap.set(".lower-wrapper-progress-bar", {
    xPercent: -100,
    transformOrigin: "left center",
  });

  gsap.to(".lower-wrapper-progress-bar", {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
});
