// Toggle class active untuk Tab menu- ada jadi gaada, gaada jadi ada
const navbarNav = document.querySelector(".navbar-nav");
// cari documant yang namany query selector
// cari element yg nama kelas nya navbar-nav

// ketika tab-menu di klik
document.querySelector("#tab-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk Search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Klik di luar sidebar untuk menghilangkan Tab-bar
const tab = document.querySelector("#tab-menu");
const sb= document.querySelector('#search-button');

// jika Makita click di luar tab menu dan di luar Navbar
// e.target means target maus di klik, tab menu ilang
document.addEventListener("click", function (e) {
  if (!tab.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
