function showTemperature(response) {
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#tempe").innerHTML = Math.round(
      response.data.main.temp
    );
    
  
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;

    

  function displayFahrenheit(event){
    event.preventDefault()
    let fahrenheitTemp = ((Math.round(response.data.main.temp))* 9/5)+ 32
    let temperatureElement= document.querySelector("#tempe");

    temperatureElement.innerHTML = Math.round(fahrenheitTemp);

  }
    let fahrenheitLink = document.querySelector("#fahreheit-link");
    fahrenheitLink.addEventListener( "click", displayFahrenheit);


    function displayCelsuis(event){
      event.preventDefault()
      let temperatureElement= document.querySelector("#tempe");
      temperatureElement.innerHTML = Math.round(response.data.main.temp);
  
    }
      let celsuisLink = document.querySelector("#celsuis-link");
      celsuisLink.addEventListener( "click", displayCelsuis);
  

    


  //let iconElement = document.querySelector("#icon")
  //iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon }@2x.png`)
  
  }

  function search(city) {
    let apiKey = "82535288afd2b2e976894696765c114b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showTemperature);
  }
  
  function enterCity(event) {
    event.preventDefault();
    let city = document.querySelector("#exampleInputEmail1").value;
    search(city);
  }
  
  let submitForm = document.querySelector("form");
  submitForm.addEventListener("submit", enterCity);
  
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "82535288afd2b2e976894696765c114b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showTemperature);
  }
  
  function displayCurrentLoc(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  let currentLocation = document.querySelector("#current-loc");
  currentLocation.addEventListener("click", displayCurrentLoc);
  
  search("Kumasi");


  // date
  function UpdateDate(date) {
    let now = new Date();
    console.log(now);
  
    let dates = now.getDate();
    let year = now.getFullYear();
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let days = weekdays[now.getDay()];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let month = months[now.getMonth()];
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dateForToday = document.querySelector(".current-date");
    dateForToday.innerHTML = `${days}, ${dates} ${month}, ${year}`;
    let timeForToday = document.querySelector(".current-time");
    timeForToday.innerHTML = `${hours} : ${minutes}`;
  }
  UpdateDate();
  