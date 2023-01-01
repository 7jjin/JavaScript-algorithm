// function solution(n){
//     var a = '*';
//      var b = "";
//     for(let i=0;i<=n;i++){
//         for(let j=0;j<i;j++){
//            console.log(a);
//         } 
//         console.log(b);
//     }
// }
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    let logStr = ''
    for(let i = 0 ; i < num; i++) {
        for(let j = 0 ; j <= i; j++) {
            logStr+='*'
        }
        logStr+='\n'
    }
    console.log(logStr)
});
//////////////잘모르겠음 이문제;;