function solution(n) {
    array = String(n).split('');
    var count= 0;
    for(let x of array){
        count +=parseInt(x);
    }
    return count;
}