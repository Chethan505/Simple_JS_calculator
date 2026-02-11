let number1=0
let number2=0
let result=0
console.log("hi")
document.getElementById("add1").onclick=function(){
    console.log("add btn pressed")
    number1=number1+1;
    document.getElementById("num1").innerHTML=number1
    
    

}



document.getElementById("reset1").onclick=function(){
    console.log("reset btn pressed")
    number1=0;
    document.getElementById("num1").innerHTML=number1
}



document.getElementById("sub1").onclick=function(){
    if(number1<0){
        number1=0;
        console.log("-ve values")
        document.getElementById("num3").innerHTML="negative values not allowed here"
        

    }
    else if(number1>0){

        console.log("sub btn pressed")
        number1=number1-1;
        document.getElementById("num1").innerHTML=number1
    }
}



document.getElementById("add2").onclick=function(){
    console.log("add2 btn pressed")
    number2=number2+1;
    document.getElementById("num2").innerHTML=number2
    


}



document.getElementById("reset2").onclick=function(){
    console.log("reset2 btn pressed")
    number2=0;
    document.getElementById("num2").innerHTML=number2
}



document.getElementById("sub2").onclick=function(){
    if(number2<0){
        number2=0;
        console.log("-ve values")
        
        
    }
    else if(number2>0){
        document.getElementById("num5").innerHTML="message"
        console.log("sub2 btn pressed")
        number2=number2-1;
        document.getElementById("num2").innerHTML=number2
    }
}

document.getElementById("resultbtn").onclick=function(){
   document.getElementById("add")
   document.getElementById("sub")
   document.getElementById("mul")
   document.getElementById("div")
   if(add.checked){
    result=number1+number2
    document.getElementById("result").innerHTML=result
   }
   else if(sub.checked){
    result=number1-number2
    document.getElementById("result").innerHTML=result
   }
   else if(mul.checked){
    result=number1*number2
    document.getElementById("result").innerHTML=result
   }
   else if (div.checked){
    result=number1/number2
    document.getElementById("result").innerHTML=result
   }

}



