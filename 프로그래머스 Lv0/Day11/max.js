function solution(numbers) {
    a= numbers.sort((a,b)=>{    //오름차순으로 배열한 후
        return a-b
    });
    max1 = a.pop();     // 가장 큰수
    max2 = a.pop();     // 두번째로 큰수
    return max1 *max2;
}