function divisor(a){
    let array=[];
    for(let i=1;i<=a;i++){
        let len=[];
        for(let j=1;j<=i/2;j++){ // 약수는 본래 값을 제외하고 n/2보다 클 수 없다.
            if(i%j===0){
                len.push(j);
            }
        }array.push(len.length+1)
    }return array
}
/// 약수의 개수
function solution(number, limit, power) {
    let answer = divisor(number);
    return answer.map((item,index)=>{
        if(item>limit){
            return item=power;
        }else{
            return item;
        }
    }).reduce((a,b)=>a+b)
}