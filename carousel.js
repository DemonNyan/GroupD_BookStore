const closeNavButton = document.getElementById("closeNav");
const openNavButton = document.getElementById("openNav");

openNavButton.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "100%";
});

closeNavButton.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
});
