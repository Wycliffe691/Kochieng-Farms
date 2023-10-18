// VARIABLES
const cartIcon = document.querySelector(".cart-icon");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");
const cartSection = document.querySelector(".cart");
const barIcon = document.querySelector(".bar-icon");
const navLinks = document.querySelector(".nav-links");
const navigationLink = document.querySelectorAll(".nav-links.active a");
const mobileMenu = document.getElementById("mobile-menu");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

// SHOW/HIDE CART
cartIcon.addEventListener("click", function () {
  cartOverlay.style.visibility = "visible";
  cartSection.style.transform = "translateX(0%)";
});
closeCartBtn.addEventListener("click", function () {
  cartOverlay.style.visibility = "hidden";
  cartSection.style.transform = "translateX(100%)";
});

// RESPONSIVE NAVIGATION BAR
barIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
navigationLink.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active"); // Remove the 'active' class to hide the menu
  });
});

// SEARCH FUNCTIONALITY

// PRODUCT SECTION

const products = [
  {
    id: "1",
    name: "Broccoli",
    category: "Vegetables",
    price: 50,
    img: "Photos/broccoli.jpg",
  },
  {
    id: "2",
    name: "Beef",
    category: "Meat",
    price: 350,
    img: "Photos/beef.jpeg",
  },
  {
    id: "3",
    name: "Carrots",
    category: "Vegetables",
    price: 80,
    img: "Photos/carrots.jpg",
  },
  {
    id: "4",
    name: "Cucumber",
    category: "Vegetables",
    price: 50,
    img: "Photos/cucumbers.jpg",
  },
  {
    id: "5",
    name: "Sweet Potatoes",
    category: "Tubers",
    price: 100,
    img: "Photos/2.webp",
  },
  {
    id: "6",
    name: "Grapes",
    category: "Fruits",
    price: 250,
    img: "Photos/grapes.jpg",
  },
  {
    id: "7",
    name: "Minji",
    category: "Cereals",
    price: 120,
    img: "Photos/Minji.avif",
  },
  {
    id: "8",
    name: "Groungnuts",
    category: "Cereals",
    price: 350,
    img: "Photos/nuts.jpg",
  },
  {
    id: "9",
    name: "Onions",
    category: "Vegetables",
    price: 150,
    img: "Photos/onions.jpg",
  },
  {
    id: "10",
    name: "Oranges",
    category: "Fruits",
    price: 80,
    img: "Photos/oranges.jpg",
  },
  {
    id: "11",
    name: "Pears",
    category: "Fruits",
    price: 150,
    img: "Photos/pears.jpg",
  },
  {
    id: "12",
    name: "Pepper",
    category: "Vegetables",
    price: 70,
    img: "Photos/pepper.png",
  },
  {
    id: "13",
    name: "Pork",
    category: "Meat",
    price: 350,
    img: "Photos/pork.jpeg",
  },
  {
    id: "14",
    name: "Chicken Meat",
    category: "poultry",
    price: 450,
    img: "Photos/Chicken-meat.jpg",
  },
  {
    id: "15",
    name: "Pumpkin",
    category: "Vegetables",
    price: 250,
    img: "Photos/pumpkin.jpg",
  },
  {
    id: "16",
    name: "Red Beans",
    category: "Cereals",
    price: 250,
    img: "Photos/red-beans.jpeg",
  },
  {
    id: "17",
    name: "Tomatoes",
    category: "Vegetables",
    price: 50,
    img: "Photos/tomatoes.jpg",
  },
  {
    id: "18",
    name: "Tilapia Fish",
    category: "fish",
    price: 150,
    img: "Photos/fish.jpeg",
  },
  {
    id: "19",
    name: "Eggs",
    category: "poultry",
    price: 520,
    img: "Photos/eggs.jpeg",
  },
  {
    id: "20",
    name: "Dried Omena",
    category: "fish",
    price: 150,
    img: "Photos/dried-cichlid-fish.jpg",
  },
  {
    id: "21",
    name: "Fresh Milk",
    category: "milk",
    price: 50,
    img: "Photos/fresh-milk.png",
  },
  {
    id: "22",
    name: "Fermented Milk",
    category: "milk",
    price: 50,
    img: "Photos/yogurt.jpg",
  },
];

const productSection = document.getElementById("product-section");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayProductSection(products);
});

// Filter items
filterBtns.forEach(function (x) {
  x.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const productCategory = products.filter(function (sectionItem) {
      if (sectionItem.category === category) {
        return sectionItem;
      }
    });
    if (category === "all") {
      displayProductSection(products);
    } else {
      displayProductSection(productCategory);
    }
  });
});

function displayProductSection(sectionItems) {
  let displayProducts = sectionItems.map(function (x) {
    return `<div id= product-id-${x.id} class="category"> <!-- Content for Vegetables Category -->
            <!-- Add Vegetable products here -->
            <div class="product-card">
                <img src=${x.img} alt="">
                <h4>${x.name}</h4>
                <div class="price">
                    <p class="price">Kshs. ${x.price}  /Kg</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
           </div>
    `;
  });
  displayProducts = displayProducts.join("");
  productSection.innerHTML = displayProducts;
}

const reviews = [
  {
    id: 1,
    name: "Jones",
    place: "Nakuru",
    img: "Photos/Review 1.jpeg",
    text: "By adding this CSS code to your stylesheet, you'll have a vertical line at the right edge of your sidebar, visually separating it from the product section.",
  },
  {
    id: 2,
    name: "Jael",
    place: "Nairobi",
    img: "Photos/Review 2.jpeg",
    text: "By adding this CSS code to your stylesheet, you'll have a vertical line at the right edge of your sidebar, visually separating it from the product section.",
  },
  {
    id: 3,
    name: "Trevor",
    place: "Bungoma",
    img: "Photos/Review 3.jpeg",
    text: "By adding this CSS code to your stylesheet, you'll have a vertical line at the right edge of your sidebar, visually separating it from the product section.",
  },
];

// select items
const img = document.getElementById("person-img");
const name = document.getElementById("name");
const place = document.getElementById("location");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const fowardBtn = document.querySelector(".foward-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item;
function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  place.textContent = item.place;
  info.textContent = item.text;
}
// show next person
fowardBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
  showPerson(currentItem);
});

const buttons = document.querySelectorAll(".add-to-cart");

// CART FUNCTIONALITIES.
const cart = [];

function createCartItemHTML(product) {
  return `
        <div class="added-item">
            <img src="${product.img}" alt="">
            <div>
                <h4>${product.name}</h4>
                <h5>Kshs ${product.price.toFixed(2)} /Kg</h5>
                <span class="trash-icon">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>
            <div class="count-items">
                <i class="fa-solid fa-plus"></i>
                <p class="item-count">${product.quantity}</p>
                <i class="fa-solid fa-minus"></i>
            </div>
        </div>
    `;
}

// Define an itemCount variable to keep track of the total number of items in the cart
let itemCount = 0;

// Function to update the cart icon with the current item count
function updateCartItemCount() {
  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.textContent = itemCount.toString();
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    const productCard = event.target.closest(".product-card");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const productPrice = parseFloat(
        productCard.querySelector(".price").textContent.split("Kshs. ")[1]
      );
      const productImage = productCard.querySelector("img").getAttribute("src"); // Get the image source
      const existingProduct = cart.find((item) => item.name === productName);
      if (existingProduct) {
        // If the product is already in the cart, do nothing
        existingProduct.quantity++;
      } else {
        // Add a new product to the cart if it's not already in the cart
        cart.push({
          name: productName,
          price: productPrice,
          quantity: 0,
          img: productImage,
        });
      }
      itemCount++;
      updateCartItemCount();

      // Update the cart display
      updateCartDisplay();
      // Disable the button
      event.target.disabled = true;
      // Change the button text to "In Cart"
      event.target.textContent = "In Cart";
      // Add the product to the cart
      addToCart(productName, productPrice, productImage); // Pass the image source to addToCart
      saveProducts();
    }
  }
});

// Add event listeners for plus and minus icons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-plus")) {
    const productCard = event.target.closest(".added-item");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const product = cart.find((item) => item.name === productName);
      if (product) {
        product.quantity++;
        updateCartDisplay();
      }
    }
  } else if (event.target.classList.contains("fa-minus")) {
    const productCard = event.target.closest(".added-item");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const product = cart.find((item) => item.name === productName);
      if (product && product.quantity > 1) {
        product.quantity--;
        updateCartDisplay();
      }
    }
  }
});

function addToCart(name, price, img) {
  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.name === name);

  if (existingProduct) {
    // Increment the quantity if the product is already in the cart
    existingProduct.quantity++;
  } else {
    // Add a new product to the cart if it's not already in the cart
    cart.push({ name, price, quantity: 1, img });
  }

  // Update the cart display
  updateCartDisplay();
}

function updateCartDisplay() {
  // Select the cart content element
  const cartContent = document.querySelector(".cart-content");

  // Clear the existing content
  cartContent.innerHTML = "";

  // Iterate through the cart and add each item to the cart display
  cart.forEach((item) => {
    // Use the createCartItemHTML function to generate the HTML for each item
    const cartItemHTML = createCartItemHTML(item);
    const cartItem = document.createElement("div");
    cartItem.innerHTML = cartItemHTML;
    cartContent.appendChild(cartItem);
  });

  // Update the total price in the cart footer
  const cartTotal = document.querySelector(".cart-total");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);
}
// Add event listener for trash icons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-trash")) {
    const productCard = event.target.closest(".added-item");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const productIndex = cart.findIndex((item) => item.name === productName);
      if (productIndex !== -1) {
        // Remove the product from the cart array
        cart.splice(productIndex, 1);
        // Decrement the itemCount
        itemCount--;
        // Update the cart icon with the new itemCount
        updateCartItemCount();
        // Update the cart display
        updateCartDisplay();
      }
    }
  }
});
// Add an event listener for the "Clear Cart" button
const clearCartButton = document.querySelector(".clear-cart");
clearCartButton.addEventListener("click", function () {
  // Clear the cart array
  cart.length = 0;
  // Reset the itemCount to 0
  itemCount = 0;
  // Update the cart icon to display "0" items
  updateCartItemCount();
  // Clear the cart display
  updateCartDisplay();
});

// Function to reset the button text to "Add to Cart"
function resetButton(button) {
  button.disabled = false;
  button.textContent = "Add to Cart";
}

// Add an event listener for the "Clear Cart" button
// const clearCartButton = document.querySelector(".clear-cart");
clearCartButton.addEventListener("click", function () {
  // Clear the cart array
  cart.length = 0;
  // Reset the itemCount to 0
  itemCount = 0;
  // Update the cart icon to display "0" items
  updateCartItemCount();
  // Clear the cart display
  updateCartDisplay();

  // Get all the "In Cart" buttons and reset them to "Add to Cart"
  const inCartButtons = document.querySelectorAll(".add-to-cart[disabled]");
  inCartButtons.forEach((button) => {
    resetButton(button);
  });
  clearLocalStorage();
});

function saveProducts() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadProducts() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    // Parse the saved JSON data back to an array
    const parsedCart = JSON.parse(savedCart);

    // Update the cart with the parsed data
    cart.length = 0; // Clear the current cart
    parsedCart.forEach((product) => {
      cart.push(product);
      itemCount += product.quantity;
    });

    // Update the cart display and item count
    updateCartDisplay();
    updateCartItemCount();
  }
}

// Call the loadProducts function when the page loads
window.addEventListener("load", loadProducts);

function clearLocalStorage() {
  localStorage.removeItem("cart");
}

// Check out page.
const CheckOutBtn = document.querySelector(".check-out");
// Function to create HTML for a cart item in the order summary
function createOrderSummaryItemHTML(product) {
  const totalPrice = product.price * product.quantity;
  return `
        <li>
            <div class="order-summary-item">
                <div class="order-summary-item-details">
                    <p class="item-name">${product.name}</p>
                </div>
                <div class="checkOutQtty">
                    <p class="item-quantity">${product.quantity} kg</p>
                </div>
                <div class="order-summary-item-total">
                    <p class="item-total-price">Cost: Kshs ${totalPrice.toFixed(
                      2
                    )}</p>
                </div>
            </div>
        </li>
    `;
}

// Function to update the order summary
function updateOrderSummary() {
  // Select the order summary container
  const orderSummaryContainer = document.querySelector(".checkOut-items ol");

  // Clear the existing content
  orderSummaryContainer.innerHTML = "";

  // Iterate through the cart and add each item to the order summary
  cart.forEach((item) => {
    // Use the createOrderSummaryItemHTML function to generate the HTML for each item in the order summary
    const orderSummaryItemHTML = createOrderSummaryItemHTML(item);
    orderSummaryContainer.innerHTML += orderSummaryItemHTML;
  });

  // Update the total price in the cart-total element
  const cartTotal = document.querySelector(".cart-total p");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.textContent = `Total: Kshs. ${total.toFixed(2)}`;
}
