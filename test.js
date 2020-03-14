function Decrypt(num_casas, msg) {
    var result = "";
    for (let i = 0; i < msg.length; i++) {
        var numOldCharInAlpha = msg.charCodeAt(i);
        console.log('I am number ' + numOldCharInAlpha);
        if (numOldCharInAlpha > 122 || numOldCharInAlpha < 97) {
            console.log("So I don't matter");
            result += msg[i];
        } else {
            var numNewCharInAlpha = numOldCharInAlpha - num_casas;
            console.log('Decrementing, I become ' + numNewCharInAlpha);
            if (numNewCharInAlpha < 97) {
                console.log('But I am less than 97');
                var resto = 97 - numNewCharInAlpha;
                console.log('97 - Me = ' + resto);
                numNewCharInAlpha = 123 - resto;
                console.log('So, decrementing in 123, I become: ' + numNewCharInAlpha);
            }
            var newChar = String.fromCharCode(numNewCharInAlpha);
            console.log('In ASCII table, I am represented by "' + newChar + '"');
            console.log("-----------------");
            result += newChar;
        }
    }
    return result;
}

var decriptedMsg = Decrypt(9, "oxldb xw fqh rwbcnjm xo fqjc rw hxda lxmn fruu vjtn hxd j knccna mnenuxyna sxamr kxpprjwx");

console.log(decriptedMsg);