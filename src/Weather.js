import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Sunday 11:00",
            description: response.data.weather[0].description,
            iconUrl: "https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png",
            feels_like: response.data.main.feels_like,
            visibility: response.data.visibility,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.iconUrl} 
                    alt={weatherData.description}
                    height="60px" 
                    widith="60px" 
                    className="float-left" 
                    />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6 marker">
                    <ul>
                        <h3>Details</h3>
                        <li className="weatherDetails">
                            <div className="description">Feels like</div>
                            <div className="descriptionDetail">{weatherData.feels_like}°</div>
                            </li>
                        <li className="weatherDetails">
                            <div className="description">Humidity</div>
                            <div className="descriptionDetail">{weatherData.humidity}%</div>
                            </li>
                        <li className="weatherDetails">
                            <div className="description">Visibility</div>
                            <div className="descriptionDetail">{weatherData.visibility/1000}{" "}km</div>
                        </li>
                        <li className="weatherDetails">
                            <div className="description">Wind</div> 
                        <   div className="descriptionDetail">{weatherData.wind}{" "}mph</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    } else {
   const apiKey = "5ef560c2739fa62b5e22bb83083603a3";
    let city="Broomfield";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";
    }
}