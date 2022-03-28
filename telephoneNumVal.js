
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

//verify parenthesis with the function x
//function to remove spacing and - and the parenthesis
// if the the first char is 1 then must be length 11 else 10
// first condition char in the string are numbers , parenthesis or -
// second condition verify the beginning 1 
// fourth condition verifyi spacing between numbers 

function telephoneCheck(str){
    var temp ;
    if(parenthesis(str)==false){
            return false ;
    }else{
        temp=str.replace(/[^0-9]/g, '');
        if(temp[0]=='1'){
            if(temp.length!=11){
                return false ;
            }else{
                

            }

        }else{
            if(temp.length!=10){
                return false;
            }else{

            }

        }
    }
}

telephoneCheck("555-555-5555");