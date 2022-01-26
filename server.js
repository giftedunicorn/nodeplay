const http = require('http')

http.createServer((req, res) => {
    console.log('url:', `${req.method} ${req.url} `)

    const { url } = req
    if ('/' === url) {
        res.end(`
            <html>
                <!-- <meta http-equiv="Refresh" content="5" /> -->
                Html Update Time: ${updateTime()}
                <script src='main.js'></script>
            </html>
            `)
    } else if (url === '/main.js') {
        const content = `document.writeln('<br>JS   Update Time:${updateTime()}')`
       
        res.statusCode = 200
        res.end(content)
    } else if (url === '/favicon.ico') {
        console.log('favicon..')
        res.end('')
    }
})
.listen(3000, () => {
    console.log('Http Cache Test at:' + 3000)
})