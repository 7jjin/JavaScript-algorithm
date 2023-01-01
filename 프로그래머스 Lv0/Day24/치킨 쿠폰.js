function solution(chicken) {
    let ch = chicken;
    let answer =0;
     while(ch>9){
         answer +=Math.floor(ch/10);
         ch = Math.floor((ch/10)+(ch%10));
     }
    return answer;
}