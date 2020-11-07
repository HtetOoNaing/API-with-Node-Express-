const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB connection successful!'));



const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`App running on port ${port} ...`);
})