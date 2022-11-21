// trang register 



// const phone = document.getElementById('phone').value;
// const password = document.getElementById('password').value;
// const repassword = document.getElementById('repassword').value;
// window.onload = function renderAccount() {
//     if (password === repassword){
//          const listAccount = localStorage.getItem('listAccount') ? JSON.parse('listAccount') : [];
//          listAccount.push({
//             phone: phone,
//             password : password,
//          });
//          localStorage.setItem('listAccount',JSON.stringify(listAccount));
//     }else (password !== repassword){
//         alert('Nhập lại mật khẩu!!!')
//     }
// }
const Account = [
    {
        phone: '',
        password:'' ,
    }
]
const registerForm = document.getElementById('form-register');
function isValidpassword(password, repassword) {
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('re-password').value;
    if (password === repassword) {
        return true
    }
    return false
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (isValidpassword(event.target.phone.value, event.target.password.value)) {
        localStorage.getItem('listAccount', JSON.parse({
            phone: event.target.phone.value,
            password: event.target.password.value
        }))
        location.href = './Login.html'
    } else {
        alert('Mật khẩu không đúng')
    }
})