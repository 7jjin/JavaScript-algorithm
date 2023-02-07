function solution(s) {
    a = s.split(' ');
    b = Math.min(...a);
    c = Math.max(...a);
    d = [b,c];
    return  d.join(' ');
}