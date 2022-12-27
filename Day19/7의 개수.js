function solution(array) {
    var count =0;
    for(const x of array){
        newarray = String(x).split('')
        for(let i=0;i<newarray.length;i++){
            if(newarray[i]==='7'){
                count++;
            }
        }
    }return count;
}