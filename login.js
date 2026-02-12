console.log("hi")

document.getElementById("btn1").onclick=function(){
    let admin=document.getElementById("username").value
    let password=document.getElementById("password").value

    if(admin==="admin@gmail.com" && password==="123"){
        window.location.href="index.html";

        
    }
    else{
        document.getElementById("login").innerHTML="invalid Credentials";

    }

}