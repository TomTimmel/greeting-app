var assert = require('chai').assert;
// var greet = require('./index'); 
// var emoji = require('emojic').smiley;
var execChild = require('child_process').execSync;

it('greet with name', function(){
    var regex = /^What is your name/g;
    var greeting = execChild('node index.js', {encoding: 'utf-8'});
    assert.match(greeting, regex);
});



// describe ('testing describe', function(){
//     it('greet with name', function(){
//         var greeting = greet('tester');

//         assert.equal(greeting, 'Hello tester' + ' ' + emoji);
//     });
//     it('no param in function', function(){
//         var greetingEmpty = greet();
//         assert.equal(greetingEmpty, 'Hello undefined' + ' ' + emoji);
//     });
// });
