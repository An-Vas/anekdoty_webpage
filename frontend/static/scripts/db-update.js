jokes = [];


window.addEventListener("load",function(event) {
    sendUser()
},false);

function sendUser() {
    let button = document.getElementById('get-jokes-button');

    button.addEventListener('click', function (e) {

        fetch('/api/jokes/updatebd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                mode: 'no-cors',
            },
        })
            .then((resp) => resp.json())
            .then(function (response) {

                if (response.redirect_path) {
                    location.href = response.redirect_path;
                }
            });

    });
}