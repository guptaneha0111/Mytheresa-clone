let form=document.querySelector("form");
let signupLs=JSON.parse(localStorage.getItem("signup")) || [];
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    if(signupLs.length==0)
    {
        alert("No user till now");
        return
    }
    let obj={
        email:form.email.value,
        password:form.password.value,
    }
    let issignedin=false;
    signupLs.forEach(function(ele)
    {
        if(ele.email===obj.email && ele.pas===obj.password)
        {
            issignedin=true;
            localStorage.setItem("sognin",JSON.stringify(ele));
            alert("Signin successful");
            window.location.href= "homepage.html";
        }
    })
    if( issignedin===false)
    {
        alert("User doesnot exist");
    }
})