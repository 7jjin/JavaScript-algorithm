function solution(id_pw, db) {
    let result = '';
    
    db.map((item) => {if(id_pw[0] === item[0] && id_pw[1] === item[1]) result = "login"
      else if(id_pw[0] === item[0] && id_pw[1] !== item[1]) result =  "wrong pw"
      else if(id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = "fail"})
      // 각각의 배열을 순환하면서 그 배열안에있는 배열의 값과 id_pw의 값과 비교
    return result
  }