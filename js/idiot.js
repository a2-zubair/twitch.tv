$(document).ready(function() {
    // channel lists.
    var streamers = [
      "freecodecamp",
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas"
    ];
    // using loop to go through every channel name.
    for (var i = 0; i < streamers.length; i++) {
      var url = "https://wind-bow.glitch.me/twitch-api/channels/" + streamers[i];
      $.getJSON(url, function(cData) {
        var sURL = "https://wind-bow.glitch.me/twitch-api/streams/" + cData.name;
        // here usign every channel name to go through their stream data.
        $.getJSON(sURL, function(streamData) {
          var status = "";
          var index = i;
          // chacking the channel is streamign or not.
          if (streamData.stream === null) {
            status = "Offline!";
            $("#channel-box").append(
              "<div class='ch-box offline'><div class='cL'><img src='" +
                cData.logo +
                "' alt='channel logo'></div><h3 class='ch'>" +
                cData.display_name +
                "</h3><div class='des bg-red'>" +
                status +
                "</div><a class='link' href='" +
                cData.url +
                "' target='_blank'>Visit Channel</a></div>"
            );
            
          } else {
            status = streamData.stream.channel.status;
            $("#channel-box").append(
              "<div class='ch-box online'><div class='cL'><img src='" +
                cData.logo +
                "' alt='channel logo'></div><h3 class='ch'>" +
                cData.display_name +
                "</h3><p class='des'>" +
                status +
                "</p><a class='link' href='" +
                cData.url +
                "' target='_blank'>Visit Channel</a></div>"
            );
          }
        });
      });
    }
    // button click event
    // all button
    $("#all").on("click", function() {
      $(".online, .offline").show();
    });
    // online button
    $("#online").on("click", function() {
      $(".offline").hide();
      $(".online").show();
    });
    // offline button
    $("#offline").on("click", function() {
      $(".online").hide();
      $(".offline").show();
    });
  });
  