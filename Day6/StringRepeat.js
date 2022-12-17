function solution(my_string, n) {
    a = my_string.split('');    // 배열로 만든다.
    var array=[];
    for(let i=0;i<a.length;i++){       
        array[i]= a[i].repeat(n);   //배열의 각 자리를 n만큼 반복한 후 새로운 배열에 넣는다.
    }
   return array.join('');       //만들어진 배열을 연결한다.
}