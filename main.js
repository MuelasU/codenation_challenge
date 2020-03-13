//-------------Requires-------------
const request = require('request');
const fs = require('fs');
const sha1 = require('js-sha1');
const FormData = require('form-data');
require('dotenv').config();

//-------------Request options-------------
const getReqOptions = {
    uri: 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data',
    method: "GET",
    qs: {
        token: process.env.CN_TOKEN
    },
    json: true
}
const postReqOptions = {
    uri: 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution',
    method: "POST",
    qs: {
        token: process.env.CN_TOKEN
    },
    json: true,
}

//-------------Functions-------------
function Decrypt(num_casas, msg) {
    var result = "";
    for (let i = 0; i < msg.length; i++) {
        var numOldCharInAlpha = msg.charCodeAt(i);
        if (numOldCharInAlpha > 122 || numOldCharInAlpha < 97) {
            result += msg[i];
        } else {
            var numNewCharInAlpha = numOldCharInAlpha + num_casas;
            if (numNewCharInAlpha > 122) {
                var resto = numNewCharInAlpha - 122;
                numNewCharInAlpha = 96 + resto;
            }
            var newChar = String.fromCharCode(numNewCharInAlpha);
            result += newChar;
        }
    }
    return result;
}

//-------------Work-------------
request(getReqOptions, (err, res, body) => {
    //Handle error
    if (err) { return console.log('Get error: ' + err); }

    //Write the file from the API
    console.log('I am the body before changes: ' + JSON.stringify(body) + "\n");
    fs.writeFile('answer.json', JSON.stringify(body), (err) => {
        if (err) { return console.error(err); }
        console.log('File has been created\n');

        //Make changes to the file
        var decriptedMsg = Decrypt(body.numero_casas, body.cifrado)
        var resumo = sha1(decriptedMsg);
        body.decifrado = decriptedMsg;
        body.resumo_criptografico = resumo;
        console.log('I am the body after changes: ' + JSON.stringify(body) + "\n");
        fs.writeFile('answer.json', JSON.stringify(body), (err) => {
            if (err) { return console.error(err); }
            console.log('File has been updated\n');

            //Create a form to post
            var form = {
                    answer: {
                        value: fs.createReadStream(__dirname + '/answer.json'),
                        options: {
                            contentType: 'multipart/form-data'
                        }
                    }
                }
                // var form = new FormData();
                // form.append('answer', fs.createReadStream(__dirname + '/answer.json'));
            postReqOptions.formData = form;

            //Post the file to the API
            var r = request(postReqOptions, (err, res, body) => {
                if (err) { return console.log('Post error: ' + err); }
                console.log('Update successful! Server said: ' + JSON.stringify(body) + "\n");
            });
        });
    });
})