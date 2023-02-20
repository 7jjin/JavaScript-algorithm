function solution(arr1, arr2) {
    let array =[];
    for(let i=0;i<arr1.length;i++){
        let array2=[]
        for(let j=0;j<arr2[0].length;j++){
            let answer=0;
            for(let k=0;k<arr2.length;k++){
                answer += arr1[i][k]*arr2[k][j];
            }
            array2.push(answer);
        }
        array.push(array2);
    }
    return array;
}