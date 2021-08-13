import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente('Rafael', 95332898867)
const cliente2 = new Cliente('Jonas', 123333898867)


const contaCorrenteRafael = new ContaCorrente(cliente1, 1001)
contaCorrenteRafael.depositar(500)

const conta2 = new ContaCorrente(cliente2, 102)

let valor = 200
contaCorrenteRafael.transferir(valor, conta2)

console.log(contaCorrenteRafael)

