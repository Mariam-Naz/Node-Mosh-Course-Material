const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/playground')
.then(() => console.log('Connected to MondoDB'))
.catch(err => console.log('Could not connect to MongoDB', err))

//Step:1 Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tag: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

//Step:2 Model
const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Nodejs Course',
        author: 'Mariam Naz',
        tag: ['Node', 'Backend'],
        isPublished: true
    })

    const result = await course.save();
    console.log(result);
}

// createCourse();

async function getCourses(){

    const result = await Course.find();
    console.log(result);
}

getCourses();