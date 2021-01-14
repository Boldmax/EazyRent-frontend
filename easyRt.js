const place = document.querySelector("#local").value;
console.log(place)
const size = document.getElementById("size").value;
//let price = document.getElementById("price").value;
let submit = document.getElementById("submit-btn");




let houseData;

fetch('http://localhost:7000/', { method: "GET" }
)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        houseData = data
        return houseData
    })

function housePrice(local, hSize) {
    console.log(size)
    /* houseData.map(user => {    
        if ((local === user.Area) && (hSize === user.Size)) {
            // console.log(user.Price)
        } else {
            // console.log("nothing to show")
        }
        return user;
    }
    ) */
}

submit.addEventListener("click", () => {

    return housePrice(place, size)
});

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