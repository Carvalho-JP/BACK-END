// Exercício 1
let nome_player: string = "Reaper_Tortoise"
let idade: number = 27
const classe: string = "Necromante"
let isPremiun: boolean = true
console.log(`--- Resumo do jogador --- \n Nome jogador: ${nome_player} \n Idade: ${idade} \n Guilda: ${classe} \n É Premiun: ${isPremiun}` )

// Exercício 2
let forca: number = 57
const multiplicador: number = 2.5
let danoTotal: number = forca * multiplicador
console.log(`Dano total: ${danoTotal}`)

//Exercício 3
let nivelJogador: number = 34
if (nivelJogador >= 15){
    console.log("Pode entrar na Masmorra")
}
else{
    console.log("Você é muito fraco, volte depois")
}

// Exercício 4
let numeroSorte: number = 7
if (numeroSorte <= 10){
    console.log("Item lendário!")
}
else if(numeroSorte <= 50){
    console.log("Item raro!")
}
else{
    console.log("Item comum!")
}

// Exercício 5
console.log("Habilidades do personagem")
switch (classe){
    case "Mago":
        console.log("-> Disparos de simples magias")
        break
    case "Guerreiro":
        console.log("-> Golpe com o punho")
        break
    case "Necromante":
        console.log("-> Disparo de energia espiritual - Gera maldições de debuff")
        break
    case "Arqueiro":
        console.log("-> Disparo de flecha")
        break
    default:
        console.log("Classe inválida")
}

// Exercício 6
let opcao: number = 2
console.log("Menu do ferreiro")
switch (opcao){
    case 1:
        console.log("Comprar espada")
        break
    case 2:
        console.log("Comprar escudo")
        break
    case 3:
        console.log("Sair")
        break
}

//Exercício 7
let hpAtual:number = 16
let mana: number = 22
if(hpAtual <= 0){
    console.log("Você está morto")
}
else if(mana < 10){
    console.log("Falta de mana")
}
else{
    console.log("Cura realizada com sucesso!")
}

//Exercício 8
for(let i: number = 0; i < 10; i++ ){
    console.log(`Golpe ${i+1} desferido!`)
}

// Exercício 9
let total: number = 0
for(let i: number = 0; i < 5; i++){
    console.log("Goblin derrotado! -> + 15 XP")
    total += 15
    console.log(`Total de XP: ${total}`)
}

// Exercício 10
for(let i: number = 0; i < 11; i++){
    if(i == 5){
        continue
    }
    console.log(`Salto no tempo: ${i}`)
}

//Exercício 11
console.log("FIM DO MUNDO")
for(let i: number = 10; i>=0; i--){
    if(i != 0){
        console.log(`Contagem regressiva: ${i}`)
    }
    else{
        console.log("BUM!")
    }
}

//Exercício 12
let escudoChefe: number = 100

while (escudoChefe > 0){
    escudoChefe -= 20
    if(escudoChefe != 0){
        console.log(`Dano no escudo! Resta ${escudoChefe}`)
    }
    else{
        console.log(`Resta: ${escudoChefe}. Escudo quebrado!`)
    }
}

//Exercício 13
let ferroColetado = 0
while(ferroColetado < 10){
    ferroColetado += 1
    console.log(`Total de ferro coletado: ${ferroColetado}`)
}

//Exercício 14
let xp: number = 0
let nivel: number = 1

while(nivel < 5){
    xp += 50
    if(xp >= 100){
        xp -= 100
        nivel += 1
    }
    console.log(`XP atual ${xp}`)
    console.log(`Nível atual: ${nivel}`)
}

//Exercício 15
let hp_heroi: number = 100
let hp_chefe: number = 200

while(hp_heroi > 0 && hp_chefe > 0){
    hp_heroi -= 20
    hp_chefe -= 30
    console.log("Batalha de turnos!")
    console.log(`HP Chefe: ${hp_chefe}`)
    console.log(`HP Herói: ${hp_heroi}`)
    if(hp_chefe <= 0){
        console.log("Chefe derrotado! Parabéns!")
    }
    if(hp_heroi <= 0){
        console.log("Você morreu! Game Over")
    }
}
