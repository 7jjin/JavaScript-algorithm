function solution(emergency) {
    let a = emergency.slice().sort((a,b)=>b-a);     //얕은 복사를 한 후 내림차순으로 배열
    return emergency.map(x=>a.indexOf(x)+1);        //해당 인덱스 번호를 원래 배열에 적용
}
// 이 문제는 지금까지 내가 본 문제중에서 가장 놀라웠다.