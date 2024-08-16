function setEditButtonsOnClickListeners(){
    const textBlocks = document.querySelectorAll('.text-block');

    textBlocks.forEach(function(block) {
        const editButton = block.querySelector('.text-block__edit-button');
        const textContent = block.querySelector('p');
        const divId = block.querySelector('.text-block__id');

        editButton.addEventListener('click', async function() {
            const newText = await editDialog('Введите новый текст:', textContent.textContent);
            // const newText = prompt('Введите новый текст:', textContent.textContent);

            if (newText !== null) {
                textContent.textContent = newText;

                fetch('/api/jokes/updateJoke', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        mode: 'no-cors',
                    },
                    body: JSON.stringify({
                        newText: newText,
                        id: divId.innerHTML,
                    }),
                });
            }



        });
    });
}


function editDialog(title, value) {
    const alert = document.createElement('dialog');
    const container = document.createElement('div');
    const header = document.createElement('h4');
    const input = document.createElement('textarea');
    const okButton = document.createElement('button');

    header.innerText = title;
    header.style.marginLeft = '2%'

    input.value = value;
    input.style.width = '96%';
    input.style.marginLeft = '2%'
    input.style.height = '300px';
    input.style.width = '600px';

    okButton.innerText = 'Сохранить';
    okButton.addEventListener('click', function() {
        alert.close();
    });

    container.appendChild(header);
    container.appendChild(input);
    container.appendChild(okButton);

    alert.setAttribute('style', 'position: relative;');
    alert.setAttribute('style', 'margin: 0 auto;');
    alert.appendChild(container);
    document.body.appendChild(alert);
    alert.showModal();

    return new Promise(function(resolve) {
        okButton.addEventListener('click', function() {
            resolve(input.value);
        });
    });
}

