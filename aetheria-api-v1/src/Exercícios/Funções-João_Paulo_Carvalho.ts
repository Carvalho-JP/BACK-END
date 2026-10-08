//Exercício 1
const exibirBoasVindas = (): void => {
  console.log("Bem-vindo ao Aetheria Engine!")
}

exibirBoasVindas()

//Exercício 2
const saudarJogador = (nome: string): void =>{
  console.log(`Olá, ${nome}!`)
}

saudarJogador("João Paulo")

//Exercício 3
const emitirAlerta = () => {
  for(let i: number = 0; i < 3; i++){
    console.log("ALERTA DE INVASÃO!")
  }
}

emitirAlerta()

//Exercício 4

const calcularPreco = (valorBase: number): number => {
  return valorBase * 1.20
}

let precoTotal: number = calcularPreco(50)

console.log(`O valor final com imposto é: ${precoTotal}`)

//Exercício 5

const isVivo = (hp: number): boolean => {
  if(hp > 0){
    return true
  }
  else{
    return false
  }
}

console.log(`Jogador está vivo? -> ${isVivo(27)}`)

//Exercícios 6
const rolarDadoD20 = (): number => Math.floor(Math.random() * 20) + 1

console.log(`Número rolado: ${rolarDadoD20()}`)

//Exercício 7
const obterClasseFase = (nivel: number): string => {
  if(nivel < 10){
    return "Iniciante"
  }

  if(nivel < 50){
    return "Intermediário"
  }

  return "Mestre"
  
}

console.log(`Nível atual: ${obterClasseFase(37)}`)

//Exercício 8
const curar = (hpAtual: number, pocao: number):number => {
  let cura: number = hpAtual + pocao
  if (cura >= 100){
    return 100
  } else{
    return cura
  } 
}

console.log(`HP atual: ${curar(33,25)}`)

//Exercício 9
const rolarAtaque = (): number => {
  return 26
}

console.log(`Número para ataque sorteado: ${rolarAtaque()}`)

//Exercício 10
const verificarAcerto = (ataque: number, defesa: number): boolean =>{
  if(ataque > defesa){
    return true
  }
  return false
}

console.log(`Acerto: ${verificarAcerto(75,60)}`) 

//Exercício 11


//Exercício 12
const jogadorMorreu = () => {
    console.log("Game Over!");
};

const verificarVida = (hp: number, callbackMorte: Function): void => {
    if (hp === 0) {
        callbackMorte();
    }
}
verificarVida(10, jogadorMorreu)
verificarVida(0, jogadorMorreu) 

//Exercício 13
const processarHorda = (qtdMonstros: number, callbackAbate: () => void): void => {
    for (let i = 0; i < qtdMonstros; i++) {
        callbackAbate();
    }
}

const aoAbater = (): void => {
    console.log("Ganhou 10 XP!");
}

processarHorda(3, aoAbater);

//Exercício 14
(()=> {
  const dbPassword: string = "admin123_secret"
  console.log('Banco inicializado')
})();


//Exercício 15
(() => {
    const senhaBancoDeDados: string = "admin123_secret"
    console.log("Banco inicializado")
})()
