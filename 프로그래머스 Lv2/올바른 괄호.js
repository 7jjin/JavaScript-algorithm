function solution(s){
    let count =0;
    for(let i=0;i<s.length;i++){
            count += s[i]==='('?1:-1;
            if(count<0) return false;
    }
    return count===0?true:false;
    
    
}
