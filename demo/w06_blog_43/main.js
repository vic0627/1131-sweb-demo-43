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
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach((num, i) => {
  $blogsCenter.innerHTML += createBlog({
    src: `./images/photo-${i + 1}.jpg`,
    title: `${num} reasons shy coffee is awesome`,
  });
});
