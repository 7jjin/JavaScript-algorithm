function solution(M, N) {
    var array =[M,N];       
    array.sort((a,b)=>a-b);     // 각각을 배열에 넣고 오름차순으로 해준다.
    const a = array[0]-1;       // 작은 값의 -1을 해주고
    const b = (array[1]-1)*array[0];    // 큰값에 -1을 해주고 x작은값을 해준다.
    return a+b;
    
}