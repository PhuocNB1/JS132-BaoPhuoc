// trang register 

const listAccount = [
    {
        phone: '',
        password:'' ,
    }
]
const registerForm = document.getElementById('form-register');
function isValidpassword(password, repassword) {
    
    if (password === repassword) {
        return true
    }
    return false
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('re-password').value;
    if (isValidpassword(password,repassword)) {
        localStorage.setItem('listAccount', JSON.stringify({
            phone: event.target.phone.value,
            password: event.target.password.value
        }))
        location.href = './Login.html'
    } else {
        alert('Mật khẩu không đúng')
    }
})