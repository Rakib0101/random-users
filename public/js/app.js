    // fetch('https://randomuser.me/api/')
    // .then(res => res.json())
    // .then(data => console.log(data))
    document.getElementById('user-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'name is';
        document.getElementById('name').innerText = `Rakibul Islam`;
    })
    document.getElementById('email-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'email address is';
        document.getElementById('name').innerText = `rakib.01jan@gmail.com`;
    })
    document.getElementById('calendar-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'birthday is';
        document.getElementById('name').innerText = `1990-01-01`;
    })
    document.getElementById('address-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'hometown is';
        document.getElementById('name').innerText = `Dhaka`;
    })
    document.getElementById('phone-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'contact no. is';
        document.getElementById('name').innerText = `+8801929032016`;
    })
    document.getElementById('password-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'password is';
        document.getElementById('name').innerText = `abcd1234`;
    })
function loadApi() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
        .then(data => getApi(data.results[0]))
    
}
function getApi(result) {
    console.log(result)
    displayUser(result.picture.large, result.name.first, result.email, result.dob.date, result.location.city, result.cell, result.login.password)
}
function displayUser(userImg, userName, userEmail, userBirthday, userAddress, userNo, userPassword) {
    document.getElementById('user-img').src = `${userImg}`;
    document.getElementById('name').innerText = `${userName}`;
    document.getElementById('user-icon').style.hover = document.getElementById('name').innerText = `${userName}`;
    document.getElementById('user-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'name is';
        document.getElementById('name').innerText = `${userName}`;
    })
    document.getElementById('email-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'email address is';
        document.getElementById('name').innerText = `${userEmail}`;
    })
    document.getElementById('calendar-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'birthday is';
        document.getElementById('name').innerText = `${userBirthday}`;
    })
    document.getElementById('address-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'hometown is';
        document.getElementById('name').innerText = `${userAddress}`;
    })
    document.getElementById('phone-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'contact no. is';
        document.getElementById('name').innerText = `${userNo}`;
    })
    document.getElementById('password-icon').addEventListener('mouseover', function () {
        document.getElementById('span').innerText = 'password is';
        document.getElementById('name').innerText = `${userPassword}`;
    })
}