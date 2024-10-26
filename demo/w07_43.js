const $navCenter = document.querySelector("#nav-center");
const $showClassDemo = document.querySelector("#show-class-demo");

const showDemo = (type) => {
  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.src = `./${type}/index.html`;
  $showClassDemo.innerHTML = iframe.outerHTML;
};

const createNavListItem = (type) => {
  const li = document.createElement("li");
  li.addEventListener("click", () => showDemo(type));
  const a = document.createElement("a");
  a.setAttribute("href", "javascript:;");
  a.innerText = type;
  li.append(a);
  return li;
};

["w02_intro_43", "w03_card_43", "w06_blog_43"].forEach((type) => {
  $navCenter.append(createNavListItem(type));
});
