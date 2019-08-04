 "use strict"
window.onload = function () {






     if(localStorage.getItem("basket") === null){
         localStorage.setItem("basket", JSON.stringify([]));
     }


     const addToCart = document.getElementsByClassName("addtocart")[0];
     const span = document.getElementById("basket");
    const basket = JSON.parse(localStorage.getItem("basket"));


    UpdateCart(basket);




   
   
    //function Relation() {
    //    const products = [...document.querySelectorAll(".Yag")];
    //    products.forEach(mehsullar => {

    //        mehsullar.onclick = function () {

             

    //            const yag = mehsullar.getAttribute("proId");
    //            const yagprice = mehsullar.getAttribute("proPrice");
    //            const yagadi = mehsullar.getAttribute("proName");
            


    //        }


    //    })
    //}



    









   
        addToCart.onclick = function (e) {
            e.preventDefault();

          

            const proId = addToCart.getAttribute("proId");
           




            const proPrice = addToCart.getAttribute("data-proprice");
            const proName = addToCart.getAttribute("data-proname");
            let proImg = addToCart.parentElement.parentElement.firstElementChild.getAttribute("src");


                    



            const product = {
                id: proId,
                name: proName,
                price: proPrice,
                img: proImg
            }


            const basketParsed = JSON.parse(localStorage.getItem("basket"));
            basketParsed.push(product);
            UpdateCart(basketParsed);
            localStorage.setItem("basket", JSON.stringify(basketParsed));





        }
    


     


     function UpdateCart(basket)
 {
    span.innerText = basket.length;
    }























}

