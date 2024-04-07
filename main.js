const bookButtons = document.querySelectorAll(".btn1");

bookButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const card = event.target.closest('.card');
        const radioInputs = card.querySelectorAll("input[type='radio']");
        const selectedInput = [...radioInputs].find(input => input.checked);

        if (selectedInput) {
            selectedInput.disabled = true;
            const k = selectedInput;
            const values = selectedInput.value;
            var name = card.querySelector('h3').innerHTML;
            console.log(name)
            const booking_time_arr = [];
            booking_time_arr.forEach((item)=>{
                item.disabled == false;
                item.style.background = "red";
            })
            const bookingData = {
                name: name,
                time: values,
                timestamp: Date.now() // Store current timestamp
            };
            localStorage.setItem('booking', JSON.stringify(bookingData));
            booking_time_arr.push(k);
            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.innerHTML = `
                <i class="fa-regular fa-circle-check"></i>
                <p>Your Booking is <b>CONFIRMED</b> with ${name}</p>
                <hr class="dotted-line">
                <p><strong>Your meeting is booked at </strong>${values}</p>
                <hr class="dotted-line">
                <p><b>See you soon!</b></p>
            `;
            document.body.appendChild(popup);
            setTimeout(function () {
                document.body.removeChild(popup);
            }, 3000);
            
            startTimer(values);

        } else {
            // Handle case when no radio input is selected
            console.log("Please select a time slot.");
        }

        // Reset form after submission
        radioInputs.forEach(input => input.disabled = false);
    });
});

var bellIcon = document.querySelector(".notification_icon .fas.fa-bell");
var dropdown = document.querySelector(".dropdown");
bellIcon.addEventListener("click", function() {
    dropdown.classList.toggle("active");
});
// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    if (!event.target.closest('.notification_wrap')) {
        dropdown.classList.remove("active");
    }
    });