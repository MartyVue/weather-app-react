import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon 
                                code={props.data.icon} 
                                alt={props.data.description} 
                            />
                            <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                    </div>
                </div>
                <div className="col-6 marker">
                    <ul>
                        <h3>Details</h3>
                        <li className="weatherDetails">
                            <div className="description">Feels like</div>
                            <div className="descriptionDetail">{props.data.feels_like}°</div>
                            </li>
                        <li className="weatherDetails">
                            <div className="description">Humidity</div>
                            <div className="descriptionDetail">{props.data.humidity}%</div>
                            </li>
                        <li className="weatherDetails">
                            <div className="description">Visibility</div>
                            <div className="descriptionDetail">{props.data.visibility/1000}{" "}km</div>
                        </li>
                        <li className="weatherDetails">
                            <div className="description">Wind</div> 
                        <   div className="descriptionDetail">{props.data.wind}{" "}mph</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    }
