$(document).ready(function(){
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    // api url
    var url = ;

    $.ajax({
        type: "GET",
        url: url,
        dataType: json,
        async: false,
        success:function(data){

        },
        cache:false,
        error:function(errorMessage){}
    });

    // api url generator
    function apiUrlGenerator(){
        
    }
});