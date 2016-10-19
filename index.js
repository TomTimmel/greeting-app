const emoji = require('emojic').smiley;
const readline = require('readline');

module.exports = function greet(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What is your name?', (answer) =>{
        var greeting = 'Hello';
        var combined = greeting + ' ' + answer + ' ' + emoji;
        console.log(combined);
        rl.close();
    });
}

module.exports();
