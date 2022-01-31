import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
     <Weather defaultCity="Broomfield" />
     <footer>
       This project was coded by{" "} 
       <a href="https://martha-vue-final-portfolio.netlify.app/">Martha Vue</a> and is open-sourced on{" "}
        <a href="https://github.com/MartyVue/weather-app-react"
       target="_blank" rel="noopener noreferrer">Github</a> and hosted by{" "}
       <a href="https://www.netlify.com/">Netlify.</a>
       </footer>
       </div>
    </div>
  );
}
