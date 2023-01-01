function solution(s) {
    a = s.split(' ');
    for(let i=0;i<a.length;i++){
        if(isNaN(a[i])===true){     //문자가 나오면 해당 배열과 이전배열 삭제
            a.splice(i-1,2);
            i--;
        }
        
    }        
    b = a.map(x=>parseInt(x));      //배열의 요소들을 숫자형으로 변환
    if(b.length==0){                // 만약 빈배열이면 0을 리턴
        return 0
    }
    const c = b.reduce((x,y)=>x+y);     //아니면 배열 요소들 합 리턴
    return c
}