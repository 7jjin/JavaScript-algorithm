function solution(array) {
    var newarray=[];
    newarray.push(Math.max(...array));
    newarray.push(array.indexOf(Math.max(...array)));
    return newarray;
}