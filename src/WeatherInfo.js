import React, { useState } from "react";

export default function WeatherInfo() {
    return (
        <div className="WeatherInfo">
     <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
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
}