function solution(s) {
    a = s.split(' ');
    var array=[];
    for(let i=0;i<a.length;i++){
        b=a[i];
        if(isNaN(b[0])===false){
            array.push(b.toString().toLowerCase());
        }else{
            c = b[0].toUpperCase();
            ans = c+b.toString().toLowerCase();
            console.log(ans);
            d=ans.replace(ans[1],'');
            array.push(d);
        }
    }
    return array.join(' ');
}
// function solution(s) {
//     var answer = '';
//    let result = s.split(' ');

//    let result2 = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
//     console.log(result)
//    answer = result2.join(" ")
//     return answer;
// }
