function solution(absolutes, signs) {
    return absolutes.map((item,index)=>{    // map을 이용해서 signs의 배열을 차례대로 순환하여 true면 그대로 반환하고 false면 -를 붙혀서 리턴한다.
        if(signs[index]===true){
            return item
        }else{
            return -item
        }
    }).reduce((a,b)=>a+b)   // 마지막에는 모든 값을 더한다.
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.19ms, 33.4MB)
// 테스트 3 〉	통과 (0.19ms, 33.4MB)
// 테스트 4 〉	통과 (0.19ms, 33.6MB)
// 테스트 5 〉	통과 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.18ms, 33.5MB)
// 테스트 7 〉	통과 (0.20ms, 33.5MB)
// 테스트 8 〉	통과 (0.19ms, 33.4MB)
// 테스트 9 〉	통과 (0.29ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0