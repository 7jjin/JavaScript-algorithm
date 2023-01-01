function solution(before, after) {
    var array = Array.of(...before);
    for(let i=0;i<array.length;i++){
        if(after.includes(array[i])){       //after에 array[i]가 있으면 실행
            after = after.replace(array[i],'');     // 해당 문자가 있으면 빈칸으로 바꾸기
        }
    }
    return  after==""?1:0;  //빈칸이 되면 1 아니면 0 리턴
}