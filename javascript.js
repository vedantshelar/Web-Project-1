let userInp = document.querySelector(".userInp");
let QRCODE = document.querySelector("#QR");
let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{

if(userInp.value!=""){
let url = `https://api.qrserver.com/v1/create-qr-code/?&data=${userInp.value}`;
QRCODE.src=url; 
QRCODE.style.display="block";
}else{
    alert("Enter Something is must")
} 

})