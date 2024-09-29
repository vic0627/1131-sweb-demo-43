const $ = (selector) => document.querySelector(selector);
const $prodsContainer = $("#products");

const getProds = async () => {
  try {
    return await (await fetch("https://fakestoreapi.com/products")).json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createProdCard = ({ image, description, title, rating }) => `
      <div class="card">
        <div class="card-info">
          <div class="card-img">
            <img src="${image}" alt="${description}" />
          </div>
          <h3>${title}</h3>
          <div class="rate-stars">
						${Array.from({ length: 5 }, (_, i) => i + 1).reduce((pre, cur) => {
              const { rate } = rating;
              if (cur < rate) return (pre += `<div class="star glow"></div>`);
              else if (cur > Math.ceil(rate))
                return (pre += `<div class="star"></div>`);
              else {
                const percentage = 100 - ~~((cur - rate) * 100);
                return (pre += `<div class="star" style="background: linear-gradient(to right, #333 ${percentage}%, #aaa ${percentage}%);"></div>`);
              }
            }, "")}
						<div class="card-rate">${rating.rate} by ${rating.count}</div>
          </div>
          <p>${
            description.slice(0, 97) === description
              ? description
              : description.slice(0, 97) + "..."
          }</p>
        </div>
        <div class="card-footer">
          <button class="add-cart">add cart</button>
          <button class="buy-now">buy now</button>
        </div>
      </div>`;

getProds().then((data) => {
  $prodsContainer.innerHTML = data.reduce(
    (pre, prod) => (pre += createProdCard(prod)),
    ""
  );
});
