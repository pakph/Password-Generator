var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"];
var passwordArrays = [];
var password = "";      

var passwordLength = prompt ("How long would you like your password to be?");

var includeNum = confirm ("Would you like to include numbers?");
        if (includeNum == true){
                passwordArrays = num.concat(passwordArrays);
        }

var includeUpperCase = confirm ("Would you like to include upper case letters?");
        if (includeUpperCase == true) {
                passwordArrays = upperCase.concat(passwordArrays);
        }
var includeLowerCase = confirm ("Would you like to include lower case letters?");
        if (includeLowerCase == true) {
                passwordArrays = lowerCase.concat(passwordArrays);
        }
var includeSymbols = confirm ("Would you like to include symbols?")
        if (includeSymbols == true) {
                passwordArrays = symbols.concat(passwordArrays);
        }

function generatePassword () {
        for (i = 0; i < passwordLength; i++) {
                var n = Math.floor(Math.random() * passwordArrays.length);
                password = passwordArrays[n] + password;
        }
}

 generatePassword();
 alert ("Your new password is: " + password);



