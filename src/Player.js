var eventTemplateFunction = Handlebars.compile($('#page-template').html());

var uberClientId = "qVKKs4BjQlqHY06HXn5i4H9Chi2g4IxS"
  , uberServerToken = "r5_GLzD9stRCG7xdvjMrvOi4UdAhv2UuSxEXExoS";


function getEstimatesForUserLocation(startLatitude,startLongitude, endLatitude, endLongitude) {
  var promise = $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
    	Authorization: "Token " + uberServerToken
    },
    data: { 
      start_latitude: startLatitude,
      start_longitude: startLongitude,
      end_latitude: endLatitude,
      end_longitude: endLongitude
    }
    });
    promise.done(function(response) {
        var answer = 0;
        if(Math.round(response.prices[0].duration*10/60)/10 == (response.prices[0].duration/60)){
            answer = Math.round(response.prices[0].duration*10/60)/10;
        }
        else{
            answer = Math.round(response.prices[0].duration/60);
        }  

        document.getElementById(endLatitude).innerHTML = "<b>Estimated Travel Mins: </b>" + answer;
        // if(Math.round(response.prices[0].duration*10/60)/10 == response.prices[0].toFixed(1)){
        //     Math.round(response.prices[0].duration/60);
        // }
        // else{
        //     Math.round(response.prices[0].duration/60);
        // }    
        document.getElementById(endLongitude).innerHTML = "<b>UberX Estimated Cost: </b> " + response.prices[0].estimate;
    }); 
    promise.fail(function(){
          
          document.getElementById('spaSalonName').innerHTML = 'Too Far for Uber';
          
          window.setTimeout(function(){
              document.getElementById('spaSalonName').innerHTML = 'Spa/Salon Name';
          }, 5000);
          
    });
    
   
  
}
