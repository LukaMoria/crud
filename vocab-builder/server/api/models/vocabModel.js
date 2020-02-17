const mongoose = require('mongoose')

const { Schema } = mongoose;

const VocabSchema = new Schema({
    english: {
        type: String,
        required: 'English word cannot be blank'
    },
    russian: {
        type: String,
        required: 'Russian word cannot be blank'
    },
},
{ collection: 'vocab' }
);

module.exports = mongoose.model('Vocab', VocabSchema)

