import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
     <Weather defaultCity="Broomfield" />
     <footer>
       This project was coded by Martha Vue and is open-sourced on{" "}
     <a href="https://github.com/MartyVue/weather-app-react"
       target="_blank" rel="noopener noreferrer">Github</a>
       </footer>
       </div>
    </div>
  );
}
