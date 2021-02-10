
const place = document.getElementById("local");
const size = document.getElementById("type");
const rooms = document.getElementById('bedroom');
const submited = document.querySelector(".submit-btn");
const container1 = document.querySelector('.container');
const seconPage = document.querySelector('.second-page');
const container2 = document.querySelector('.container2');
const newPrice = document.getElementById('pickPrice');
const places = document.getElementById('place');
const houseType = document.getElementById('house-type');
const noRoom = document.getElementById('no-rooms');
const home = document.querySelector('.home');
const propertypage = document.querySelector("#propertyPage");


// payload object
function payload(room, location) {
    this.rooms = room;
    this.location = location
};



// API fetch handler
function getPrice() {
    var newRoomNo = rooms.options[rooms.selectedIndex].value;
    var newPlace = place.options[place.selectedIndex].text;
    var payloader = new payload(newRoomNo, newPlace);
    fetch('http://lagos-rent-api.herokuapp.com/predict/', {
        method: "POST",
        body: JSON.stringify(payloader),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (load) {
            console.log(load.Rent)
            var result = load.Rent
            result = Math.round(result/1000) * 1000 ;
            var result2 = result + 15000
            newPrice.innerText = `From ₦${result} - ₦${result2}`
        })
        console.log(payloader)
}

// Submit button handler
submited.addEventListener("click", () => {
    console.log('button is working')
    getPrice()
    changeDetails();
    changePage();
    //changePrice();
});

// Property Page loader 1
function newPage() {
    window.location.href = "propertypage.html"
}

// Property Page loader 2
propertyPage.addEventListener('click', () => {
    newPage()
})

// Home page/result page switch
function changePage() {
    container1.classList.add('hide');
    seconPage.classList.add('hide');
    container2.classList.remove('hide');
}

// User entry display handler
function changeDetails() {
    places.innerText = place.options[place.selectedIndex].text;
    houseType.innerText = size.options[size.selectedIndex].text;
    noRoom.innerText = rooms.options[rooms.selectedIndex].text;
}

/* function changePrice() {    
} */


// home refresh handler
home.addEventListener("click", () => {
    location.reload()
})
