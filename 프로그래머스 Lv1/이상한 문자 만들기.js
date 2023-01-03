function solution(s) {
    return s.split('').map((item,index)=>{
        if(index%2===0){
            return item.toUpperCase();
        }else{
            return item.toLowerCase();
        }
    }).join('');
}