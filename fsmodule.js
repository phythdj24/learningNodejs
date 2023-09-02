const fs = require('node:fs');


// fs.readFile('file.txt', 'utf8', (err, data)=> {
//     console.log(err,data)
// })



// const a = fs.readFileSync('file.txt') //filesync func block intentionally
// console.log(a.toString())

//  console.log("finish reading file") // print first without filesync method




fs.writeFile('file2.txt', "this is a data", ()=>{
    console.log("wrriten to the file")
});