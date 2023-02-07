function solution(n, words) {
    let stack=[words[0]];
  for(let i=1;i<words.length;i++){
      let x = words[i];
      let y = words[i-1];
      if(y[y.length-1]===x[0]&&!stack.includes(x)){
          stack.push(x);
      }else{
          return [parseInt(i % n) + 1, parseInt(i / n) + 1];
      }
  }return [0,0]
}