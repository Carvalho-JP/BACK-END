enum TipoConta {
    corrente = "CORRENTE",
    poupanca = "POUPANÇA",
    salario = "SALARIO"
}

class ContaBancaria {
    public titular: string
    protected saldo: number
    public tipo: TipoConta

    constructor(titular: string, tipo: TipoConta){
        this.titular = titular
        this.saldo = 0
        this.tipo = tipo
    }

    sacar(valor:number){
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Saldo de valor ${valor} realizado com sucesso!`)
        } else{
            console.log("Saldo insuficiente!")
        }
    }

    depositar(valor:number){
        if(this.saldo >= 0){
            this.saldo += valor
            console.log(`O valor de R$${valor} foi depositado com sucesso!`)
        } else{
            console.log("Valor inválido!")
        }
    }

    getSaldo():number{
        return this.saldo
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular: string){
        super(titular, TipoConta.poupanca)
    }

    renderJuros(){
        this.saldo *= 1.01
        console.log(`Os juros renderam! Novo saldo: R$${this.saldo}`)
    }
}

class ContaCorrente extends ContaBancaria{
    public limiteChequeEspecial: number

    constructor(titular:string){
        super(titular, TipoConta.corrente)
        this.limiteChequeEspecial = 500
    }

    sacar(valor: number){
        const limiteDisponivel = this.limiteChequeEspecial + this.saldo
        if(valor <= limiteDisponivel){
            this.saldo -= valor
            console.log(`Saque de R$${valor} realizado com sucesso!`)
        } else {
            console.log("Limite excedido!")
        }
        
    }

}

const contaJoao = new ContaPoupanca ("João")
contaJoao.depositar(1000)
contaJoao.renderJuros()

console.log(`Saldo: R$${contaJoao.getSaldo()}`)

const contaMaria = new ContaCorrente("Maria")
contaMaria.sacar(300)

const contas: ContaBancaria[] = [contaJoao, contaMaria]

contas.forEach(conta => {
    console.log(`Titular: ${[conta.titular]} | Tipo: ${[conta.tipo]} | Saldo: R$${conta.getSaldo()}`)
})