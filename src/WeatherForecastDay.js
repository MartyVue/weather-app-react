import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return`${temperature}°`;
    }

     function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return`${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return day;
    }

    return (
        <div>
            <div className="WeatherForcast-day">{props.data.dt}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="Weatherforecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    {maxTemperature()}
                </span>
                <span className="WeatherForecast-temperature-min">
                    {minTemperature()}
                </span>
            </div>
        </div>
    );
}