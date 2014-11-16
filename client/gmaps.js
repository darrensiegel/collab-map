gmaps = {
    // map object
    map: null,

    clickHandler: function(event) {
      this.callback(event.latLng.lat(), event.latLng.lng());
    },

    callback: null,

    // add a marker given our formatted marker data object
    addMarker: function(marker) {
        var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
        var gMarker = new google.maps.Marker({
            position: gLatLng,
            map: this.map,
            title: marker.title,
            // animation: google.maps.Animation.DROP,
            icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        return gMarker;
    },

    // intialize the map
    initialize: function(callback) {
        var mapOptions = {
            zoom: 3,
            center: new google.maps.LatLng(48.8567, 2.3508),
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        this.callback = callback;
        this.map = new google.maps.Map(
            document.getElementById('map-canvas'),
            mapOptions
        );

        this.callback = callback;

        google.maps.event.addListener(this.map, 'rightclick', this.clickHandler.bind(this));

    }
};