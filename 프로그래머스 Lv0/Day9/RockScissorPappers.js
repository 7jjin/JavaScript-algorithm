function solution(rsp) {
    var a = rsp.split('');
    var array=[];
    for(let i=0;i<a.length;i++){
        if(a[i]==2){
            array.push(0);
        }else if(a[i]==0){
            array.push(5);
        }else{
            array.push(2);
        }
    }
    return array.join('').toString();
    
}