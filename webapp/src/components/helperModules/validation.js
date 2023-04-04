export function validatePw (pw){
    var lower = /(?=.*[a-z])/;
    var upper = /(?=.*[A-Z])/;
    var digit = /(?=.*[0-9])/;
    var special = /(?=.*[!@#$%^&*])/;
    if(pw.length < 6) return "Password must have at least 6 characters."
    else if(!pw.match(lower)) return "Password must have at least one lower case."
    else if(!pw.match(upper)) return "Password must have at least one upper case."
    else if(!pw.match(digit)) return "Password must have at least one digit."
    else if(!pw.match(special)) return "Password must have at least one special character."
    else return ""
}