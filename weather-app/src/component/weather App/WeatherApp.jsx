import React from 'react'
import './weatherApp.css'
import search_icon from '../assests/search.png';
import clear_icon from '../assests/clear.png';
import cloud_icon from '../assests/cloud.png';
import drizzle_icon from '../assests/drizzle.png';
import humidity_icon from '../assests/humidity.png';
import rain_icon from '../assests/rain.png';
import snow_icon from '../assests/snow.png';
import wind_icon from '../assests/wind.png';


export const WeatherApp = () => {
    const api_key = ('8e83ff936b0d7a7237b2d6358a60c9df')
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='search' />
                <div className="search-icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24oC</div>
            <div className="weather-location">New Delhi</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="humidity-percent">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>


        </div>
    )
}
