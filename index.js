
const web3  =  new Web3("https://rinkeby.infura.io/v3/950d6429607d40b1b7f4bb0ce49bbb65");

const Private_Key  =  document.getElementById('key').value;
const from_address  =  document.getElementById('address1').value;
const to_address  =  document.getElementById('address2').value;

async function eth_transaction(){
  var SignedTransaction = await web3.eth.accounts.signTransaction({
       to:  to_address,
       value: '1000000000',
       gas: 2000000
  },  Private_Key  );

  web3.eth.sendSignedTransaction(SignedTransaction.rawTransaction).then((receipt) => {
        console.log(receipt);
  });
}

