const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const sanitizer = require("sanitizer")
var entries = []
app.get('/', (request, response) => {
    const html = `
    <html>
        <body>
            <h1>Workshop</h1>
            <form action="/store" method="get">
                <label>Enter your text</label>
                <input type="text" name=value></input>
            </form>
            <ul>
                ${entries.map((value) => '<li>' + value + '</li>').join('')}
            </ul>
        </body>
    </html>
    `
    console.log('getting')
    response.setHeader('ContentType', 'text/html');
    response.send(html)
})

app.get('/store', (request, response) => {
    let body = request.query
    const value = body.value
    console.log('storing')
    entries.push(sanitizer.escape(value))
    response.redirect('/')
})

app.get('/vaddy-6be70de085b485c.html', (request, response) => {
    response.send("6be70de085b485c")
})

const server = app.listen(port, () => console.log( `Example app listening on port ${port}!` ))

module.exports = server;