// Scroll Btn
let scrollBtn = document.querySelector(".landing .scroll-top");
window.onscroll = () => {
  if(window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
}
scrollBtn.addEventListener("click", () => {
  window.scrollTo ({
    top: 0,
    behavior:"smooth"
  });
});

// Features Animate
window.addEventListener("scroll", () => {
  if(scrollY >= document.querySelector(".features").offsetTop-550) {
    document.querySelector(".features .row > div:first-child").style.transform = "translateX(0)";
    document.querySelector(".features .row > div:last-child").style.transform = "translateX(0)";
    document.querySelector(".features .row > div:nth-child(2)").style.transform = "translateY(0)";
  }
});

// Stuff Animate
window.addEventListener("scroll", () => {
  if(scrollY >= document.querySelector(".stuff").offsetTop-300) {
    document.querySelector(".stuff .row > div:first-child").style.transform = "translateX(0)";
    document.querySelector(".stuff .row > div:last-child").style.transform = "translateX(0)";
  }
});

// Portfolio Shufel
let switcher = document.querySelectorAll(".portfolio ul li");
let works = document.querySelectorAll(".portfolio .row > div");
switcher.forEach(li => {
  li.addEventListener("click", e => {
    switcher.forEach((li) => {
      li.classList.remove("active");
    })
    e.target.classList.add("active");
    let category = e.target.dataset.work;
    works.forEach((work) => {
      work.classList.remove("active");
      work.classList.add("delete");
      if (work.dataset.work === category || category === "all") {
        work.classList.add("active");
        work.classList.remove("delete");
      }
    });
  });
});