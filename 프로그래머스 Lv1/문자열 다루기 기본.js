function solution(s) {

    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c)) // 모든 요소가 number이면 true리턴
    } else {
        return false;
    }
}
// 숫자에 e가 붙으면 지수로 판단되어 문자인 경우도 숫자로 판단된다는 것을 깨달았다. 
// 그래서 모든 요소가 number인 경우로 판별