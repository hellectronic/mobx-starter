import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import favicon from 'serve-favicon'
import passport from 'passport'
import db from './helpers/database'
import seedTodos from './helpers/seedTodos'
import todos from './routes/todos'
import render from './routes/render'

const app = express()
const MongoStore = connectMongo(session)
const faviconPath = path.join(__dirname, '../assets/favicon.ico')

// Static
app.use('/build', express.static(path.join(__dirname, '../../build')))

// Middleware
app.use(favicon(faviconPath))
app.use(bodyParser.json({ limit: '2mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))
app.use(session({
    secret: 'SUPER_SECRET_KEY_KERE',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db.connection })
}))
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use(todos)
app.use(render)

// Add some data to db for testing purposes
// You can remove this when you don't need it anymore
seedTodos()

app.listen(2000, function() {
    console.info('HTTP Server listening on port 2000')
})