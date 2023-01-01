function solution(age) {
    a = String(age).split('');      // 문자열로 만든 후 배열로 생성
    for(let i=0;i<a.length;i++){    
        a[i] = String.fromCharCode(97+parseInt(a[i]));  // 각각의 배열을 다시 숫자로 한 후 +97을 해서 아스키코드로
                                                        // 변환해준다. 그것을 다시 문자로 변경
    }
    return a.join('');  // 배열을 이어준다.
}