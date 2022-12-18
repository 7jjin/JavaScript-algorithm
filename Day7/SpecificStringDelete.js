function solution(my_string, letter) {
    var a= my_string.split('');     // 문자열을 배열로 만든다.
    for(let i=0;i<a.length;i++){    
        if(a[i].charCodeAt()===letter.charCodeAt()){        // i번째 있는 배열을 아스키코드로 바꾼 후 letter의 아스키코드랑 비교한다.
            a.splice(i,1);      //만약 같다면 해당 배열을 지우고 배열의 길이를 줄인다.
            i--;
        }
    }
    return String(a.join(''));  // 문자열로 바꾸고 각 문자열을 연결시켜준다.
}