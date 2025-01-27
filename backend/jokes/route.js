const express = require("express")
const router1 = express.Router()

const {loadjokes, loadcategories} = require("./get-data");
const {updateJoke, updatebd} = require("./update-data");


router1.route("/loadjokes/:category").post(loadjokes)
router1.route("/updateJoke").post(updateJoke)
router1.route("/loadcategories").post(loadcategories)
router1.route("/updatebd").post(updatebd)

module.exports = router1;