var reservationData = require("../data/reservationData");
var waitlistData = require("../data/waitlistData");



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/api/reservations", function(req, res) {
        res.json(reservationData);
      });

      app.get("/api/waitlist", function(req, res) {
        res.json(waitlistData);
      });

      app.post("/api/reservations", function(req, res){
          if (reservationData.length < 5) {
              reservationData.push(req.body);
              res.json(true);
          } else {
              waitlistData.push(req.body);
              res.json(false);
          }
          
      });

      app.post("/api/clear", function() {
          reservationData = [];
          waitlistData = [];
      });
};

