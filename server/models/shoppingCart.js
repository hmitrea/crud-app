const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = 'mongodb+srv://horatiu:waterbottle@cluster0-ryq0v.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'shoppinglist'
}) 
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}       
    // username: String, 
    // password: String,
});

const User = mongoose.model('User', userSchema);

//module.exports = Username;
module.exports = {
    User
} 
