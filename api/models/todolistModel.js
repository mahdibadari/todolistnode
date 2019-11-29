var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let TaskSchema = new Schema({
    description: {
        type: String,
        required: 'Please set description'
    },
    deadline: {
        type: Date,
        required: 'Please set deadline'
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'tasks'
});

module.exports = mongoose.model('Task', TaskSchema);