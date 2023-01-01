function solution(num_list) {
    const array=[];
    var even =0;
    var odd =0;
    for(let i=0;i<num_list.length;i++){     
        if(num_list[i]%2==0){      
            even+=1;                          //짝수면 카운팅
        }else if(num_list[i]%2==1){
            odd+=1;                           //홀수면 카운팅
        }
        
    }
    array.push(even,odd);               // 빈배열에 각각의 추가
    return array;
}