//css menu button active
const mobile_nav = document.querySelector(".menu-btns");

const toggleNavbar = () => {
    let navActive = document.getElementsByTagName("nav")[0];
    navActive.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());

//css skills bar active
const skillHeader = document.getElementsByClassName("skill-header");

const toggleSkill = (num) => {
    const skillContent = document.getElementsByClassName("skill-content")[num];
    skillContent.classList.toggle("active");
}
skillHeader[0].addEventListener("click", () => {toggleSkill(0);});
skillHeader[1].addEventListener("click", () => {toggleSkill(1);});
skillHeader[2].addEventListener("click", () => {toggleSkill(2);});

//progress-bar
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;