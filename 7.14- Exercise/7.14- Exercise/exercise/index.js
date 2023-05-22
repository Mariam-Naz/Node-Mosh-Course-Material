const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/mongo-exercises')
.then(() => console.log('Connected to MondoDB'))
.catch(err => console.log('Could not connect to MongoDB', err))

//Step:1 Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: Number
});

//Step:2 Model
const Course = mongoose.model('Course', courseSchema);

async function getCourses1(){
    const result = await Course
    .find({isPublished: true, tags: 'backend'})
    .sort({name: 1})
    .select({name:1, author:1})
    console.log(result);
                    
}

async function getCourses2(){
    const result = await Course
    .find({isPublished: true})
    .sort({price: -1})
    .select({name:1, author:1})
    console.log(result);
                    
}

async function getCourses3(){
    const result = await Course
    .find({isPublished: true})
    .or([{price: {$gte:15}}, {name: /.* by .*/}])
    .select({name:1, author:1})
    console.log(result);
                    
}

getCourses3()