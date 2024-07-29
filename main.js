
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 100,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 100,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 400,
});

ScrollReveal().reveal(".event__content", {
  duration: 500,
});