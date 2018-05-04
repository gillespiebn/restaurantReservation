// $("submit-res").on("click", function(event) {
//     event.preventDefault();

//     var Reservation = function(){
//         this.name = $("#res-name").val().trim(),
//         this.phone = $("#res-phone").val().trim(),
//         this.email = $("#res-email").val().trim(),
//         this.id = $("#unique-id").val().trim()
//     };


// });

//   app.post("/api/reservations", function(data) {
//     if (data) {
//         alert("You have been booked");
//     } else {
//         alert("You have been put on the wait list");
//     }
//         this.name = $("#res-name").val().trim();
//         this.phone = $("#res-phone").val().trim();
//         this.email = $("#res-email").val().trim();
//         this.id = $("#unique-id").val().trim();
  
//   });

//   function runReservationQuery() {

//     var currentURL = window.location.origin;

//     $.ajax({ url: currentURL +"/api/tables", method: "GET"})
//     .done(function(reservationData) {
//         for (var i = 0; i < reservationData.length; i++) {
//             var reservationDiv = $('<div>');
//             reservationData.addClass('reservation');
//             reservationData.attr("id", "reservation-" + i + 1);

//             var reservationNum = i + 1;

//             $("reservation-" + i + 1).append("<h2>" + reservationNum + "</h2>: <h3>" + reservationData[i].id + "</h3>");
//         }
//     });

//   }

//   function runWaitQuery() {

//     var currentURL = window.location.origin;

//     $.ajax({ url: currentURL +"/api/waitlist", method: "GET"})
//     .done(function(waitlistData) {
//         for (var i = 0; i < waitlistData.length; i++) {
//             var waitlistDiv = $('<div>');
//             waitlistData.addClass('waitlist');
//             waitlistData.attr("id", "waitlist-" + i + 1);

//             var waitlistnNum = i + 1;

//             $("waitlist-" + i + 1).append("<h2>" + waitlistNum + "</h2>: <h3>" + waitlistData[i].id + "</h3>");
//         }
//     });

//   }

//   function clearData() {
//     var currentURL = window.location.origin;

//     $.ajax({ url: currentURL +"/api/clear", method: "POST"});
//   }

//   $("#clear").on("click", function() {
//       console.log("cleared");
//       clearData();

//       location.reload();
//   });

//   runReservationQuery();
//   runWaitQuery();