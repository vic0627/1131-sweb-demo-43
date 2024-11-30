const $ = (e) => document.querySelector(e);

const $iframeWrap = $(".show-midterm-answer");
const $iframe = $("#show-midterm-answer__frame");
const $navToggle = $(".nav-toggle");
const $navLinks = $(".nav-links");

const ACTIVE = "active";

$navToggle.addEventListener("click", toggleNav);

function showMidtermAnswer(i) {
  $iframe?.setAttribute("src", `./p${i}_43/p${i}_43.html`);
}

const handleToggle = (active) =>
  [$navToggle, $navLinks, $iframeWrap].forEach((node) =>
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
  if (window.innerWidth >= 800) handleToggle()
})