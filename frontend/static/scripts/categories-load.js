categories = [];

console.log("categories js")
async function getCategoriesFromDb() {
    categories = [];

    const response = await fetch('/api/jokes/loadcategories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors',
        },
    });

    categories = await response.json({});
    console.log(categories)

}


window.addEventListener("load",function(event) {
    getCategoriesFromDb().then(() => displayCategories(categories));
},false);


function displayCategories(categories){
    let list = document.getElementById('categories_list');
    list.innerHTML = '';
    console.log(categories);
    categories.forEach((c) => {

        let li = document.createElement('li');
        const link = document.createElement('a');

        console.log(c.linkpart)
        link.href = "/jokes/" + c.linkpart;
        link.innerHTML = c.category;
        li.appendChild(link);
        list.appendChild(li);

    })
    if (list.querySelectorAll('li').length < 1) {
        let p1 = document.createElement('p');
        p1.innerHTML = 'На сервере пока нет анекдотов!';
        list.appendChild(p1);
    }

}