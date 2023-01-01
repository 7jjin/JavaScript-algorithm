function solution(my_str, n) {
    var array =[];
    var num = Math.ceil(my_str.length/n);
    for(let i=0;i<num;i++){
        array.push(my_str.slice(0,n));
        my_str = my_str.replace(my_str.slice(0,n),'');
    }
   return array;
}