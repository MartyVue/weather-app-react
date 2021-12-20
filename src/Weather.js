import React from "react";
import "./Weather.css";

export default function Weather() {
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
                    <img src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png" alt="Sunny"
                    height="60px" widith="60px" />
                <span className="temperature">16</span>
                <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <h3>Details</h3>
                        <li className="weatherDetails">Feels like 14°</li>
                        <li className="weatherDetails">Humidity 9%</li>
                        <li className="weatherDetails">Visibility 16.10 km</li>
                        <li className="weatherDetails">UV Index 2 (Low)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}