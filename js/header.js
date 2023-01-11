document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded!");

  const navBar = document.getElementById("navbar");
  let sticky = navBar.offsetTop;

  window.onscroll = () => {
    if (window.pageYOffset > sticky) {
      navBar.classList.add("sticky-active");
    } else {
      navBar.classList.remove("sticky-active");
    };
  };
});