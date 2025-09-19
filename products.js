// products.js

// This array simulates trending products from AliExpress
const products = [
  {
    name: "Wireless Earbuds",
    price: "$29.99",
    img: "https://via.placeholder.com/250x200",
    link: "https://www.aliexpress.com/item/1005001234567890.html"
  },
  {
    name: "Smart Watch",
    price: "$49.99",
    img: "https://via.placeholder.com/250x200",
    link: "https://www.aliexpress.com/item/1005009876543210.html"
  },
  {
    name: "LED Strip Lights",
    price: "$15.99",
    img: "https://via.placeholder.com/250x200",
    link: "https://www.aliexpress.com/item/100500111222333.html"
  },
  {
    name: "Portable Charger",
    price: "$19.99",
    img: "https://via.placeholder.com/250x200",
    link: "https://www.aliexpress.com/item/100500444555666.html"
  },
  {
    name: "Bluetooth Speaker",
    price: "$22.99",
    img: "https://via.placeholder.com/250x200",
    link: "https://www.aliexpress.com/item/100500777888999.html"
  }
];

// Function to render products into a container
function loadProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ""; // clear container

  products.forEach(p => {
    const productHTML = `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a href="${p.link}" class="btn" target="_blank">Buy Now</a>
      </div>
    `;
    container.innerHTML += productHTML;
  });
}
