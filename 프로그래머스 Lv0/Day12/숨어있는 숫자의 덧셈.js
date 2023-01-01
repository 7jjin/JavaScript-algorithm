function solution(my_string) {
    a= Array.from(my_string);
    const array=[];
    for(let i=0;i<a.length;i++){
        if((isNaN(a[i])==false)){
            array.push(a[i]);
        }
    }return array.map(x=>parseInt(x)).reduce((a,b)=>a+b)
}