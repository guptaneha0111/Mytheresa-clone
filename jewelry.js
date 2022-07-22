let product_data=[
    {
        brand:"Saint Laurent",
        pname:"Clip-on drop earings",
        price:"669",
        category:"earing",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00647362_d2.jpg",
        productID:"women1",

    },
    {
        brand:"gucci",
        pname:"Crystal embelished",
        price:"389",
        category:"bracelet",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8a/P00675727_d2.jpg",
        productID:"women2",
    },
    {
        brand:"Saint Laurent",
        pname:"Nautilus shell 14kt gold",
        price:"745",
        category:"necklace",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/db/P00680160_d2.jpg",
        productID:"women3",
    },
    {
        brand:"Bottega veneta",
        pname:"Gold-platted silver ring",
        price:"425",
        category:"ring",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c0/P00707376_d2.jpg",
        productID:"women4",
    },
    {
        brand:"Saint Laurent",
        pname:"Opyum embellished",
        price:"335",
        category:"earing",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d7/P00709568_d2.jpg",
        productID:"women5",
    },
    {
        brand:"Valentino",
        pname:"Embellished volgo chain",
        price:"215",
        category:"bracelet",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2c/P00705593_d2.jpg",
        productID:"women6",
    },
    {
        brand:"Sydney evan",
        pname:"Clam shell small 14kt gold",
        price:"559",
        category:"necklace",
        img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e0/P00705564_d2.jpg",
        productID:"women7",
    },
    
 {
    brand:"Aliita",
    pname:"Deco rombo",
    price:"665",
    category:"ring",
    img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/83/P00688553_d2.jpg",
    productID:"women8",
},
{
    brand:"Magda butrym",
    pname:"Pearl and crystal",
    price:"335",
    category:"earing",
    img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/29/P00705064_d2.jpg",
    productID:"women9",
},
{
    brand:"Versace",
 pname:"Medusa and greca",
    price:"379",
    category:"bracelet",
    img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b5/P00706290_d2.jpg",
    productID:"women10",
},
{
    brand:"Loewe",
    pname:"Nappa twisted",
    price:"549",
    category:"necklace",
    img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/aa/P00691106_d2.jpg",
    productID:"women11",
},
{
    brand:"Marni",
    pname:"Trapeze enamel",
    price:"195",
    category:"ring",
    img:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00695319_d2.jpg",
    productID:"women12",
},

];
let container=document.getElementById("container");
let filter=document.getElementById("filterjewel");
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
        cart.innerText="Add To Shopping Bag";
        cart.addEventListener("click",function(){
            AddToCart(ele);
        })
        product.append(img,brand,name,price,cart);
        container.append(product);
    });
}
display(product_data);
filter.addEventListener("change",function()
{
    if(filter.value==="")
    {
        display(product_data);
    }
    else{
    let filtered=product_data.filter(function(ele)
    {
        return ele.category===filter.value;
    })
    display(filtered);
}
});

function AddToCart(product){
   let iscartAdded=false;
   for(let i=0;i<cartLS.length;i++)
   {
    if(cartLS[i].productID===product.productID)
    {
        alert("Product already in the bag");
        iscartAdded=true;
        return
    }
   }
   if(iscartAdded===false)
   {
    cartLS.push(product);
    alert("Product Added Successfully");
    localStorage.setItem("cart-page",JSON.stringify(cartLS));
   }

}
