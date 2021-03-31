const sliding = () => {
  const hamburgerSliding = document.querySelector(".hamburger-sliding");
  const menuListSliding = document.querySelector(".menu-list-sliding");
  const navLinks = document.querySelectorAll(".list-elem-s");
  //Toggle Nav
  hamburgerSliding.addEventListener("click", () => {
    menuListSliding.classList.toggle("slide-end");
    // Animate Links
    navLinks.forEach((link, index) => {
      link.style.animation =
        " navLinkSlide 0.5s ease forwards ${ index / 7 + 0.3s}s";
      console.log(index / 7);
    });
  });
};

sliding();
