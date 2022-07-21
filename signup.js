let form=document.querySelector("form");
let signupLs=JSON.parse(localStorage.getItem("signup")) || [] ;
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        firstName:form.fname.value,
        lastName:form.lname.value,
       email:form.email.value,
       pas:form.password.value,
    }
    if(obj.firstName=="" || obj.lastName=="" || obj.email=="" || obj.pas=="")
    {
        alert("Field Empty");
        return
    }
    else{
        console.log(obj)
        signupLs.push(obj);
        localStorage.setItem("signup",JSON.stringify(signupLs));
    }
})
 