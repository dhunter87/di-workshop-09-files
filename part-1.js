var fs = require('fs')
console.log('your code here')
var fileContents = fs.readFileSync('names.txt', 'utf-8')
// console.log(fileContents);
var res = fileContents.split('\r\n');
// console.log(res);
// res.reverse();
// for( var r of res ){

//     console.log(r);
// }

var reversedArray = res.reverse().join()
fs.writeFileSync('reversedNames.txt', reversedArray, 'utf-8');
console.log(res.reverse().join());

// for (var name of reversedArray) {
//     console.log(name)
//   }


