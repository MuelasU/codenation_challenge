# Criptografia de Júlio Cesar
## Desafio Codenation - Aceleração React - Campinas

Fonte: https://www.codenation.dev/aceleradev/react-campinas-1/challenge/dev-ps

### Objetivo
Decifrar um código encriptado que continha uma mensagem. O algoritimo desse processo consiste na substituição da letra do alfabeto avançado um determinado número de casas. Por exemplo, considerando o número de casas = **3**:

**Normal:** a ligeira raposa marrom saltou sobre o cachorro cansado

**Cifrado:** d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdg

Além disso, o desafio pede que se faça um resumo criptográfico do tipo **sha1**.

### Como é feito
O desafio também consiste em trabalhar com requisições HTTP:
* Para obter as informações que precisa para o desafio, é necessário fazer uma requisição GET para o endereço

`` https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN ``

Essa requisição retornará um um JSON da seguinte forma:

`` {
 "numero_casas": 10,
 "token":"token_do_usuario",
 "cifrado": "texto criptografado",
 "decifrado": "aqui vai o texto decifrado",
 "resumo_criptografico": "aqui vai o resumo"
} ``

Este JSON deverá ser salvo localmente em um arquivo **answer.json**, que será utilizado para escrever a resposta do desafio.

* Para enviar sua resposta, deverá ser feita uma requisição POST contendo o aqruivo para o endereço

``https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN``




