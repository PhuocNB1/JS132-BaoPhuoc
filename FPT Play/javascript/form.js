// trang login

const listAccount = JSON.parse(localStorage.getItem("listAccount") || "[]");
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

    if (isValidAccount(event.target.phone.value, event.target.password.value)) {
        localStorage.setItem('account', JSON.stringify({
            phone: event.target.phone.value,
            password: event.target.password.value
        }))
        location.href = './Home.html'
    } else {
        alert('Tài khoản không đúng')
    }
})

const accountstr = localStorage.getItem('account');
const pageSection = document.getElementById('page')
if (accountstr) {
    let account = JSON.parse(accountstr)
    pageSection.innerHTML = `<strong>${account.phone}</strong>`
}