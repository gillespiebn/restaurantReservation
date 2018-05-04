const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      
      app.get("/reservations", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reservation.html"));
      });
      
      // Get all tabless
      app.get("/tables", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/tables.html"));
      });
};