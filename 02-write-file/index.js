const fs = require('fs');
const path = require('path');
const readline = require('readline');
const stdin = process.stdin; 
const stdout = process.stdout; 

const secretText = fs.createWriteStream(path.join(__dirname,'./secret.txt'), 'utf-8');

stdout.write("Hi! What is your secret?\n");

stdin.on('data', function(secret) {
    let context = secret.toString().trim();
    if(context === 'exit') {
        stdout.write('bye bye');
        process.exit();
    } else {
        secretText.write(secret);
    }
});

process.on("SIGINT", function () {
    process.exit();
  });



// const writeSecretToFile = (secret) => {
//    fs.createWriteStream( secretText, `${secret}`, err=> {
//        if(err) {
//            console.log('Something went wrong');
//        }
//    });

// }

// const rl = readline.createInterface({
//     input: process.stdin, 
//     output: process.stdout
// });

// rl.question('Hi! What is your secret?', (secret) => {
//     rl.close();
//     writeSecretToFile(secret);
//})


