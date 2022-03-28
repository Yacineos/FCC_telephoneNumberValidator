
function parenthesis(S) {
  var arr = [];
  if (S[0] == ")") return false;
  for (var i = 0; i < S.length; i++) {
    if (S[i] == "(") {
      arr.push(S[i]);
    } else if (S[i] == ")") {
      arr.pop() == ")";
    }
  }
  if (arr.length == 0) {
    return true;
  } else {
    return false;
  }
}

