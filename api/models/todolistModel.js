var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
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
});

module.exports = mongoose.model('Task', TaskSchema);