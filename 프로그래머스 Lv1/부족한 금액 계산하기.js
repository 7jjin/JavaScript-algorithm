function solution(price, money, count) {
    const array=[];
    for(let i=1;i<=count;i++){
        array.push(price*i)
    }
    return money-array.reduce((a,b)=>a+b)>=0?0:array.reduce((a,b)=>a+b)-money
}