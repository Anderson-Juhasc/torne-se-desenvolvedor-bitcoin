const bitcoin = require('bitcoinjs-lib')
    , TESTNET = bitcoin.networks.testnet
    , keyPair = bitcoin.ECPair.makeRandom( { network: TESTNET } )
    , segwitP2SH = bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: TESTNET })
      })

var prv = document.getElementById('privateKey')
prv.textContent = keyPair.toWIF()

var prvImg = document.getElementById('privateKeyImg')
prvImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + keyPair.toWIF()

var pub = document.getElementById('publicKey')
pub.textContent = segwitP2SH.address

var pubImg = document.getElementById('publicKeyImg')
pubImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + segwitP2SH.address

var explorer = document.getElementById('explorer')
explorer.href = 'https://live.blockcypher.com/btc-testnet/' + segwitP2SH.address
