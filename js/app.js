const search = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const filter = document.querySelectorAll(".filter");
const searchPrice = document
  .getElementById("search-price")
  .querySelector("button");

// For change class filter buttons
const changeClass = (value) => {
  filter.forEach((buttons) => {
    if (buttons.dataset.filter === value) {
      buttons.classList.add("selected");
    } else {
      buttons.classList.remove("selected");
    }
  });
};

// For search input
const searchHandler = (event) => {
  const value = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const checkProducts = product.children[1].innerText.toLowerCase();

    if (checkProducts.includes(value)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
};
search.addEventListener("keyup", searchHandler);

// For filter item
const filterHandler = (event) => {
  const value = event.target.dataset.filter;
  changeClass(value);

  products.forEach((product) => {
    const filterProducts = product.dataset.category;

    if (value === "all") {
      product.style.display = "block";
    } else {
      value === filterProducts
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};
filter.forEach((buttons) => {
  buttons.addEventListener("click", filterHandler);
});

// For search price item
const searchPriceHandler = (event) => {
  const value = +event.target.parentElement.children[0].value;

  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const finalPrice = +productPrice.split(" ")[1];

    if (!value) {
      product.style.display = "block";
    } else {
      finalPrice === value
        ? (product.style.display = "block")
        : (product.style.display = "block");
    }
  });
};
searchPrice.addEventListener("click", searchPriceHandler);
