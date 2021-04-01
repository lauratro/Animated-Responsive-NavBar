const bubble = () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".menu-list");
  const links = document.querySelectorAll(".list-elem");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("end");
    });
  });
};
bubble();

