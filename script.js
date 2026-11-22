document.addEventListener("DOMContentLoaded", () => {

  // Normal section reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  // Trust analysis cards slide in from left and right
  const trustCards = document.querySelectorAll(".trust-card");

  const trustObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trustCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("trust-show");
            }, index * 180);
          });

          trustObserver.disconnect();
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  if (trustCards.length > 0) {
    trustObserver.observe(trustCards[0]);
  }

});