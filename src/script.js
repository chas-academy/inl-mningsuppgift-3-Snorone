let cart = [];

const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");


addButton.addEventListener("click", () => {
  const productName = productInput.value.trim();
  const price = Number(priceInput.value);

  if (productName === "" || isNaN(price)) {
    alert("Fyll i både namn och pris korrekt!");
    return;
  }

  let existingProduct = null;

  for (let item of cart) {
    if (item.productName.toLowerCase() === productName.toLowerCase()) {
      existingProduct = item;
      break;
    }
  }

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      productName: productName,
      price: price,
      quantity: 1
    });
  }


  productInput.value = "";
  priceInput.value = "";

  renderCart();
});

function renderCart() {
  cartList.innerHTML = "";

  for (let item of cart) {
    const li = document.createElement("li");

    li.textContent = `${item.productName} - ${item.price}kr (x${item.quantity})`;

    cartList.appendChild(li);
  }
}