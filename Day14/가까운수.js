// function solution(array, n) {
//      var newarray =[];
//     for(let i=0;i<array.length;i++){
//         a = array[i] - n;        현재 배열값에서 주어진 수 빼기
//         newarray.push(Math.abs(a));      절대값을 해서 배열에 넣기
//     }
//     return array[newarray.indexOf(Math.min(...newarray))];   최소값을 찾아서 그 인덱스를 구한후 원래 배열에 적용
// }
const solution = (array, n) => +array.filter(a => Math.abs(a-n) === Math.min(...array.map(a => Math.abs(a-n)))).sort((a,b) => a-b)[0]
