console.log("Aetheria Engine API Iniciada com Sucesso!")

const maxPlayers: number = 100

let playerHp: number = 100
const isAlive: boolean = true
let acaoSelecionada: number = 2

console.log(`Número máximo de players: ${maxPlayers}`)
console.log(`HP: ${playerHp}`)
console.log(`Personagem vivo: ${isAlive}`)
console.log(`Ação selecionada: ${acaoSelecionada}`)

if (acaoSelecionada == 1){
    console.log("Ação: Atacar!")
}
else if (acaoSelecionada == 2){
    console.log("Ação: Defender!")
}
else {
    console.log("Ação inválida")
}

switch (acaoSelecionada){
    case 1:
        console.log("Ação: Atacar!")
        break
    case 2:
        console.log("Ação: Defender!")
        break
    default:
        console.log("Ação inválida./")
}

let hpChefe: number = 150

console.log("Batalha contra o chefe iniciada!")

while (hpChefe >= 0){
    console.log("Cacetando o Boss!")
    hpChefe -= 25
}

console.log(`HP Chefe: ${hpChefe}. Oponente aniquilado. A batalha está concluida.`)

playerHp = 10
let recHp: number = 5

console.log("Recuperando HP")

for (let i: number = 0; i < recHp; i++){
    playerHp += 10
    console.log(`HP Player: ${playerHp}`)
}

( () =>{
    let chaveServidor = "XYZ-999"
    console.log("Servidor Inicializado com Segurança!")
})

const calcularDano = (forca: number, multiplicadoCritico: number): number =>{
    return forca * multiplicadoCritico
}


const aplicarDano = (hpAtual: number, danoCalculado: number, onMorte: Function): void => {
    if(danoCalculado >= hpAtual){
        onMorte()
    }else {
        const hpRestante = hpAtual - danoCalculado
        console.log(`Você sobreviveu com ${hpRestante} HP!`)
    }
}

console.log("O monstro atacou!")
const meuDanoCritico = calcularDano(35, 2)

aplicarDano(100, meuDanoCritico,() =>{
    console.log(`Você recebeu dano letal. Faleceu dolorosamente.`)
})



