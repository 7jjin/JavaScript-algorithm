function solution(n) {
    var array = [];
    for(let i=0;i<=n;i++){
        if(i%2==1){
            array.push(i);      //홀수인 수만 배열에 추가
        }
    }
    return array;
}