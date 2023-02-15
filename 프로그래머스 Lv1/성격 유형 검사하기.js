function solution(survey, choices) {
    let mbti={R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    let score=[3,2,1,0,1,2,3];
    let answer='';
    for(let i=0;i<survey.length;i++){
        let x = survey[i].split('');
        if(choices[i]<4){
            mbti[x[0]]+=score[choices[i]-1];
        }else{
            mbti[x[1]]+=score[choices[i]-1];
        }
    }
    mbti.T>mbti.R?answer+='T':answer+='R';
    mbti.F>mbti.C?answer+='F':answer+='C';
    mbti.M>mbti.J?answer+='M':answer+='J';
    mbti.N>mbti.A?answer+='N':answer+='A';
    // 동점이면 사전순 빠른것이 나오게 유도
    return answer;
}