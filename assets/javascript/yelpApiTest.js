//To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY.
// GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972  - autocomplete

// review: https://www.yelp.com/developers/documentation/v3/authentication#where-is-my-client-secret-going

var url= "https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972"
var apiKey = "gRvBKzmV6dSUtWhQeCEYwaglCqLarBUAz8UwDx2cI0-9LESTPeOGpHoQ4TumROnNJUSMaWlrJ2Uo5XWLmn2GS8O1tzku9tmHdpbiswFVfPmpGL6TkIMW7SMQ5PKrWnYx";
var clientId = "oaIQiNx4zJrgK8w3E8SoCg";


    $("#yelpclick").click(function(event){
        event.preventDefault();
        var input = $("#userInput").val().trim();
      
        $.ajax({
            //Put the API Key in the request header as "Authorization: Bearer <YOUR API KEY>".
            url: url,
            method: 'GET',
            Authorization: "Bearer" + apiKey,
            }).done(function (result) {
                console.log(result);
                $(".info").append();
            
    });

