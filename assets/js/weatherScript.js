var weatherApiKey = "3d63361c9306767144bfbbcb1a41ff1d";
var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

var inputOption = document.querySelector(".stateInput");
var weatherIcon = document.querySelector(".weatherIcon");
/*var imageName = [
        "Clouds",
        "Clear",
        "Rain",
        "Drizzle",
        "Atomosphere",
        "Snow",
        "Thunderstorm"
    ];*/

async function checkWeather(state) {
    var response = await fetch(weatherApiUrl + state + `&appid=${weatherApiKey}`);

    var data = await response.json();

    document.querySelector(".state").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "mph";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/images/weatherImages/Clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/images/weatherImages/Clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/images/weatherImages/Rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/images/weatherImages/Drizzle.png"
    }
    else if (data.weather[0].main == "Atomosphere") {
        weatherIcon.src = "./assets/images/weatherImages/Atomosphere.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "./assets/images/weatherImages/Snow.png"
    }
    else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "./assets/images/weatherImages/Thunderstorm.png"
    }

    /*for(i=0;i>imageName.length;i++){
        if(data.weather[0].main == imageName[i].toString()){
            weatherIcon.src = "/assets/images/weatherImages/"+imageName[i].toString() +".png"
        }
        
    }*/
    document.querySelector(".card").style.display="block";
}

inputOption.addEventListener("change", function (event) {
    checkWeather(`${event.target.value}`)
})