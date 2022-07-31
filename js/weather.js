
const API_KEY = "dbc17c8310cd15647974f29ae44bb9c1";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector(".city-name__text");
            const weather = document.querySelector(".weather-info p");
            const weatherIcon = document.querySelector(".weather-icon");
            const icon = data.weather[0].icon;
            let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            weatherIcon.src= iconURL;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}°`;
        })
        console.log(url);
    
}


function onGeoError() {
    alert("Can't find you. No location for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

