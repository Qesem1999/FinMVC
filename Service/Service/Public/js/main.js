"use strict"





const span1 = document.getElementById("basket");
const basket = JSON.parse(localStorage.getItem("basket"));

span1.innerText = basket.length;

const tbody = document.querySelector("#carts .table tbody");

if (basket.length != 0) {
    basket.forEach(element => {

       
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");


        const td2 = document.createElement("td");
        const price = document.createElement("p");

        price.innerHTML = element.price + "$";
        td2.appendChild(price);


        const td3 = document.createElement("td");
        const quant = document.createElement("span");
        quant.classList.add("quantity");

        quant.innerText = 1;


        td3.appendChild(quant);



        const td4 = document.createElement("td");
        const total = document.createElement("p");
        total.innerHTML = element.img;

        td4.appendChild(total);




        td1.classList.add("d-flex");


        const icon = document.createElement("span");

        icon.innerHTML = "<i class = 'fas fa-times'></i>";



        icon.onclick = function () {
            tr.remove();
            span1.innerText = basket.length--;

        }

        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("img-wrapper");
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = element.img;



        const info = document.createElement("div");
        info.classList.add("productinfo");
        const h4 = document.createElement("h4");


        h4.innerHTML = element.name;
        const p = document.createElement("p");
        p.innerHTML = "adadd";


        info.appendChild(h4);
        info.appendChild(p);


        imagewrapper.appendChild(image);
        td1.appendChild(icon);
        td1.appendChild(imagewrapper);
        td1.appendChild(info);



        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);


        tbody.appendChild(tr);  



    });

        }
