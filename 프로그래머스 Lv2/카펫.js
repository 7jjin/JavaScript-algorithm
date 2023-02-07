// function solution(brown, yellow) {
//     const hap = brown + yellow;
//     let array=[];
//     let newarray=[];
//     for(let i=1;i<=hap;i++){
//         if(hap%i===0){
//             array.push(i);
//         }
//     }
//     if(array.length%2===0){
//         return array.slice(array.length/2-1,array.length/2+1).sort((a,b)=>b-a)
//     }else{
//        newarray.push(array.slice(Math.floor(array.length/2),Math.floor(array.length/2)+1),array.slice(Math.floor(array.length/2),Math.floor(array.length/2)+1));
//         return newarray.flat();
//     }
// }
function solution(brown, red) {
    var answer = [];
    for (var i = 3; i <= (brown+red)/i; i++) {
        var x = Math.floor((brown+red)/i);
        if( (x-2)*(i-2)=== red) {
            break;
        }
    }

    return [x,i];
}