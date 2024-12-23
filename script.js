let addBtn = document.getElementsByClassName("add_btn");
let cart = [];
let subTotal = 0;
let price_cart = document.getElementById("price_cart");
let cart_layer = document.getElementById("cart_layer");

for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", () => {
    addBtn[i].classList.toggle("selected");
    let img = addBtn[i].getAttribute("product-img");
    let name = addBtn[i].getAttribute("product-name");
    let price = addBtn[i].getAttribute("product-price");
    let product = {
      p_img: img,
      p_name: name,
      p_price: price,
    };


    subTotal = 0;

    if (addBtn[i].classList.contains("selected")) {
      cart.push(product);
    } else {
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].p_name == name) {
          cart.splice(j, 1);
          break;
        }
      }
    }

    cart_layer.innerHTML = `
      <article id="cart_layer_one">
        <p>Shopping Cart</p>
        <i class="fa-solid fa-xmark"></i>
      </article>`;

    cart.forEach((ele) => {
      cart_layer.innerHTML += `
        <div class="cart_item">
          <img src="${ele.p_img}" height="70" width="40"> 
          <aside id="cart_item_info">
            <p id="cart_item_info1">${ele.p_name}</p>
            <p id="cart_item_info2">${ele.p_price}</p>
          </aside>
        </div>`;
      subTotal += Number(ele.p_price);
    });


    cart_layer.innerHTML += `
      <div class="cart_summary">
        <p>Subtotal: $${subTotal.toFixed(2)}</p>
        <button id="checkout_btn">Checkout</button>
      </div>`;


    let quantity = document.getElementById("quantity");
    quantity.innerHTML = `${cart.length}`;


    let wrong_icon = document.querySelector(".fa-xmark");
    wrong_icon.addEventListener("click", () => {
      cart_layer.style.right = "-30%";
    });

    let checkoutBtn = document.getElementById("checkout_btn");
    checkoutBtn.addEventListener("click", () => {
      alert("Thanks for purchasing..😍");
    });
  });
}


price_cart.addEventListener("click", () => {
  cart_layer.style.right = "0";
});
