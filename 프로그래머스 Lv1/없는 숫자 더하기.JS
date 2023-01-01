function solution(numbers) {
    var count =0;
    for(let i=0;i<10;i++){      // 0~9까지 순환해서
        if(numbers.includes(i)===false){        // numbers에 해당 숫자가 없으면 더해준다
            count +=i;
        }
    }return count
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0