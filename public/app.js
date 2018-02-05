var Reservation = function(){
    this.name = $("#res-name").val(),
    this.phone = $("#res-phone").val(),
    this.email = $("#res-email").val(),
    this.id = $("#unique-id").val()
}

$("#submit-res").click(() =>{
    
    var newRes = new Reservation();
    var url = "/reserve/new"
    console.log(newRes);
    $.ajax({
        type: "POST",
        url: url,
        data: newRes
    }).done(() => console.log("success!"))
})
// })

// $("#submit-res").click(() =>{
// })
