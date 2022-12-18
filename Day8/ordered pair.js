function solution(n) {
    var count = 0;
    for(let i=0;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }return count;
}
// 순서쌍을 구하는 문제지만 n의 약수를 구하면 되는 문제였음.