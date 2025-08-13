const prompt = require("prompt-sync")();

let contas = []
let logado = false

function menu() {
    console.clear()
    console.log("o que deseja fazer?\n")
    console.log("(1) sacar\n")
    console.log("(2) depositar\n")
    let res = prompt("")
    if (res == "1") {
        contas[0].sacar()
    }
    if (res == "2") {
        contas[0].depositar()
    }
}

function inicial() {

    for (let i = 2; i < 3; i++) {
        console.log("\nregistrar\n")
        let titular = prompt("digite o titular: ")
        let numConta = prompt("digite o numero bancario: ")
        let saldo = parseFloat(prompt("digite o saldo inicial: "))

        let conta = {
            titular: titular,
            numConta: numConta,
            saldo: saldo,

            sacar: function () {
                let saque = parseFloat(prompt("quanto deseja sacar?"))
                if(saque>saldo){
                    console.log("saldo insuficiente")
                    prompt("")
                    menu()
                }
                this.saldo = this.saldo - saque
                console.log(this.saldo)
                prompt("")
                menu()
            },

            depositar: function () {
                let deposito = parseFloat(prompt("quanto deseja depositar??"))
                this.saldo = this.saldo + deposito
                console.log(this.saldo)
                prompt("")
                menu()
            }
        }
        contas.push(conta)
    }
    console.log("\nLogin\n")
    let tit = prompt("digite o titular: ")
    let indice = -1
    for (let i = 0; i < contas.length; i++) {
        if (contas[i].titular == tit) {
            indice = i
            break;
        }
    }

    let conta = prompt("digite o numero da conta: ")
    if (contas[indice].numConta == conta) {
        menu()
    }
}
inicial()