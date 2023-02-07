function solution(n) {
    let pi=[0,1];
    for(let i=2;i<=n;i++){
        pi.push((pi[i-1]+pi[i-2])%1234567);
    
    }
    return pi[n]
}