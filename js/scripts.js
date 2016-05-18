// My Scripts


$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
      
      console.log(weather);
      
      $('.city').text(weather.city);
      $('.temp').text(weather.temp + '°F');
//      $('.icon img').attr('src', weather.image);
      $('.high').text('High: ' + weather.high + '°F');
      $('.low').text('Low: ' + weather.low + '°F');
      
    
    },
    error: function(error) {
      
      console.log('Error No Weather');
      
    }
  });
});





// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition( function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  console.log( lat, long); 
  
});