function solution(arr)
{
    return arr.filter((item,index)=>{           // 기준 요소와 그 다음 요소가 다르면 추출
        return arr[index] !== arr[index+1]
    });
    
}