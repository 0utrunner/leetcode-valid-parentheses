/**
 * @param {string} s
 * @return {boolean}
 */
 exports.validp = function isValid(s) {
    s = s.split('')
    let valid = []
      for(let i = 0; i < s.length; i++){
        if(s[i] == ")"){
          if(valid.slice(-1) == "("){valid.pop()}
          else return false
        } else if(s[i] == "]"){
          if(valid.slice(-1) == "["){valid.pop()}
          else return false
        } else if(s[i] == "}"){
          if(valid.slice(-1) == "{"){valid.pop()}
          else return false
        } else
          valid.push(s[i])
      }
    return valid.length == 0 ? true : false
};