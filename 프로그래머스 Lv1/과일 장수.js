function solution(k, m, score) {
    let answer=0;
    score.sort((a,b)=>a-b);     //오름차순 정렬
    for(let i=0;i<score.length;i++){
        if(score.length>=m){
            answer += score.splice(score.length-m,score.length)[0]*m;
        }
    }return answer;
}