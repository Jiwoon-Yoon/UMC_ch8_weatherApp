import React from 'react'
import axios from 'axios';

const API_KEY='16850f06ce6712a6d4a96b29ebe999ce';
  
    export default async function getData(cityName) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);

            return (
                response.data);
        } catch (error) {
            console.error('API 호출 에러:', error);
        } 
    }
    
    




