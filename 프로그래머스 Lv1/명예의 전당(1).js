function solution(k, score) {
    let array=[];
    let answer=[];
    for(let i=0;i<score.length;i++){
        if(i+1>k){
            if(score[i]>array[array.length-1]){
                array.pop();
                array.push(score[i]);
                array.sort((a,b)=>b-a);
            }
        }else{
            array.push(score[i]);
            array.sort((a,b)=>b-a);
        }
        answer.push(array[array.length-1]);
    }
    return answer;
}