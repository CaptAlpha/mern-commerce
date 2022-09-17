const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect(`mongodb+srv://arhitbt:admin@cluster0.fhlzae8.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database Connected');
});

// Routes
const authRoute = require('./routes/auth');

//mongodb+srv://arhitbt:<password>@cluster0.fhlzae8.mongodb.net/?retryWrites=true&w=majority
app.use(bodyParser.json());
app.use('/api', authRoute);
// app.use(bodyParser.urlencoded({ extended: true }));
env.config();
    

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
