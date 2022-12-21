function solution(my_string) {
    var array=[];   
    a = Array.from(my_string);      //문자열의 문자 하나하나를 배열에 저장
    for(let i=0;i<a.length;i++){    
        if(isNaN(a[i])===false){    //i번째 배열이 숫자면
            array.push(a[i]);       //array배열에 추가
            
        }
    }
    return array.sort((a,b)=>a-b).map(x=>parseInt(x))   // 내림차순으로 정렬한 뒤 요소 각각의 정수로 변환
}