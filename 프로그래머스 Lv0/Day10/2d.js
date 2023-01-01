function solution(num_list, n) {
    var outarray=[];    // 빈배열 생성
    const c =n;         // 정수 n값 고정
    for(let i=0;i<num_list.length;){    // 정수 배열 만큼 반복
        a = num_list.slice(i,n);    // 배열을 자른후 
        outarray.push(a);           // 빈배열에 넣기
        i = n;                      //핵심 문법
        n += c;                     //핵심 문법
    }
    console.log(outarray)
    return outarray;
}
///// 지금까지 풀면서 가장 시간이 오래걸린 문제