const {getJokesByCategory, getCategories} = require("../db/db");


async function loadjokes (req, res) {
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /api/jokes/loadjokes/:category`);
    const jokes = await getJokesByCategory(req.params['category'] );
    res.json(jokes);
}


async function loadcategories (req, res) {
    console.log("[" +  new Date().toLocaleString() + `] Client: requested /api/jokes/loadcategories`);
    const categories = await getCategories();
    res.json(categories);
}

module.exports = { loadjokes, loadcategories };