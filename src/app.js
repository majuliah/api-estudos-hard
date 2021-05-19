const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/maju', function(request, response){
    response.send('hello im maju, you bitch')
});

app.listen(3000)