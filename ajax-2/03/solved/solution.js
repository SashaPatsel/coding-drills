$(document).ready(function () {


  function getMusic() {
    $.ajax({
      url: "https://funwithajax.herokuapp.com/api?q=music&t=gods%plan&apikey=i7_iHnA2g-3d",
      method: "GET",
      'cache': false,
      "async": true,
      "crossDomain": true,
      "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      }

    })
      .then(function (res) {
        console.log("music res:", res);


        $("body").addClass("music-BKG");

        $("#wrap").removeClass("blue");

        $("#content").removeClass("heroes");
        $("#content").removeClass("weatherWrap");

        $("#content").addClass("music");

        $("#content").empty();


        var track = res.tracks.items[0];

        var trackWrap = $("<div>");
        trackWrap.addClass("track-wrap row");

        var trackCol1 = $("<div>");
        trackCol1.addClass("col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1");

        var heading = $("<h2>");
        heading.text(track.name);

        var albumURL = track.album.external_urls.spotify;

        var albumLink = $("<a>");
        albumLink.attr("href", albumURL);

        var img = $("<img>");
        img.addClass("track-img");
        img.attr("src", `${track.album.images[1].url}`);

        albumLink.append(img);

        $(trackCol1).append(heading, albumLink);

        var trackCol2 = $("<div>");
        trackCol2.addClass("col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-2");

        var artistURL = track.artists[0].external_urls.spotify;

        var artistLink = $("<a>");
        artistLink.attr("href", artistURL);

        var artist = $("<h4>");
        artist.text(track.artists[0].name);
        artist.addClass("artist");

        artistLink.append(artist);

        var album = $("<p>");
        album.text(track.album.name);
        album.addClass("album");

        var releaseDate = $("<p>");
        // mm/dd/yyyy
        var date = track.album.release_date;
        date = date.split("-");
        releaseDate.text(date[1] + "/" + date[2] + "/" + date[0]);

        var trackLink = track.external_urls.spotify;

        var listen = $("<a>");
        listen.attr("href", trackLink);

        var btn = $("<button>");
        btn.addClass("track-btn");
        btn.text("listen");
        $(listen).append(btn);

        $(trackCol2).append(artistLink, album, releaseDate, listen);

        // append heading img to trackWrap
        $(trackWrap).append(trackCol1, trackCol2);


        // append trackWrap to #content
        $("#content").append(trackWrap);

      });
  }

  getMusic();


});