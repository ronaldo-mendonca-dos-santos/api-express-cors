const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
const PORT = 3000;

const books = {
    '045353334252': {
        title: 'Anubis Gate',
        author: 'Tim Powers',
        years: 1983,
    },
    '5436363323': {
        title: 'Harry Potter',
        author: 'JK Rowling',
        years: 1980,
    },
}

// ROTAS PARA BUSCAR UM LIVRO PELO ISBN

app.get('/book/:urn', (req, res) => {
    const urn = req.params.urn;
    if (books[urn]) {
        res.status(200).json({
            urn: `urn:isbn${urn}`,
            title: books[urn].title,
            author: books[urn].author,
            years: books[urn].years
        });
    } else {
        res.status(404).json({
            message: 'Livro não encontrado!'
        });
    }
});

app.post('/status-report', (req, res) => {
    const { status, url } = req.body;

    console.log(`Cod de status recebido: ${status} da URL: ${url}`);
    res.status(200).json({
        message: 'Status recebido com sucesso!'
    });
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})