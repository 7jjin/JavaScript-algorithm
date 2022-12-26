function solution(s) {
    let ans = [];
    let sArr = s.split("");
    console.log(sArr)
    sArr.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            ans.push(item);
        }
    })
    return ans.sort().join("");
}