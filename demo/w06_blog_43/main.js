import "./style.css";
import img1 from "/images/photo-1.jpg";
import img2 from "/images/photo-2.jpg";
import img3 from "/images/photo-3.jpg";
import img4 from "/images/photo-4.jpg";
import img5 from "/images/photo-5.jpg";
import img6 from "/images/photo-6.jpg";
import img7 from "/images/photo-7.jpg";
import img8 from "/images/photo-8.jpg";
import img9 from "/images/photo-9.jpg";

const $blogsCenter = document.querySelector(".blogs-center");

const createBlog = ({ src, title }) => `
<article class="blog">
    <img src="${src}" />
    <div class="blog-content">
      <span>
        lifestyle
        <i class="fa-solid fa-mug-saucer"></i>
      </span>
      <h3>${title}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        maiores deleniti doloremque sequi tempore quae odio maxime aut
        libero, iusto, obcaecati placeat. Accusamus ullam mollitia hic,
        sed ab debitis adipisci.
      </p>
      <a href="javascript:;">read more</a>
    </div>
</article>
`;

[
  { src: img1, num: "one" },
  { src: img2, num: "two" },
  { src: img3, num: "three" },
  { src: img4, num: "four" },
  { src: img5, num: "five" },
  { src: img6, num: "six" },
  { src: img7, num: "seven" },
  { src: img8, num: "eight" },
  { src: img9, num: "nine" },
].forEach(({ src, num }) => {
  $blogsCenter.innerHTML += createBlog({
    src,
    title: `${num} reasons shy coffee is awesome`,
  });
});
