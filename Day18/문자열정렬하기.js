function solution(my_string) {
    newstr =  my_string.toLowerCase();
    var array = newstr.split('');
    return array.sort().join('')
}