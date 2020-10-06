module.exports = function check(str, bracketsConfig) {
    let arrLeft = [];
    let arrRight = [];
    str = str.split(``);
    for (let i = 0; i < bracketsConfig.length; i++) {
      arrLeft.push(bracketsConfig[i][0]);
      arrRight.push(bracketsConfig[i][1]);
    }
    for (let x = 0; x < str.length; x++) {
      for (let y = 0; y < arrLeft.length; y++) {
        if(str[x] === arrLeft[y] && str[x + 1] === arrRight[y]){
          str.splice(x, 2);
          x = -1;
        }
      }
    }
    return str.length === 0;
  }
