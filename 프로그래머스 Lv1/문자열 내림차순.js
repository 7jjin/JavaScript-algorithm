function solution(s) {
    const array_a =[];
    const array_b =[];
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i)<96){     //대문자는 array_b에 push
            array_b.push(s[i])
        }else{                      //소문자는 array_a에 push
            array_a.push(s[i])
        }
    }
    return array_a.sort().reverse().join('').concat(array_b.sort().reverse().join(''))
        // 각각을 내림차순으로 정렬한후 뒤집고 문자열로 바꾼후 합친다.
    
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.20ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.38ms, 33.5MB)
// 테스트 6 〉	통과 (0.20ms, 33.6MB)
// 테스트 7 〉	통과 (0.23ms, 33.4MB)
// 테스트 8 〉	통과 (0.16ms, 33.4MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉	통과 (0.18ms, 33.5MB)
// 테스트 11 〉	통과 (0.15ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.5MB)
// 테스트 13 〉	통과 (0.16ms, 33.4MB)
// 테스트 14 〉	통과 (0.14ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.05ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0