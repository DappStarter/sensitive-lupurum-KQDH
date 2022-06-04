require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pulse install lonely frame tumble'; 
let testAccounts = [
"0xb1100d629341474d3fb0cad8c84481da1879ab83a9adc2400cd67a950e76e668",
"0x38b137cce525f61b2c058068d17b6892beef035adf44cb017d3424970553b6b9",
"0x984f4d0e7860ff0c16a84a9d8e08f9c449fed8836ebdd8acd5ad6b47fb5ccf40",
"0x4c098eecf5999eafdaa7ce670953c8d762ffd3e0ba6900d9c71c1efb4470e0e4",
"0x678aa1bff4925fe75ac67f733fcdf065e150f45f9a19def8cfba6b0812d36170",
"0xf45ac7b956738d4e3d06f061f54cac04398cecc26e24455fefa7bc7817413ece",
"0x9895ea6b26fc5dbf1965b15fa86785463fa6c7d1f670ebb87a556db6710e8be4",
"0x1ba44a4938efa5c616fdd0eaec36c0a78497cc5b2561e970df7565464167feaf",
"0x2527471fb9edacb91dbc2e7d36b8f444db934cffad96bc1f272d81d5c4b438d2",
"0x08752145766c745e296849d8d6c832c51c0d6a35c01d1ae090915c30acc4ff25"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

