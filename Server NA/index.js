const express = require('express')
const app = express()

const fs = require("fs")

app.use(express.static(`${__dirname}/../`));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/../index.html`)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))