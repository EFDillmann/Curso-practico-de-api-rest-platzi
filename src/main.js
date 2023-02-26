console.log(API_KEY);

// Toggle menú
const headerToggle = document.querySelector(".header-toggleIcon");
const toggleLine1 = document.querySelector(".toggleIcon-line1");
const toggleLine2 = document.querySelector(".toggleIcon-line2");
const toggleLine3 = document.querySelector(".toggleIcon-line3");
const asideMenu = document.querySelector("#asideMenu");

headerToggle.addEventListener("click", () => {
    toggleLine1.classList.toggle("toggleIcon-line1Active");
    toggleLine2.classList.toggle("toggleIcon-line2Active");
    toggleLine3.classList.toggle("toggleIcon-line3Active");
    asideMenu.classList.toggle("inactive");
});