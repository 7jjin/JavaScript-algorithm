function solution(n) {
    let array=[0,1,2];
    for(let i=3;i<=n;i++){
        array[i]=(array[i-2]+array[i-1])%1234567;
    }return array[n]
}
//피보나치 수열