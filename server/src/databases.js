const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log('conectado correctamente a mongo'))
    .catch(err => console.error(err))