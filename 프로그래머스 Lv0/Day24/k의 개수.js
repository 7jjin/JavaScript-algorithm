function solution(i, j, k) {
    var count =0;
    for(let x = i;x<=j;x++){
        var a = String(x).split('');            // 숫자를 모두 문자열로 바꾼후 배열로 만듬
        for(let y=0;y<a.length;y++){            // 배여 요소 하나하나를 순환
            if(a[y].includes(String(k))){       // k가 있다면 count+1해준다.
                count++;
            }
        }
    }return count;
}