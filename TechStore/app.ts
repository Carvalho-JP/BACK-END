import express from 'express'

const app = express()

app.use(express.json())

const produtos = [
    {"id": 1, "nome": "Mouse com RGB", "categoria": "Mouses", "preco": 77.90, "em_estoque": true},
    {"id": 2, "nome": "Teclado branco com leds azuis", "categoria": "Teclados", "preco": 119.90, "em_estoque": true},
    {"id": 3, "nome": "Gabinete Monocromado", "categoria": "Gabinetes", "preco": 150.0, "em_estoque": true}
]

app.get('/', (req, res) => {
    res.json({mensagem: "TechStore API online!"})
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const idBusca = Number(req.params.id)
    const produto = produtos.find(p => p.id === idBusca)

    if(!produto){
        return res.status(404).json({erro: "Produto não encontrado."})
    }

    res.json(produto)
})

app.post('/produtos', (req, res) => {
    const{nome, categoria, preco, em_estoque} = req.body

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        categoria,
        preco, 
        em_estoque
    }

    if(!nome || !categoria || !preco || !em_estoque){
        res.status(400).json({erro: "Todos os campos (nome, categoria, preco, em_estoque) são obrigatórios."})
    }

    produtos.push(novoProduto)
    
    res.status(201).json({mensagem: "Novo produto registrado."})
})

app.put('produtos/:id', (req, res) => {
    const idBusca = Number(req.params.id)
    const {nome, categoria, preco, em_estoque} = req.body

    if(!nome || !categoria || !preco || !em_estoque == undefined){
        res.status(400).json({erro: "Todos os campos (nome, categoria, preco, em_estoque) são obrigatórios."})
    }

    const index = produtos.findIndex(p => p.id === idBusca)

    if(index === -1){
        return res.status(404).json({erro: "Produto não existe no sistema."})
    }

    produtos[index] = {
        id: idBusca,
        nome,
        categoria,
        preco,
        em_estoque
    }

    res.json({mensagem: "Produto totalmente atualizado!"})

})

app.patch('/produtos/:id', (req, res) =>{
    const idBusca = Number(req.params.id)
    const {em_estoque} = req.body

    const produto = produtos.find(p => p.id === idBusca)

    if(!produto){
        return res.status(404).json({erro: "Produto não existe no sistema."})
    }

    const index = produtos.findIndex(p => p.id === idBusca)
    
    produtos[index].em_estoque = Boolean(em_estoque)

    res.status(204).json({mensagem: "Estoque de produto atualizado."})

})

app.delete('/produtos/:id', (req, res) =>{
    const idBusca = Number(req.params.id)

    const index = produtos.findIndex(p => p.id === idBusca)

    if(index === -1){
        return res.status(404).json({erro: "Produto não existe no sistema."})
    }

    produtos.splice(index, 1)
    
    res.status(204).json({mensagem: "Produto removido do sistema."})
})

export default app