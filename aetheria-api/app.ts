import express from 'express'

const app = express()

app.use(express.json())

const jogadores = [
    {id:1, nick: "Faker", classe: "Guerreiro", level: 50},
    {id:2, nick: "Jukes", classe: "Mago", level: 99}
]

app.get('/', (req, res) => {
    res.json({mensagem: "Aetheria API Online!"})
})

app.get('/jogadores', (req, res) =>{
    res.json(jogadores)
})

app.get('/jogadores/:id', (req, res) =>{
    const idBusca = Number(req.params.id)
    const jogador = jogadores.find(j => j.id === idBusca)

    if(!jogador){
        return res.status(404).json({erro: "Jogador não encontrado."})
    }

    res.json(jogador)
})

app.post('/jogadores', (req, res) => {
    const{nick, classe, level} = req.body

    const novoJogador = {
        id: jogadores.length + 1,
        nick,
        classe,
        level
    }

    jogadores.push(novoJogador)

    res.status(201).json(novoJogador)
})

app.delete('/jogadores/:id', (req, res) =>{
    const idBusca = Number(req.params.id)

    const index = jogadores.findIndex(j => j.id === idBusca)

    if(index === -1){
        return res.status(404).json({erro: "Jogador não existe no sistema."})
    }

    jogadores.splice(index, 1)

    res.status(204).json({mensagem: "Jogador removido do sistema."})
})

export default app