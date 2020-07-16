require('dotenv').config()

// Dependencies
const express = require('espress');
const mongoose = require('mongoose');
const cors = require('cors');


// Routes

// Starting mongoDB
mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Middlewares
app.use(express.static('public'));
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
}));

const app = express();

// Use Routes

/** Creates and passes a 404 error if the route is not a register route*/ 
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

/** Catces errors and returns a message */
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

/** Starts the server */
app.listen(process.env.PORT, () => {
    console.log("Server started");
});