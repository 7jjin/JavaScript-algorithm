function solution(t, p) {
    let answer=[];
    let x = t.split('')
    for(let i=0,len=x.length;i<len;i++){
        if(x.length>=p.length){
            let array = Number(x.slice(-p.length).join(''));
            x.pop();
            answer.push(array); 
        }
    }
    return answer.filter((item,index)=>{
        return item<=p
    }).length
}
// pop을 하면 배열의 길이가 달라지기 때문에 for문안에 배열 길이를 미리 선언해줘서 변하지 않게 해준다.