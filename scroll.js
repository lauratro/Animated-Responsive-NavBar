const sections = document.querySelectorAll("section");
const bglink = document.querySelector(".bglink");
const gradients = [
  "linear-gradient(to right top, #12c2e962, #c471ed, #f64f59)",
  "linear-gradient(to right top, #b92b27, #1565c0, #f64f59)",
  "linear-gradient(to right top, #40e0d0, #ff8c00, #ff0080)",
];
const options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bglink.style.setProperty("left", `${directions.left}px`);
      bglink.style.setProperty("top", `${directions.top}px`);
      bglink.style.setProperty("height", `${directions.height}px`);
      bglink.style.setProperty("width", `${directions.width}px`);
      bglink.style.background = gradients[gradientIndex];
    }
  });
}
sections.forEach((section) => {
  observer.observe(section);
});
