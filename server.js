const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const sslRedirect = require('heroku-ssl-redirect')

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(sslRedirect())
// routers
const apiRouter = require('./apiRoutes')

app.use((req, res, next) => {
	res.header('access-control-allow-origin', '*')
	next()
})
app.use('/api', apiRouter)

app.use(express.static('./client/build'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
