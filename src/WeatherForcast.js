import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded (true);
    }

    function load() {
        let apiKey = "5ef560c2739fa62b5e22bb83083603a3";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let units = "imperial";
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
        );
    } else {
      load();

        return null;
    }   
}