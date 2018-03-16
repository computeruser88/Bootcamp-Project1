//To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY.
// GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972  - autocomplete

// review: https://www.yelp.com/developers/documentation/v3/authentication#where-is-my-client-secret-going


var apiKey = "gRvBKzmV6dSUtWhQeCEYwaglCqLarBUAz8UwDx2cI0-9LESTPeOGpHoQ4TumROnNJUSMaWlrJ2Uo5XWLmn2GS8O1tzku9tmHdpbiswFVfPmpGL6TkIMW7SMQ5PKrWnYx";
var clientId = "oaIQiNx4zJrgK8w3E8SoCg";

$(document).ready(function(){

    $("#yelpclick").click(function(){
        
        var city = $("#location").val("");
        $("#location").val("");
        
        $.ajax({
            //Put the API Key in the request header as "Authorization: Bearer <YOUR API KEY>".
            url: "",
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function(response){
                $(".info").text('');
                
            },
            error: function() {
                $(".error").text("There was an error processing your request. Please try again.")
            }
        });
    });
});