import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
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
                    <img src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png" alt="Sunny"></img>
                16°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Feels like 14°</li>
                        <li>Humidity 9%</li>
                        <li>Visibility 16.10 km</li>
                        <li>UV Index 2 (Low)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}