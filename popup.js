$(document).ready(function() {
  
});
function getData(summonerName) {
  var searchUrl = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=RGAPI-d75c4630-e53f-4d28-a9c9-6729774e99ae';
  $.get( searchUrl, function( data ) {
    console.log(data);
    var noSpaces = summonerName.replace(" ", "");
    console.log(noSpaces);
    var id = data[noSpaces]["id"];
    var fullName = data[noSpaces]["name"];
    var summonerLevel = data[noSpaces]["summonerLevel"];
    console.log(id);
    console.log(fullName);
    console.log(summonerLevel);
    //alert(title1);
    $.each(data['results'], function(index, value) {
      // console.log(value);
      console.log(value['thumbnail']['url']);
      var singleVideo =
        '<a href="' + value['url'] + '">' +
          '<div class="single-video-container">' +
            '<div class="container-main-section">' +
              '<div class="thumbnail-wrapper">' +
                '<img class="thumbnail" src="' + value['thumbnail']['url'] + '"/>' +
              '</div>' +
              '<div class="single-video-title">' + value['title'] + '</div>' +
              '<div class="single-video-time">' + value['begin'] + '</div>' +
            '</div>' +
            '<div class="single-video-summary">' + value['description'] + '</div>' +
          '</div>' +
        '</a>';


        $( ".content-wrapper" ).prepend(singleVideo); 
    });
  });
}

// function search() {
  
// }

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('searchButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        var summonerName = document.getElementById("searchBox").value;
        getData(summonerName);
    });
});

// document.getElementById("searchButton").addEventListener("click",function(){
//   console.log("TEST");
// });
//getImageUrl();
