    // http server setup
    const express = require('express');
    const dotenv = require('dotenv');
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const path = require('path');
    const connectDB = require('./server/database/connection');
    const app = express();

    dotenv.config({path:__dirname + '/config.env'});

    // log requests
    app.use(morgan('tiny'));
    // MongoDB connection
    connectDB();
    // parse request to body-parser
    app.use(bodyParser.urlencoded({extended:true}));

    // set view engine
    app.set("view engine", "ejs");
    //app.set("views", path.resolve(__dirname, "views/ejs"))

    //load assets
    app.use(express.static(__dirname+ "/assets/css"));
    app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
    app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

    //default routes
    //load routers
    app.use('/',require('./server/routes/router'))

    let port = process.env.PORT;
    if(port == null || port == "") {
    	port = 3000;
    }
    console.log(port);
    app.listen(port,()=>{console.log(`Server is running`)});

