const product = [{
    name: "C D-X Headphone",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 200

}, {
    name: "Essential Oil",
    image: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 300
}, {
    name: "Nike Shoe",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    price: 500
}, {
    name: "Rubbing Product",
    image: "https://plus.unsplash.com/premium_photo-1684407617236-c60dc693293a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 100
}]




// Showing all the Products

let data = '';
for (let i = 0; i < product.length; i++) {
    const sinPro = product[i];
    data += `<div style="margin: 20px;">
                <div><h2>${sinPro.name}</h2></div>
                <div><img style="height:220px; width:270px;" src="${sinPro.image}"></img></div>
                <div style="font-weight: bold;"><h3>Price: $${sinPro.price}</h3></div>
                <button class="abtn" onclick="addItem(${i})">Add to Cart</button>
             </div>`;
}
document.getElementById("first").innerHTML = data;




totalprice = 0;
let proindex = [];


// Function to add item to cart

function addItem(index) {

    totalprice += product[index].price;

    let cdata = '';

    proindex.push(index);


    for (let i in proindex) {
        const coutPro = product[proindex[i]];
        cdata += `<div style="margin: 20px;">
            <div><h2>${coutPro.name}</h2></div>
            <div><img style="height:220px; width:270px;" src="${coutPro.image}"></img></div>
            <div style="font-weight: bold;"><h3>Price: $${coutPro.price}</h3></div>
            <button class="abtn" onclick="removeItem(${i})">Remove form Cart</button>
         </div>`;
    }

    document.getElementById("cout").innerHTML = cdata;
    document.getElementById("tp").innerHTML = `<div style="text-align: center;"><h2>______________________</h2><h1>Total Price: ${totalprice}</h1></div>`;
    document.getElementById("ck").innerHTML = `<button class="bbtn" onclick="checkout()">Checkout</button>`;
    // console.log(proindex[i])
}



// Function to remove item from cart

function removeItem(index) {

    totalprice -= product[proindex[index]].price;

    let cdata = '';

    delete proindex[index];

    for (let i in proindex) {
        const coutPro = product[proindex[i]];
        cdata += `<div style="margin: 20px;">
            <div><h2>${coutPro.name}</h2></div>
            <div><img style="height:220px; width:270px;" src="${coutPro.image}"></img></div>
            <div style="font-weight: bold;"><h3>Price: $${coutPro.price}</h3></div>
            <button class="abtn" onclick="removeItem(${i})">Remove from Cart</button>
         </div>`;
    }

    document.getElementById("cout").innerHTML = cdata;
    document.getElementById("tp").innerHTML = `<div style="text-align: center;"><h2>______________________</h2><h1>Total Price: ${totalprice}</h1></div>`;
    document.getElementById("ck").innerHTML = `<button class="bbtn" onclick="checkout()">Checkout</button>`;
    // console.log(proindex[i])
}



// Function for Checkout and Thank you page

function checkout() {

    location.replace("thank_you.html");

}

