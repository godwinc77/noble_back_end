const booking_submit = document.getElementById("booking-submit")
const booking_type = document.getElementsByClassName("booking-type")

async function submit_booking_type(){
    var data = new FormData()
    for (let i in booking_type){
        data.append(booking_type[i].name, booking_type[i].value)
    }
    var request = await fetch("bookingdet",{
        method: "post",
        body: data
    })
    var response = await request.text()
    alert(response)
}

booking_submit .addEventListener("click", submit_booking_type)