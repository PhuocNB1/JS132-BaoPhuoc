// trang register 

// window.onload = function () {
// 	if (localStorage) {
// 		document.getElementById('form-register')
// 			.addEventListener('submit', function () {
// 				let phone = document.getElementById('phone').value;
// 				localStorage.setItem('phone', phone);
// 				let password = document.getElementById('password').value;
// 				// localStorage.setItem('password', password);
// 				let repassword = document.getElementById('re-password', repassword).value;
// 				if (repassword === password){
// 					localStorage.setItem('password', password);
// 				}else{
// 					alert('nhập lại mật khẩu')
// 				}
// 		});
// 	}
// }

// trang login
const listAccount = [
    {
        phone: '0326413335',
        password: '123',
    },
    {
        phone: '0326413555',
        password: '123',
    },
]
const loginForm = document.getElementById('form-login');
function isValidAccount(phone, password) {
    for (let i = 0; i < listAccount.length; i++) {
        if (listAccount[i].phone === phone && listAccount[i].password === password) {
            return true
        }
    }
    return false
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (isValidAccount(event.target.phone.value, event.target.password.value)){
        localStorage.setItem('account', JSON.stringify({
            phone : event.target.phone.value,
            password : event.target.password.value
        }))
        location.href = './Home.html'
    }else{
        alert('Tài khoản không đúng')
    }
})

const accountstr = localStorage.getItem('account');
const pageSection = document.getElementById ('page')
if (accountstr){
    let account = JSON.parse(accountstr)
    pageSection.innerHTML = `<strong>${account.phone}</strong>`
}