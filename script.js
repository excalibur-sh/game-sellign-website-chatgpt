// Shopping Cart
const cartBtns = document.querySelectorAll(".game button");

const cart = [];

function addToCart(event) {
  const gameName = this.parentNode.querySelector("h3").textContent;
  const gamePrice = this.parentNode.querySelector("p").textContent;
  const gameImg = this.parentNode.querySelector("img").src;

  const item = {
    name: gameName,
    price: gamePrice,
    img: gameImg,
  };

  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";

  for (const item of cart) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const cartItemImg = document.createElement("img");
    cartItemImg.src = item.img;
    cartItem.appendChild(cartItemImg);

    const cartItemDetails = document.createElement("div");
    cartItemDetails.classList.add("cart-item-details");

    const cartItemName = document.createElement("h4");
    cartItemName.textContent = item.name;
    cartItemDetails.appendChild(cartItemName);

    const cartItemPrice = document.createElement("p");
    cartItemPrice.textContent = item.price;
    cartItemDetails.appendChild(cartItemPrice);

    cartItem.appendChild(cartItemDetails);

    cartContainer.appendChild(cartItem);
  }

  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cart.length;
}

for (const btn of cartBtns) {
  btn.addEventListener("click", addToCart);
}
