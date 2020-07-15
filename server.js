const express = require ('express');
const app = express();
app.use(express.json());
const path = require('path');
app.use(require('cors')());

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
res.sendFile(__dirname + '/dist/index.html')
});


app.listen(5001,() => {
    console.log('server is running on 50001');
})