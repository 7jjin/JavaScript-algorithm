function solution(n) {
    const answer = n.toString(2).split("1").length;
      console.log(answer)
    while (true) {
      n++;
      if (n.toString(2).split("1").length === answer) return n;
    }
  }