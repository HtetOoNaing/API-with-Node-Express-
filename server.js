const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB connection successful!'));

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
    name: 'The Forest Hiker',
    price: 599,
    rating: 5.5
});

testTour.save().then(doc => {
    console.log(doc);
}).catch(err => console.log('Error : ', err));

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`App running on port ${port} ...`);
})