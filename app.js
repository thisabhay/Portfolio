const contactButton = document.querySelector(".navitem .cont");
contactButton.addEventListener("click", () => {
  const contactForm = document.querySelector("#contact-form");
  contactForm.scrollIntoView({ behavior: "smooth" });
});
