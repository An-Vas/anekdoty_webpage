function setEditButtonsOnClickListeners(){
    const textBlocks = document.querySelectorAll('.text-block');

    textBlocks.forEach(function(block) {
        const editButton = block.querySelector('.text-block__edit-button');
        const textContent = block.querySelector('p');
        const divId = block.querySelector('.text-block__id');

        editButton.addEventListener('click', function() {
            const newText = prompt('Введите новый текст:', textContent.textContent);

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