const $ = (e) => document.querySelector(e);

const $nav = $(".nav");
const $navToggle = $(".nav-toggle");
const $navLinks = $(".nav-links");

const ACTIVE = "active";

$navToggle.addEventListener("click", toggleNav);

const handleToggle = (active) =>
  [$navToggle, $navLinks].forEach((node) =>
    node.classList[active ? "add" : "remove"](ACTIVE)
  );

function toggleNav() {
  const isPc = window.innerWidth >= 800;

  if (isPc) return;

  const isActiveNav = $navToggle.classList.contains(ACTIVE);

  if (isActiveNav) return handleToggle();

  handleToggle(!0);
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) handleToggle();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    $nav.classList.add("nav-fixed");
    return;
  }

  $nav.classList.remove("nav-fixed");
});
