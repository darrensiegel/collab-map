
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.map.rendered = function() {
  gmaps.initialize(function(lat, lng) {
    CollabMap.Markers.insert({ lat: lat, lng: lng, title: Meteor.user().username});
  });

  CollabMap.Markers.find().observe({
    added: function(marker) {
      gmaps.addMarker(marker);

      if (marker.title !== Meteor.user().username) {
        $.notify(marker.title + " added a marker", "warn");
      }
    }
  });

  Meteor.users.find().observe({
    added: function(user) {
      if (user._id !== Meteor.userId) {
        $.notify(user.username + " has joined", "info");
      }
    }
  });

};