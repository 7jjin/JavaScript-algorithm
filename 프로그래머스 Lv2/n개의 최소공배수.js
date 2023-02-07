function sol(a,b){
    let su = 1;
    for(let i=2; i<=Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            su = i;
        }
    }
    return su;
}
// 최대 공약수를 구하는 함수

function solution(arr) {
    let hap = arr[0];
    for(let i=1;i<arr.length;i++){
        hap = (hap*arr[i])/sol(hap,arr[i]);
    }
    return hap;
}
// 최소공배수 = 두수의 곱/두수의 최대공약수를 이용한 풀이