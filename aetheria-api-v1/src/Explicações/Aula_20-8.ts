let mochila: string[] = ["Poção", "Espada"]

// Acessando o primeiro item:
console.log(mochila[0]) // "Poção"

// Colocando e Tirando itens:
mochila.push("Chave") // Guarda no final
mochila.pop() // Arranca o último

let jogador = {
    nome: "Arthur",
    vida: 100,
    vivo: true
}

// Acessando propriedades com . (ponto)
console.log(jogador.nome)
jogador.vida = 80 // Levou dano!

interface Monstro {
    nome: string
    hp: number
}

let chefe: Monstro = {
    nome: "Troll",
    hp: 200
    // voa: true -> O TypeScript bloqueia! Erro!
}