const sliding = () => {
  const hamburgerSliding = document.querySelector(".hamburger-sliding");
  const menuListSliding = document.querySelector(".menu-list-sliding");
  const navLinks = document.querySelectorAll(".list-elem-s");
  //Toggle Nav
  hamburgerSliding.addEventListener("click", () => {
    menuListSliding.classList.toggle("slide-end");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = ` navLinkSlide 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    hamburgerSliding.classList.toggle("toggle");
  });
};

sliding();
