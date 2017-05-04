var exports = module.exports = {};

function PasswordMessage(m){
    this.name = "Password Message";
    this.message = m;
}
function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
        if(unicode <= max && unicode >= min){
            return true;
        }
        else{
            return false;
        }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
    let hasUpper = false;
    try{
        for(let i = 0; i < str.length; i++){
            if(str[i] >= 65 && str[i] <= 90){
                hasUpper = true;
                throw new PasswordMessage("Has an uppercase character");
            }
        }
        throw new PasswordMessage("Does not have an uppercase character");
    }
    catch (e){
        console.log(e.name+""+e.message);
        return hasUpper;
}


exports.containsLower =function(str){
    let hasLower = false;
    try{
        for(i = 0; i <str.length; i++){
            if(str[i] >= 97 && str[i] <= 122){
                hasLower = true;
                throw new PasswordMessage("Has a lowercase character");
            }
        }
        throw new PasswordMessage("Does not have a lowercase character");
    }
    catch (e){
        console.log(e.name+""e.message);
        return hasLower;
    }
}


exports.containsNumerical =function(str){
    let hasNumerical = false;
    try{
        for(i = 0; i < str.length; i++){
            if(str[i] >= 48 && str[i] <= 57){
                hasNumerical = true;
                throw new PasswordMessage("Has a numerical character");
            }
        }
        throw new PasswordMessage("Does not have a numerical character");
    }
    catch (e){
        console.log(e.name+""+e.message);
        return hasNumerical
    }
}
exports.containsSpecial =function(str){
    let hasSpecial = false;
    let arraySpecial = [33,64,35,36,37,94,38,42];
    try{
        for(i = 0; i < str.length; i++){
            if(str[i] = arraySpecial[i]){
                return hasSpecial = true;
                throw new PasswordMessage("Has a special character");
            }
        }
        throw new PasswordMessage("Does not have a special character");
    }
    catch (e){
        console.log(e.name+""+e.message);
        return hasSpecial
}
