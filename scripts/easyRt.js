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

var payload =
    {
        "rooms": 1,
        "location": "Ogba"
    };

(async function(){
   var rawResponse = fetch('http://lagos-rent-api.herokuapp.com/predict/', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
    
    const content = await rawResponse;
        var data = content.json()
        console.log(data)
        
    }
)();

submited.addEventListener("click", () => {
    console.log('button is working')
    changePrice();
    changeDetails();
    changePage();
});

function newPage() {
    window.location.href = "propertypage.html"
}

propertyPage.addEventListener('click', () => {
    newPage()
})

function changePage() {
    container1.classList.add('hide');
    seconPage.classList.add('hide');
    container2.classList.remove('hide');
}


function changeDetails() {
    places.innerText = place.options[place.selectedIndex].text;
    houseType.innerText = size.options[size.selectedIndex].text;
    noRoom.innerText = rooms.options[rooms.selectedIndex].text;
}

function changePrice() {
    newPrice.innerText = `0,000,0000`
}

home.addEventListener("click", () => {
    location.reload()
})

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
    //https://api.exchangeratesapi.io/latest
    //http://lagos-rent-api.herokuapp.com/predict

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