/* cool js shit */

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });

var comicvineAPI = "http://www.comicvine.com/api/issues/?api_key=2ae43c714747c73f794a80416ccab01d1b9930e9&format=json";
var cvFilter = "&filter=volume:4050-4937&limit=60";

// $.ajax({
// 	type: "GET",
// 	url: comicvineAPI + cvFilter,
// 	dataType: 'jsonp',
// 	success: function(data){
// 		    $.each(data.results, function(i, item){
// 		      $("<img>").attr("src", item.image.icon_url).appendTo("#images");
// 		    });
// 		}
// 	});

  $.getJSON('js/doctor_zero.json',function(data){
    $.each(data.results, function(i, item){
        $('h3')
        $("<img>").attr("src", item.image.icon_url).appendTo("#images");
      });
  });

  $('p').animate({
    padding: '20px',
    borderBottomWidth: "10px"
  }, 2000);

  $("button").on('click', function(){
    $('#images').slideToggle('slow');
    $('p').animate({
      borderBottomWidth: "1px"
    }, 1000)
  });

})();
