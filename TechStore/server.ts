import app from './app.ts'

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor TechStore rodando na porta http://localhost:${PORT}`)
})
