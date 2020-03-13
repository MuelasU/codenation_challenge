function Decrypt(num_casas, msg) {
    var result = "";
    for (let i = 0; i < msg.length; i++) {
        var numOldCharInAlpha = msg.charCodeAt(i);
        console.log('I am number ' + numOldCharInAlpha);
        if (numOldCharInAlpha > 122 || numOldCharInAlpha < 97) {
            console.log("So I don't matter");
            result += msg[i];
        } else {
            var numNewCharInAlpha = numOldCharInAlpha + num_casas;
            console.log('Incrementing, I become ' + numNewCharInAlpha);
            if (numNewCharInAlpha > 122) {
                console.log('But I am more than 122');
                var resto = numNewCharInAlpha - 122;
                console.log('Me - 122 = ' + resto);
                numNewCharInAlpha = 96 + resto;
                console.log('So, incrementing in 96, I become: ' + numNewCharInAlpha);
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