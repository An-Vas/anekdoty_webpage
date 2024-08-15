jokes = [];


async function getJokesFromDb(category) {
    jokes = [];

    const response = await fetch('/api/jokes/loadjokes/' + category, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors',
        },

    });

    jokes = await response.json({});

}

window.onload = function () {
    const url = window.location.href;
    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    var admin = false;

    isUser().then((isUser) => {
        if (isUser) {
            getJokesFromDb(lastPart).then(() => isAdmin()).then((isAdmin) => {
                displayJokes(jokes, isAdmin);
                return isAdmin
            }).then((isAdmin) => {
                if (isAdmin) {
                    setEditButtonsOnClickListeners();
                }
            });
        } else {
            displayYouNeedToSignUp()
        }
    })

}

function displayYouNeedToSignUp() {
    let list = document.getElementById('jokes-blocks');
    list.innerHTML = '';
    let div = document.createElement('div');
    div.className += "text-block"
    const p = document.createElement('p');
    p.innerHTML = "Пожалуйста, авторизуйтесь на сайте для просмотра анекдотов"
    list.appendChild(div);
    div.appendChild(p);
}

function displayJokes(jokes, isAdmin) {
    let list = document.getElementById('jokes-blocks');
    list.innerHTML = '';

    jokes.forEach((j) => {

        let div = document.createElement('div');
        const p = document.createElement('p');
        const button = document.createElement('button');
        const divId = document.createElement('div');

        div.className += "text-block"
        p.innerHTML = j.text
        p.className += "text-block-body"
        button.className += "text-block__edit-button"
        button.innerHTML = "Изменить"
        divId.className += "text-block__id"
        divId.innerHTML = j.id

        list.appendChild(div);
        div.appendChild(p);
        div.appendChild(divId);

        if (isAdmin) {
            div.appendChild(button);
        }


    })
    if (list.querySelectorAll('li').length < 1) {
        let p = document.createElement('p');
        p.innerHTML = 'На сервере пока нет анекдотов из этой категории!';
        list.appendChild(p);
    }

}