// Ky thuat DOM
const list = document.getElementsByClassName('text')
console.log(list);
// const P = document.getElementById('text')
// console.log(P);
// query selector, query selectorAll
// P.style.color = 'red';
// P.style.backgroundColor = 'yellow'

// Đối với Js thì đoạn nào String, thì dùng dấu ''
// Còn đoạn nào dùng HTML thì dùng dấu ""

// innerHTML
list[0].innerHTML = 'Đây là đoạn text'

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

// Cách 2

// btnClickme.addEventListener('click', function (e){
//     console.log(e.target.innerHTML);
// })

// PHẦN NÀY DÙNG CHO FORM & INPUT
// Textarea cũng được coi là 1 input

// Mắc định: Form sẽ có sự kiện tên là submit khi enter
// hoặc 1 button bất kì trong form

let form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(form['email'].value)
    if(form['email'].value === ''){
        alert('Bạn cần nhập lại Email')
    }
})

// tạo 1 form đăng ký gồm:
// Email - username - pass
// nếu dữ liệu thõa mản (valid), cônsole.log tài khoản vừa nhập