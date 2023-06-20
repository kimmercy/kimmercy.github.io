// Toggle class active untuk Tab menu- ada jadi gaada, gaada jadi ada
const navbarNav = document.querySelector(".navbar-nav");
// cari documant yang namany query selector
// cari element yg nama kelas nya navbar-nav

// ketika tab-menu di klik
document.querySelector("#tab-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk Search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk Shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan Tab-bar
const tab = document.querySelector("#tab-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");
// jika kita click di luar tab menu dan di luar Navbar
// e.target means target maus di klik, tab menu ilang
document.addEventListener("click", function (e) {
  if (!tab.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik diluar modal
const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
