"use strict";

const fsP = require("fs/promises")

let path = process.argv[2]

cat(path);

async function cat(path) {
    try {
        let content = await fsP.readFile(`${path}`, "utf8")
        console.log(content)
    } catch (err) {
        console.log(err)
    }
}