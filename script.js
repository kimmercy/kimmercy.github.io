// Toggle class active - ada jadi gaada, gaada jadi ada
const navbarNav = document.querySelector(".navbar-nav");
// cari documant yang namany query selector
// cari element yg nama kelas nya navbar-nav

// ketika tab-menu di klik
document.querySelector("#tab-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan Tab-bar
const tab = document.querySelector("#tab-menu");

// jika Makita click di luar tab menu dan di luar Navbar
// e.target means target maus di klik, tab menu ilang
document.addEventListener("click", function (e) {
  if (!tab.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
