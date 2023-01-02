require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind huge hockey clinic flush skull'; 
let testAccounts = [
"0x90ec9508c698e67fb42c93b44f649c6b54242b1f482a2c475d9fe997ade3c32e",
"0x4ee1d62eb271b3a2de7fc83a6d721875b26c74cbd38bae2171ad879b955024e6",
"0x29fd810f19f102c790e98101242ee9b56cb90da843f3ab81f7c6e7a169468533",
"0xb5fde06da1e5759381a3ab4c79a7a48bde3c6e045ebdb84c94ee0fc22edf3285",
"0x91dc39fab1808a089c07f0a2ce8f2fe958dbeeca75a928e234800cae7daba9fe",
"0x3a9e2b3b272b2a7d6958c8a4c674d1db938c9b02955a70550e69cfc5b8f37fd0",
"0x9ea4c69c7efcb1e19403ed67612f2a7202aa85bd8f04c1effdc751b08d5d5bea",
"0x9eec9c3a4d456a62f5bd3f713517806bc8edea35d8c5eeb4b4e7d5394c61371a",
"0xbe492f3f5c8ebe79198af7860f469dfa9fe46533c0f9d6940127c569bb58906a",
"0xbd9d74a40addac2e48e555668d48a5e3238e9ab64cc8f780bbf558c80b2c7a47"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


