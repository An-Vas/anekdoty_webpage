jokes = [];

window.onload = function () {
    sendUser()
}

function sendUser(){
    let button = document.getElementById('signupButton');

    button.addEventListener('click', function(e) {

        e.preventDefault();
        var username = document.getElementById("usernameInput").value
        var password = document.getElementById("passwordInput").value

        console.log(username);
        console.log(password);

        if (username !== null && password !== null ) {
            fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    mode: 'no-cors',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((res) => {
                    if (res.status == 401){
                        alert("Пользователя с таким username не существует")
                    } else if (res.status == 400){
                        alert("Пароль указан неправильно")
                    }
                    return res;
                })
                .then((resp) => resp.json())
                .then(function(response) {
                if (response.redirect_path) {
                    location.href = response.redirect_path;
                }
            });
        }
    });
}