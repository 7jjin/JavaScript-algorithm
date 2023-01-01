function solution(array, height) {
    a= array.filter(el=>el>height);
    return a.length;
}