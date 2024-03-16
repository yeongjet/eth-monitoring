import Web3 from "web3"
const localhost = "http://192.168.50.252:7545"
const web3 = new Web3(localhost)
const address = '0x14a2A7B2929Cd3203e8cdeaa372aa1783c1E9061';
;(async () => {

    const accounts = await web3.eth.getAccounts()
    // web3.provider!.on('chainChanged', () => {
    //     // ...
    //   });
    console.log(accounts)
    ;(await web3.eth.sendTransaction({
        from: '0x14a2A7B2929Cd3203e8cdeaa372aa1783c1E9061',
        to: '0xaae55Cacb97207026baE3F78C2D9392936A15fD7',
        value: web3.utils.toWei('1', 'ether'),
        data: web3.utils.toHex(234)
    }));
    // ;(await web3.eth.subscribe('logs')).on('data', async() => {
    //     // 当有新的转账事件发生时，计算并打印新的余额
    //     const balance = await web3.eth.getBalance(address)
    //     console.log('New balance:', web3.utils.fromWei(balance, 'wei'));
    //   })
})()
