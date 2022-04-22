import {useEffect} from 'react';
import './App.css';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

import scrollreveal from 'scrollreveal'


function App() {

  useEffect(() => {
  const sr = scrollreveal({
    distance: '60px',
    duration: 2500,
  });
  sr.reveal(".showcase-info", {delay: 600});
  sr.reveal(".showcase-img", {origin: "top", delay: 700});
  sr.reveal(".square", {origin: "left", delay: 900});
}, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}



// Sticky Nav
function stickyNav() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.pageYOffset > 0);
}
window.addEventListener("scroll", stickyNav);

window.addEventListener("scroll", () => {
  if (!skillsPlayed) loadSkills();
});

let skillsPlayed = false;


function loadSkills() {
  // const firstSkill = document.querySelector(".skill:first-child");
  const skCounters = document.querySelectorAll(".counter span");
  const progressBars = document.querySelectorAll(".sk-progress svg circle");
  // const scrollable =  document.documentElement.scrollHeight - window.innerHeight;
  
    
    const scrolled = window.scrollY;

    function updateCount(num, maxNum) {
      let currentNum = +num.innerText;

      if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
          updateCount(num, maxNum);
        }, 12);
      }
    }


    
    if (scrolled >= 1200) {
      
      for (let i = 0; i < skCounters.length; i++) {

        skillsPlayed = true;

        const cvalue = Number(skCounters[i].dataset.target);
        let strokeValue = 427 - 427 * (cvalue/100);

        progressBars[i].style.animation = "progress 2s ease-in-out forwards";
        progressBars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
          updateCount(skCounters[i], cvalue);
        }, 400);
      }
      

      setTimeout(() => {
        window.removeEventListener("scroll", loadSkills);
      }, 2000);
    }
}
// End

// Progress Bar Config
// const skCounters = document.querySelector(".counter span");
// const progressBars = document.querySelector(".skills svg circle");


// window.addEventListener("scroll", () => {
//   
// });



export default App;
