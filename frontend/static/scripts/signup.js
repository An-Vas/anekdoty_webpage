jokes = [];

window.onload = function () {
    sendUser()
}

function sendUser() {
    let button = document.getElementById('signupButton');

    button.addEventListener('click', function (e) {

        e.preventDefault();
        var username = document.getElementById("usernameInput").value
        var password = document.getElementById("passwordInput").value
        var admin = document.getElementById("adminCheckbox").checked

        console.log(username);
        console.log(password);
        console.log(admin);

        var redirect = true;

        if (username !== null && password !== null) {
            fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    mode: 'no-cors',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    admin: admin,
                }),
            })
                .then((res) => {
                    console.log(res.status)
                    if (res.status == 409){
                        alert("Username уже занят, попробуйте другой");
                        redirect = false;
                    }
                    if (res.status == 411){
                        alert("Пароль должен быть >= 4 символа");
                        redirect = false;
                    }
                    return res;
                })
                .then((resp) => resp.json())
                .then(function (response) {
                    if (response.redirect_path && redirect) {
                        location.href = response.redirect_path;
                    }
                });
        }
    });
}