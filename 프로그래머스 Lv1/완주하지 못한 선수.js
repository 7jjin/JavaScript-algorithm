function solution(participant, completion) {
    // let answer = participant.filter((item,index)=>{
    //     return completion.includes(item);
    // }); //participant에서 completion의 요소들이 있는것만 추출
    // let dap = answer.filter((item,index)=>{
    //     if(answer.indexOf(item)!==index){
    //         return item;
    //     }
    // });  // 위에서 추출한 요소들중에서 중복된 값이 있으면 추출
    // console.log(answer)
    // if(dap.length>0){   //중복된 값이 있으면 중복된 사람을 리턴
    //     return dap.join('')
    // }else{      //중복된 값이 없으면 particiant에서 completion값이 없는 것을 리턴
    //     return participant.filter((item,index)=>{
    //         return !completion.includes(item);
    //     }).join('');
    // }
    let parsort = participant.sort();
    let comsort = completion.sort();
    for(let i=0;i<participant.length;i++){
        if(parsort[i]!==comsort[i]){
            return parsort[i]
        }
    }
}