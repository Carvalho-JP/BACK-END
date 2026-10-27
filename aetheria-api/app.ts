import express from 'express'

const app = express()

app.use(express.json())

const jogadores = [
    {id:1, nick: "Faker", classe: "Guerreiro", level: 50},
    {id:2, nick: "Jukes", classe: "Mago", level: 99}
]

const guildas = [
{ id_guilda: 1, nome: "Cavaleiros de Prata", cidade: "Eldoria" },
{ id_guilda: 2, nome: "Forjadores de Runas", cidade: "Khorum" }
]

const itens = [
    {id_item: 1, nome: "Espada das trevas", tipo: "Arma de combate"} 
]

app.get('/', (req, res) => {
    res.json({mensagem: "Aetheria API Online!"})
})

app.get('/jogadores', (req, res) =>{
    res.json(jogadores)
})

app.get('/guildas', (req, res) => {
    res.json(guildas)
})

app.get('/jogadores/:id', (req, res) =>{
    const idBusca = Number(req.params.id)
    const jogador = jogadores.find(j => j.id === idBusca)

    if(!jogador){
        return res.status(404).json({erro: "Jogador não encontrado."})
    }

    res.json(jogador)
})

app.get('/guildas/:id', (req, res) => {
    const idBusca = Number(req.params.id)
    const guilda = guildas.find(g => g.id_guilda === idBusca)

    if(!guilda){
        return res.status(404).json({erro: "Guilda não encontrada."})
    }

    res.json(guilda)
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

app.post('/guildas', (req, res) => {
    const{nome, cidade} = req.body

    const novaGuilda = {
        id_guilda: guildas.length + 1,
        nome,
        cidade
    }
    
    guildas.push(novaGuilda)

    res.status(201).json(novaGuilda)
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

app.delete('/guildas/:id', (req, res) =>{
    const idBusca = Number(req.params.id)

    const index = guildas.findIndex(g => g.id_guilda === idBusca)

    if(index === -1){
        return res.status(404).json({erro: "Guilda não existe no sistema."})
    }

    guildas.splice(index, 1)
    
    res.status(204).json({mensagem: "Guilda removida do sistema."})
})

// :id -> parâmetro do caminho

app.patch('/jogadores/:id', (req, res) =>{
    const idBusca = Number(req.params.id)
    const {level} = req.body

    const jogador = jogadores.find(j => j.id === idBusca)

    if(!jogador){
        return res.status(404).json({erro: "Jogador não existe no sistema."})
    }

    const index = jogadores.findIndex(j => j.id === idBusca)
    
    jogadores[index].level = Number(level)

    res.json({mensagem: "Level atualizado."})

})

app.patch('/guildas/:id', (req, res) =>{
    const idBusca = Number(req.params.id)
    const {cidade} = req.body

    const guilda = guildas.find(g => g.id_guilda === idBusca)

    if(!guilda){
        return res.status(404).json({erro: "Guilda não existe no sistema."})
    }

    const index = guildas.findIndex(g => g.id_guilda === idBusca)
    
    guildas[index].cidade = Number(cidade)

    res.json({mensagem: "Cidade de guilda atualizado."})

})


app.put('/jogadores/:id', (req, res) => {
    const idBusca = Number(req.params.id)
    const {nick, classe, level} = req.body

    if(!nick || !classe || !level){
        return res.status(400).json({erro: "O método PUT exige todos os campos."})
    }

    const index = jogadores.findIndex(j => j.id === idBusca)

    if(index === -1){
        return res.status(404).json({erro: "Jogador não existe no sistema."})
    }

    jogadores[index] = {
        id: idBusca,
        nick,
        classe,
        level: Number(level)
    }

    res.json({mensagem: "Jogador totalmente atualizado!"})

})

app.put('/guildas/:id', (req, res) => {
    const idBusca = Number(req.params.id)
    const {nome, cidade} = req.body

    if(!nome || !cidade){
        return res.status(400).json({erro: "O método PUT exige todos os campos."})
    }

    const index = guildas.findIndex(g => g.id_guilda === idBusca)

    if(index === -1){
        return res.status(404).json({erro: "Guilda não existe no sistema."})
    }

    guildas[index] = {
        id_guilda: idBusca,
        nome,
        cidade
    }

    res.json({mensagem: "Guilda totalmente atualizada!"})

})
export default app