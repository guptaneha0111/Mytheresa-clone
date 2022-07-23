let container=document.getElementById("container");

let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];
let totalPrice=document.getElementById("total-price");
display(cartLS);
function display(cartLS)
{
    container.innerHTML="";
    let total=0;
    cartLS.forEach(function (ele,index)
    {
        total=total+Number(ele.price);
        let product=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.img;
        let brand=document.createElement("h2");
        brand.innerText=ele.brand;
        let name=document.createElement("h2");
        name.innerText=ele.pname;
        let price=document.createElement("h4");
        name.innerText=ele.price;
        let deletebtn=document.createElement("button");
        deletebtn.innerText="Remove";
        deletebtn.addEventListener("click",function(){
            DeleteCart(index)
        })
        product.append(img,brand,name,price,deletebtn);
        container.append(product);
    });
    totalPrice.innerText=total;
}
function   DeleteCart(index)
{
    cartLS.splice(index,1);
    localStorage.setItem("cart-page",JSON.stringify(cartLS))
    display(cartLS)
}



document.getElementById("pb").addEventListener("click",cartj)
 function cartj(){
    window.location.href="checkout.html";
 }

 document.getElementById("pb1").addEventListener("click",cartjj)
 function cartjj(){
    window.location.href="checkout.html";
 }

 document.getElementById("cs").addEventListener("click",cartjjj)
 function cartjjj(){
    window.location.href="jewelry.html";
 }



