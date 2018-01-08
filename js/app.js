$(document).ready(function(){
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var url = apiUrlGenerator();

    $.ajax({
        data:"GET",
        url:url,
        async:"flase",
        dataType:"jsonp",
        success:function(data){
            console.log(data);            
            channelData(data);
        },
        cache:false,
        error:function(errorMessage){
            alert("Error!");
        }
    });
    showChannelName();

    // create a function for process the data
    function channelData(chData){
        var status = chData.stream;
        var description = chData.stream.channel.status;
        if(status === null){
            for(var i = 0; i < streamers.length; i++){
                return $("#des"+i).text("Offline");
            }
        }else{
            for(var j = 0; j < streamers.length; j++){
                $("#des"+j).html("<b>Live</b>");
                $("#des"+j).append("<p>"+description+"</p>");                
            }
        }
    }

    // show streamers channels name in channel box
    function showChannelName(){
        for(var i = 0; i < streamers.length; i++){
            $("#ch"+i).text(streamers[i]);
         }
    }

    // api url generator
    function apiUrlGenerator(){ 
        for(var i = 0; i < streamers.length; i++){
            var newUrl = "https://wind-bow.gomix.me/twitch-api/streams/"+ streamers[i] +"?callback=?";
            return newUrl;
        }
        // if(streamers.length > 0){
        //     for(var i = 0; i < streamers.length; i++){
        //         var newUrl = "https://wind-bow.gomix.me/twitch-api/streams/"+ streamers[i] +"?callback=?";
        //         return newUrl;
        //     }
        // }
    }
});