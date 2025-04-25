const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world this is node cicd"
    })
})

app.listen(8000, () => {
    console.log('server running on port 8000')
})