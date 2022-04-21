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

export default App;
