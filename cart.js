let container=document.getElementById("container");

let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];
function display(data)
{
    container.innerHTML=null;
    data.forEach(function (ele)
    {
        let product=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.img;
        let brand=document.createElement("h2");
        brand.innerText=ele.brand;
        let name=document.createElement("h2");
        name.innerText=ele.pname;
        let price=document.createElement("h4");
        name.innerText=ele.price;
        let cart=document.createElement("button");
        cart.innerText="Remove";
        cart.addEventListener("click",function(){
            AddToCart(ele);
        })
        product.append(img,brand,name,price,cart);
        container.append(product);
    });
}
display(cartLS);