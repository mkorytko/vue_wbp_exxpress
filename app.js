// DB 
const mongoose = require("mongoose")
const config = require("./config")
mongoose.Promise = global.Promise
mongoose.set("debug", config.IS_PRODUCTION);
mongoose.set('useCreateIndex', true)
mongoose.connection
    .on("error", error => console.log("Connection DB with error"))
    .on("close", () => console.log("Connection is close."))
    .once("open", () => {
        const inf = mongoose.connections[0]
        console.log(`Connected ${inf.host}:${inf.port}/${inf.name}`)
    });
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true })

// Session
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)

// Server
const path = (dir) => require("path").resolve(__dirname, dir)

const history = require('connect-history-api-fallback')
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const routes = require('./routes')

app.use(history())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", express.static(path("public")))

app.use("/api/auth", routes.users)

app.listen(config.PORT, () => console.log(`Server is run on ${config.PORT}`))