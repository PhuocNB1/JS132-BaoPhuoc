// js side menu reponsive <= 480 
function openNav() {
    document.getElementById("side-menu").style.width = "170px";
    document.getElementsByClassName("menu-link").style.marginLeft = "170px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
}
function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementsByClassName("menu-link").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgb(17, 17, 17);";
}
let toggle = false;
let btnClickme = document.getElementById('btn-click-me');
// Cách 1: gán lại sự kiện click cho button
btnClickme.onclick = function(e){
   const P = document.getElementById('text')
   if(toggle === false){
    toggle = true;
    P.style.display = 'block'
   }else{
    toggle = false
    P.style.display = 'none'
   }
}