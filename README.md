# Torne-se um desenvolvedor Bitcoin

## Resumo

Assim como a internet mudou a maneira de enviarmos correspondências pelo mundo utilizando apenas um simples e-mail, a tecnologia Blockchain usada pelo software Bitcoin está mudando também a maneira como transferimos dinheiro pela internet e hoje é necessário aprendermos como nos tornarmos nosso próprio banco com poucas linhas de código.

## Sobre o Ministrando

Anderson Juhasc começou a trabalhar profissional desde 2009 como Desenvolvedor Front-End onde também aprendeu inúmeros conceitos de Design para Web, pouco tempo depois foi se tornando cada vez mais um Desenvolvedor Full-Stack utilizando primeiramente da linguagem PHP, focando depois na linguagem Node.js e no mercado de Criptomoedas.

#### Redes sociais:

- [Github](https://github.com/Anderson-Juhasc)
- [Facebook](https://www.facebook.com/anderson.juhasc)

## O que é Bitcoin?

![Bitcoin](/img/bitcoin.png)

Bitcoin é uma criptomoeda e um projeto opensource, escrito em C++ e assim como o projeto Linux ou qualquer outro ele é aberto para desenvolvedores interessados que queiram se aventurar entendendo sua fonte ou mesmo propondo melhorias: 

- [Contribua via Github](https://github.com/bitcoin/bitcoin)

## O que é Blockchain?

![Blockchain](/img/tipos-de-redes.jpg)

O Blockchain(livro-razão) é um banco de dados distribuído onde transações são verificadas pelos nós da rede P2P para evitar gastos duplos antes de serem registrados no banco e redistribuidos para os nós de rede ativos.

#### Explorador de Blocos(API's):

É possível explorar os dados de transações passadas para verificar existência de bitcoin em uma carteira: 

- [chainFlyer](https://chainflyer.bitflyer.jp/)
- [chainFlyer Docs](https://chainflyer.bitflyer.jp/API/docs)

## Carteiras(Wallets)

![Carteiras](/img/paper-wallet.jpg)

Uma carteira de bitcoin é simplesmente 2 pedaços de texto, sendo uma chave publica e uma chave privada onde a chave publica é utilizada para verificar ou receber saldo e a chave privada é usada para enviar saldo e garantir quem é o dono dos bitcoins no endereço recebido.

- [Criptografia de chave pública](https://pt.wikipedia.org/wiki/Criptografia_de_chave_p%C3%BAblica)

#### Desktop:
- [Bitcoin Core](https://bitcoin.org/pt_BR/download)
- [Electrum](https://electrum.org/#home)

#### Smartphone:
- [Mycelium](https://mycelium.com/bitcoinwallet)
- [Bitcoin Wallet](https://play.google.com/store/apps/details?id=de.schildbach.wallet&hl=pt_BR)

#### Website:
- [Bitgo](https://www.bitgo.com/)
- [Blockchain Wallet](https://blockchain.info/pt/wallet)

#### Hardware:
- [Trezor](https://trezor.io/)
- [Ledger Wallet](https://www.ledger.com/)

#### Papel:
- [bitcoinpaperwallet.com](https://bitcoinpaperwallet.com/)
- [bitaddress.org](https://www.bitaddress.org/)

## Rede de testes(Testnet3)

A rede Testnet3 é uma rede alternativa para desenvolvedores realizarem testes antes de colocarem uma aplicação em produção, segue algumas carteiras:

#### Desktop:
- [Bitcoin Core](https://bitcoin.org/pt_BR/download)
- [Electrum](https://electrum.org/#home)

#### Smartphone:
- [Coinomi](https://play.google.com/store/apps/details?id=com.coinomi.wallet)
- [Mycelium](https://play.google.com/store/apps/details?id=com.mycelium.testnetwallet)
- [Bitcoin Wallet](https://play.google.com/store/apps/details?id=de.schildbach.wallet_test)

## Construindo uma carteira Bitcoin com HTML e Javascript

Construir uma carteira Bitcoin é muito simples e estarei mostrando como faze-lo com poucas linhas de Javascript e HTML, o código-fonte do exemplo pode ser encontrado neste mesmo repositório denominados [index.html](https://github.com/Anderson-Juhasc/torne-se-desenvolvedor-bitcoin/blob/master/index.html) e [main.js](https://github.com/Anderson-Juhasc/torne-se-desenvolvedor-bitcoin/blob/master/main.js).

#### Compilação:

```
npm install -g browserify
```

```
npm install
```

```
browserify main.js > bundle.js
```

#### Bibliotecas utilizadas:

- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib)
- [Browserify](http://browserify.org/)
