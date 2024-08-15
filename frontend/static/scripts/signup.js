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
                .then((resp) => resp.json())
                .then(function (response) {
                    if (response.redirect_path) {
                        location.href = response.redirect_path;
                    }
                });
        }
    });
}