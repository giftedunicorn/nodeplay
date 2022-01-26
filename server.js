const http = require('http')
const crypto = require('crypto');

function updateTime() {
    setInterval(() => this.time = new Date().toUTCString(), 1000)
    return this.time
}

http.createServer((req, res) => {
    console.log('url:', `${req.method} ${req.url} `)

    const { url } = req
    if ('/' === url) {
        // 在这里加入cache-control和expires无效，浏览器默认设置请求为 cache-controll: max-age=0
        res.end(`
            <html>
                <!-- <meta http-equiv="Refresh" content="5" /> -->
                Html Update Time: ${updateTime()}
                <script src='main.js'></script>
            </html>
            `)
    } else if (url === '/main.js') {
        const content = `document.writeln('<br>JS   Update Time:${updateTime()}')`

        // cache-control优先级高于expires，最后会缓存20s。
        // res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())
        // res.setHeader('Cache-Control', 'max-age=20')

        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('last-modified', new Date().toUTCString())
        if (new Date(req.headers['if-modified-since']).getTime() + 3 * 1000 > Date.now()) {
            console.log('协商缓存命中....')
            res.statusCode = 304 // not modified
            res.end()
            return
        }

        // res.setHeader('Cache-Control', 'no-cache')
        // const hash = crypto.createHash('sha1').update(content).digest('hex')
        // res.setHeader('Etag', hash)
        // if (req.headers['if-none-match'] === hash){
        //   console.log('Etag协商缓存命中.....')
        //   res.statusCode = 304
        //   res.end()
        //   return 
        // }

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
