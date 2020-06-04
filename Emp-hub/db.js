const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://<username>:<password>@divyazdb-6caob.azure.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(function(){
    console.log('Database is connected successfully')
})
.catch(function(err){
    console.log(err)
})