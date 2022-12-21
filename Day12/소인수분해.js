// function solution(n) {
//     const rst =[];
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             rst.push(i)
//             n /= i;
//         }
//     }return rst.sort((a,b)=>a-b)
// }
function solution(n) {
    let result = [];
    let divisor = 2;
    
    while (n >= 2) {
      if (n % divisor === 0) {
        result.push(divisor)
        n = n / divisor;
      }
      
       else divisor ++;
      
    }
    
    return [...new Set(result)];
  }