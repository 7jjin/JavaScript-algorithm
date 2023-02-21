// function solution(ingredient) {
//     ingredient = ingredient.join('');
//     let count=0;
//     const len = ingredient.length/2;
//     for(let i=0;i<len;i++){
//         if(ingredient.match(/(1231)/g)!==null){
//         ingredient = ingredient.replace(ingredient.match(/(1231)/g),'');
//         count++;
//         }
//     }
//     return count;
// }
function solution(ingredient) {
    let array=[];
    let count=0;
    for(let i=0;i<ingredient.length;i++){
        array.push(ingredient[i]);
        if (array[array.length - 4] === 1
            && array[array.length - 3] === 2
            && array[array.length - 2] === 3
            && array[array.length - 1] === 1) {
            for (let j = 0; j < 4; ++j) {
                array.pop();
            }
            count++;
        }
    } 
    return count;
}
