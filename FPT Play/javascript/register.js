// trang register 

// const listAccount = [
//     {
//         phone: '',
//         password:'' ,
//     }
// ]
// const registerForm = document.getElementById('form-register');
// function isValidpassword(password, repassword) {
    
//     if (password === repassword) {
//         return true
//     }
//     return false
// }

// registerForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const password = document.getElementById('password').value;
//     const repassword = document.getElementById('re-password').value;
//     if (isValidpassword(password,repassword)) {
//         localStorage.setItem('listAccount', JSON.stringify({
//             phone: event.target.phone.value,
//             password: event.target.password.value
//         }))
//         location.href = './Login.html'
//     } else {
//         alert('Mật khẩu không đúng')
//     }
// })

const registerForm = document.getElementById('form-register');
function isValidPassword(password, re_password) {
    
    if (password === re_password) {
        return true
    }
    return false
}

const listAccount = JSON.parse(localStorage.getItem("listAccount") || "[]");
function addArrayItem(item) {
    listAccount.push({"phone": item.phone, "password": item.password});
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const password = document.getElementById('password').value;
    const re_password = document.getElementById('re-password').value;
    if (isValidPassword(password, re_password)) {        
        addArrayItem({
            phone: event.target.phone.value,
            password: event.target.password.value
        });
        location.href = './Login.html'
    } else {
        alert('Mật khẩu không đúng')
    }
})