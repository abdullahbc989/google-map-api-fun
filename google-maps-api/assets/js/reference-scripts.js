function initMap() {
    var options = {
        zoom: 8,
        center: {lat:42.9908, lng -89.5332}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}

/*
                // Add marker
                var verona = new google.maps.Marker({
                    position: {lat: 42.9908, lng: -89.5332},
                    map: map,
                    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                });

                var infoWindow = new google.maps.InfoWindow({
                    content:'<h1>Verona WI</h1>'
                });

                // Adding lister for verona pin
                verona.addListener('click', function() {
                    infoWindow.open(map, verona);
                });

                var madison = new google.maps.Marker({
                    position: {lat: 43.0731, lng: -89.4012},
                    map: map
                });
                */