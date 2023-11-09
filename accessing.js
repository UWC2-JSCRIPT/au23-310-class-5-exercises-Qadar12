// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const weatherHeader = document.querySelector("#weather-head");
weatherHeader.textContent = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"

const sun = document.getElementsByClassName("sun");

for (let i = 0; i < sun.length; i++) {
  sun[i].style.color = "orange";
}

console.log(sun);

// Change the class of the second <li> from to "sun" to "cloudy"

const cloudy = document.getElementsByClassName("sun");

sun[0].className = "cloudy";
