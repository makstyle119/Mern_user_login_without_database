let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    sname: {type: String},
    fname: String,
    email: String,
    //class: {type: mongoose.Schema.Types.ObjectId, ref: 'Classes', required: true},
    //fees: [feeScheme]
});

let Student = mongoose.model('Student', studentSchema);
module.exports = Student;
