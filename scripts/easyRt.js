const place = document.getElementById("local").value;
const size = document.getElementById("type").value;
const rooms = document.getElementById('bedroom').value;
const submited = document.querySelector(".submit-btn");
const container1 = document.querySelector('.container');
const seconPage = document.querySelector('.second-page');
const container2 = document.querySelector('.container2');
const newPrice = document.getElementById('pickPrice');
const places = document.getElementById('place');
const houseType = document.getElementById('house-type');
const noRoom = document.getElementById('no-rooms');




/* function housePrice(local, hSize) {
    //console.log(size)  
    houseData.map(user => {
        if ((local === user.Area) && (hSize === user.Size)) {
            // console.log(user.Price)

        } else {
            // console.log("nothing to show")
        }
        return user;
    }
    )
} */
//http://lagos-rent-api.herokuapp.com/predict


submited.addEventListener("click", () => {
    changePrice();
    changeDetails();
    changePage();


    //housePrice(place, size)
});
/* function addnew(){
    var button = document.createElement('div');
    button.innerText = "work work work";
    return addText.appendChild(button) 
} */

function newPage() {
    window.location.href = "resultpage.html"
}

function changePage() {
    container1.classList.add('hide');
    seconPage.classList.add('hide');
    container2.classList.remove('hide');
}


function changeDetails() {
    places.innerText = `${place}`
    houseType.innerText = `${size}`
    noRoom.innerText = `${rooms} Rooms`
}

function changePrice() {
    newPrice.innerText = `15000,00`
}

/* fetch('https://api.exchangeratesapi.io/latest', { method: "GET" }
)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data)
    }) */
//

//fetchData()
/* <p>Area: ${user.Area}</p>
<p>Size: ${user.Size}</p> */

/*
         <p>Price: ${data.Price}</p>
         </div> `
         const result = data.Price;
         return console.log(result) */
/* const html = data.map(user => {
   return
   `<div class= "use">
   <p>Price: ${user.Price}</p>
   </div>`
})
.join("");
document.querySelector(".buse").insertAdjacentHTML("afterbegin", html) */