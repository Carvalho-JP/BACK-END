//Questão 1

// 1 - npm init -y
// 2 - npm install typescript tsx @types/node --save-dev
// 3 - npx tsc --init

//Questão 2

const nomeMonstro: string = "Cavaleiro das sombras"
let hpMonstro: number = 500
const isBoss: boolean = true

//Questão 3

hpMonstro = 600
if(hpMonstro > 500){
    console.log(`O monstro ${nomeMonstro} ultrapassou o limite de HP e voltou para 500!`)
    hpMonstro = 500
} else{
    console.log(`O monstro ${nomeMonstro} recuperou sua vida e está com ${hpMonstro} de HP!`)
}

//Questão 4

for(let i:number = 0; i < 5; i++){
    console.log(`Machadada ${i + 1}! Você encontrou +1 de Madeira.`)
}

//Questão 5

const calcularResistencia = (armaduraBase: number, bonusDeNivel:number): number => {
    return armaduraBase + bonusDeNivel
}

let resistencia: number = calcularResistencia(30, 15)

console.log(`Resistência da armadura: ${resistencia}`)