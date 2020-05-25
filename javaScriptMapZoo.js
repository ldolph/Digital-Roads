var centerOfMap = [0,0];
		var locations = [
          [32.735317,-117.149048,"Teens Take on Covid Hackathon/googleMapMarker.png","san_Diego_Zoo"],
          [38.930667,-77.049505,"Teens Take on Covid Hackathon/googleMapMarker.png", "smithsonian_National_Zoo_Park"],
          [39.767447,-86.180731,"Teens Take on Covid Hackathon/googleMapMarker.png", "indianapolis_Zoo"],
          [35.150212,-89.994321,"Teens Take on Covid Hackathon/googleMapMarker.png","memphis_Zoo"],
          [35.055915,-85.311097,"Teens Take on Covid Hackathon/googleMapMarker.png","tennessee_Aquarium"],
          [32.209923,-110.920744,"Teens Take on Covid Hackathon/googleMapMarker.png", "reid_Park_Zoo"],
          [38.635984,-90.292847,"Teens Take on Covid Hackathon/googleMapMarker.png", "saint_Louis_Zoo"],
          [41.921302,-87.633496,"Teens Take on Covid Hackathon/googleMapMarker.png","lincoln_Park_Zoo"],
          [39.143397,-84.508998,"Teens Take on Covid Hackathon/googleMapMarker.png","cincinnati_Zoo"],
          [31.463204, 130.501785,"Teens Take on Covid Hackathon/googleMapMarker.png", "hirakawa_Zoo"],
          [36.732754, 138.462158,"Teens Take on Covid Hackathon/googleMapMarker.png", "jigokudani_Monkey_Park"],
          [34.813745, 134.685277,"Teens Take on Covid Hackathon/googleMapMarker.png","miaou"],
          [-36.864049, 174.719685,"Teens Take on Covid Hackathon/googleMapMarker.png","auckland_Zoo"],
          [51.535344, -0.153420,"Teens Take on Covid Hackathon/googleMapMarker.png","ZSL_London_Zoo"],
          [-37.784033, 144.951558,"Teens Take on Covid Hackathon/googleMapMarker.png","zoos_Victoria"],
          [50.117911, 14.405875,"Teens Take on Covid Hackathon/googleMapMarker.png","prague_Zoo"],
          [-24.703691, 31.536753,"Teens Take on Covid Hackathon/googleMapMarker.png","djuma_Private_Game_Reserve"],
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
