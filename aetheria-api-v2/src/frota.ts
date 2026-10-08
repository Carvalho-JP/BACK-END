// Exercícios extras -> 1

enum TipoCombustivel{
    gasolina = "GASOLINA",
    alcool = "ALCOOL",
    diesel = "DIESEL",
    eletrico = "ELETRICO"
}

class Veiculo{
    protected marca: string
    protected modelo: string
    protected velocidadeAtual: number
    public combustivel: TipoCombustivel

    constructor(marca: string, modelo: string, combustivel:TipoCombustivel){
        this.marca = marca
        this.modelo = modelo
        this.combustivel = combustivel
        this.velocidadeAtual = 0
    }

    acelerar(){
        console.log("O veículo acelerou!")
    }
    frear(){
        if(this.velocidadeAtual < 0){
            this.velocidadeAtual = 0
            console.log(`O veículo freiou`)
        }
    }

}

class Carro extends Veiculo{
    public numeroDePortas: number

    constructor(marcaCarro: string, modeloCarro: string, combustivel: TipoCombustivel, portas: number){
        super(marcaCarro, modeloCarro, combustivel)
        this.numeroDePortas = portas 
    }

    acelerar(){
        this.velocidadeAtual = 20
        console.log(`O carro ${this.marca} ${this.modelo} acelerou suavimente para ${this.velocidadeAtual} Km/h!`)        
    }
}

class Moto extends Veiculo{
    public cilindradas: number

    constructor(marcaMoto: string, modeloMoto: string, combustivel: TipoCombustivel, cilindro: number){
        super(marcaMoto, modeloMoto, combustivel)
        this.cilindradas = cilindro
    }

    acelerar(){
        this.velocidadeAtual = 40
        console.log(`A moto ${this.marca} cortou giro e saltou para ${this.velocidadeAtual} Km/h!`)
    }
}

let carro = new Carro("Honda", "Civic", TipoCombustivel.gasolina, 4)
let moto = new Moto("Yahama", "MT-09", TipoCombustivel.gasolina, 900)

const garagem: Veiculo[] = []

garagem.push(carro, moto)   

garagem.forEach(veiculo=>{
    veiculo.acelerar()
})


