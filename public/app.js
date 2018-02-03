const Reservation = () =>{
    this.name = $("#res-name");
    this.phone = $("#res-phone");
    this.email = $("#res-email");
    this.id = $("#unique-id");
}
$("#submit-res").click(() =>{
//     console.log("this happened after click");
    var newRes = Reservation();
    var url = "http://localhost:3000/reserve/new"
    $.ajax({
        type: "POST",
        url: url,
        data: newRes,
        success: "success",
        dataType: "object"
    })
    $.post("http://localhost:3000/reserve/new", Reservation(), function(){
        alert("it posted");
    })
})
// })

// $("#submit-res").click(() =>{
// })
