function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}

// Date 함수의 성질을 알게되었다.