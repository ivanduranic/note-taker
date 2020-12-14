const router = require("express").Router();
const util = require("util")
const fs = require("fs")
//const joi = require("joi")

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function readFile () {
    let data = await readFileAsync("db/db.json", "UTF-8");
    return JSON.parse(data);
}

router.get('/notes', async function(req, res){
    let data = await readFile();
    res.json(data)
});



module.exports = router