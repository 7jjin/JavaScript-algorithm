function solution(my_string) {
    a = Array.from(my_string);  // 문자열 하나하나를 배열로 만듬
    for(let i=0;i<a.length;i++){
        if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){  //막약 모음이면 해당 배열요소를 제거하고 배열의 길이를 줄인다.
            a.splice(i,1);
            i--;
        }
    }return a.join('');
}