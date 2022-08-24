const path = require('path');
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const  passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

//Load config 
dotenv.config({ path: './config/config.env' })

//Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'}))
app.set('view engine', '.hbs')

//

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))




const PORT = process.env.PORT || 8500

app.listen(PORT, console.log(`Server running on port ${process.env.Node_ENV} mode on ${PORT}`))

