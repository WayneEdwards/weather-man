// Globals

// store the elements related to the city search
var citySearch = document.querySelector(".city-search");
var searchBTN = document.querySelector(".search-button");

//store the elements related to the search history
var clearBTN = document.querySelector(".clear-history button");
var historyContainer = document.querySelector(".history-container");
var searchHistory = [];

//store the elements related to the current city/weather
var cityName = document.querySelector(".name");
var currentTemp = document.querySelector("temperature");
var currentHumid = document.querySelector("humidity");
var currentWindSpeed = document.querySelector("wind-speed");
var currentUVIndex = document.querySelector("uv-index");

//the API key to access the OpenWeatherAPI
const API_KEY = "3e489ce8dda72471348fca8795447d05";