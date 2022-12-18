function solution(n) {
    var count =0;
    for(let i=0;i<=n;i++){
        if(i%2==0){
            count +=i
        }
    }return count;
}