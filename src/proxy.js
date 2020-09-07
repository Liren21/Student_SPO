const ParcelProxyServer = require("parcel-proxy-server")

const server = new ParcelProxyServer({
    entryPoint: "./src/index.html",
    proxies: {
        "/backend/appconfig.json": {
            target: "http://127.0.0.1:4567/",
        },
    },
})

server.bundler.on("buildStart", () => {
    console.log("Start build!")
    console.log(new Date())
})

server.bundler.on("buildEnd", () => {
    console.log("Build completed!")
    console.log(new Date())
})

server.listen(1234, () => {
    console.log("Parcel proxy proxy has started")
})
