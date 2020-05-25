var centerOfMap = [0,0];
		var locations = [
          [48.860692, 2.337633,"Teens Take on Covid Hackathon/googleMapMarker.png","louvre_Museum"],
          [38.891499, -77.026130,"Teens Take on Covid Hackathon/googleMapMarker.png", "national_Museum_Of_Natural_History"],
          [25.295596, 51.539126,"Teens Take on Covid Hackathon/googleMapMarker.png", "the_Museum_of_Islamic_Art"],
          [48.810911, 14.313301,"Teens Take on Covid Hackathon/googleMapMarker.png","egon_Schiele_Art_Centrum"],
          [40.779518, -73.963276,"Teens Take on Covid Hackathon/googleMapMarker.png","the_Metropolitan_Museum_Of_Art"],
          [37.328984, 126.814784,"Teens Take on Covid Hackathon/googleMapMarker.png", "gyeonggi_Museum_Of_Modern_Art"],
          [41.911825, -87.631693,"Teens Take on Covid Hackathon/googleMapMarker.png", "chicago_History_Museum"],
          [30.284863, -97.733992,"Teens Take on Covid Hackathon/googleMapMarker.png","glasstire_Texas_Visual_Art"],
          [18.926978, 72.832670,"Teens Take on Covid Hackathon/googleMapMarker.png","CHHATRAPATI_SHIVAJI_MAHARAJ_VASTU_SANGRAHALAYA"],
          [13.852031, 100.562549,"Teens Take on Covid Hackathon/googleMapMarker.png","museum_of_Contemporary_Art_MOCA_BANGKOK"],
          [1.297436, 103.851040,"Teens Take on Covid Hackathon/googleMapMarker.png","singapore_Art_Museum"]
        ];

         
		function initialize() {
        var myOptions = {	
          center: new google.maps.LatLng(centerOfMap[0], centerOfMap[1]),
          zoom: 2,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		
			var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
		
			for (var i = 0; i < locations.length; i++) {
				var beach = locations[i];
        
          urlimg =  beach[2];
          var image = new google.maps.MarkerImage(
                urlimg,
                null,
                null,
                null,
                new google.maps.Size(30, 30)); 								

          var myLatLng = new google.maps.LatLng(beach[0], beach[1]);
				
          marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            draggable : false,
            animation : google.maps.Animation.DROP
          });
          (function(_beach,_marker){
          $('#' + _beach[3]).on('mouseover', function(e){
                 _marker.setAnimation(google.maps.Animation.BOUNCE);
                 setTimeout(function(){_marker.setAnimation(null); }, 750);
          });
				})(beach,marker);
			}
			//setMarkers(map, beaches);	
		}
    $(document).ready(function(){
    	initialize();
    });
