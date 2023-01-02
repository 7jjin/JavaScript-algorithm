function solution(arr1, arr2) {
    const array=[];
    arr1.map((item,index)=>{
        let newarray=[];        // 빈배열을 만든다.
        for(let i=0;i<item.length;i++){     //행렬의 내부 요소의 길이만큼 반복
            newarray.push(arr1[index][i]+arr2[index][i]);   
        }array.push(newarray);
    });
    return array;
}

/// 참고할만 한 풀이
// function solution(A, B) {
    
//     return A.map((a, i) => a.map((b, j) => b + B[i][j]));
// }
// map 함수를 두번써서 돌리는 개념이 잘 잡히지 않았는데 이문제를 보고 두번을 한번에 돌릴 수있다
// 라는 것을 알았다.