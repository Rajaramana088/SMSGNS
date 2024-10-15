const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/student_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: String,
    grade: String,
    branch: String,
});

const Student = mongoose.model('Student', studentSchema);

async function fetchStudents() {
    const students = await Student.find();
    console.log(students);
    mongoose.connection.close();
}

fetchStudents();
