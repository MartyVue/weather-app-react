import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    function handleResponse(response) {
        console.log(response.data);
    }


    const apiKey = "5ef560c2739fa62b5e22bb83083603a3";
    let city="Broomfield";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}appid={apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
            <h1>Bromfield</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png" 
                    alt="Sunny"
                    height="60px" 
                    widith="60px" 
                    className="float-left" 
                    />
                    <span className="temperature">16</span>
                    <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6 marker">
                    <ul>
                        <h3>Details</h3>
                        <li className="weatherDetails">
                            <div className="description">Feels like</div>
                            <div className="descriptionDetail">14°</div>
                            </li>
                        <li className="weatherDetails">
                            <div className="description">Humidity</div>
                            <div className="descriptionDetail">9%</div>
                            </li>
                        <li className="weatherDetails">
                            <div className="description">Visibility</div>
                            <div className="descriptionDetail">16.10 km</div>
                        </li>
                        <li className="weatherDetails">
                            <div className="description">UV Index</div> 
                        <   div className="descriptionDetail">2 (Low)</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    }