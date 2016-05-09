// My Scripts


$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
      
//console.log(weather);
        
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
      $('.cond-code').text(weather.code);
      
    
    },
    error: function(error) {
      
      console.log('Error No Weather');
      
    }
  });
});