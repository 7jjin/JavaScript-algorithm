function solution(num, k) {
    var array = String(num);        //문자열로 바꾼다
    if(array.includes(k)){          //해당 숫자가 있으면 true 아니면 false
        return array.search(k)+1;   // 해당 자리의 인덱스를 찾아낸다. 만약 중복된다면 제일 첫번째 인덱스를 리턴함.
    }else return -1;
}