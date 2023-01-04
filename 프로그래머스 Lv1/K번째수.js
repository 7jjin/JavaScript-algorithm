function solution(array, commands) {
    let newarray=[];
    for(let i=0;i<commands.length;i++){
        newarray.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b));
    }
    return newarray.map((item,index)=>{
            return newarray[index][commands[index][2]-1]
        })
}