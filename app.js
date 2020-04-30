$(document).ready(function () {
  var inputText = "";

  $("#submitBtn").on("click", function (e) {
    e.preventDefault();
    inputText = $("#inputText").val();
    $("#inputText").val("");
    console.log(inputText);

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?zip=${inputText}&appid=a50d1656c773eed4f6ac56768b7f8ba2`,
      dataType: "json",
    }).then(function (response) {
      console.log(response.main.temp);
      var cityName = response.name;
      var tempK = response.main.temp;
      var tempC = tempK - 273.15;
      var tempF = 1.8 * tempC + 32;
      var tempC2 = tempC.toFixed(2);
      var tempF2 = tempF.toFixed(2);

      $("body").prepend(`<div>Temperature in Celsius: ${tempC2}°C </div>`);
      $("body").prepend(`<div>Temperature in Fahrenheit: ${tempF2}°F</div>`);
      $("body").prepend(`<div>City Name: ${cityName}</div>`);
      $("body").prepend(`<div>ZIP Code ${cityName}</div>`);
    });
  });
});
