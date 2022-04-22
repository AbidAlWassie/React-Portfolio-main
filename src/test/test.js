
// Progress Bar Config
const firstSkill = document.querySelector(".skill:first-child");
// const skCounters = document.querySelector(".counter span");
// const progressBars = document.querySelector(".skills svg circle");


window.addEventListener("scroll", () => {
  skillsCounter();
});

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;

  if(window.innerHeight >= topPosition + el.offsetHeight) return true;
  return false;
}

function skillsCounter() {
  if(!hasReached(firstSkill)) return;
  console.log("You've reached the skills section");
}