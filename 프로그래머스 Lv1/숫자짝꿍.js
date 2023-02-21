// function solution(X, Y) {
//     var answer = [];
//     let array_x = X.split('');
//     let array_y = Y.split('');
//     for(let i=0, len=X.length;i<len;i++){
//         if(array_y.indexOf(array_x[i])>=0){
//             answer.push(...array_y.splice(array_y.indexOf(array_x[i]),1));
//            }
//     }
//     answer = answer.flat();
//     if(answer[0]==='0'){
//         return '0';
//     }
//     else if(answer.length===0){
//         return "-1";
//     }else{
//         return answer.sort((a,b)=>b-a).join('');
//     }
// }
function solution(X, Y) {
    let answer = '';
    let testCase = X.length > Y.length ? [...new Set(Y)] : [...new Set(X)];
  
    testCase.forEach((x) => {
        let count1 = X.split('').filter((num) => num === x).length;
        let count2 = Y.split('').filter((num2) => num2 === x).length;
  
        answer += x.repeat(count1 < count2 ? count1 : count2);
    })
  
    answer = answer.split('').sort((a, b) => b-a);
    if (answer[0] === '0') return '0';
    else if (answer.length === 0) return '-1';
    else return answer.join('');
  }