"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

main();

/** Function reads and console logs the contents of a .txt file */
async function cat(path) {

    let content = await fsP.readFile(path, "utf8");
    console.log(content);
}


/** Function reads and console logs the contents of a URL */
async function webCat(url) {

    let resp = await axios.get(url)
    console.log(resp.data)

}

/** Main function, takes args and runs cat() if path a .txt file  
 *  or webCat() if path is a url
*/
async function main(path = process.argv[2]) {

    try {
        if (path.startsWith('http://') || path.startsWith('https://')) { //Code Review: Alternatively, there's a URL Class in Js.
            await webCat(path);
        }
        else {
            await cat(path);
        }
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}