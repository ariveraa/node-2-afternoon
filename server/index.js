const express = require('express'); 
const messagesCtrl = require('./controllers/messages_controller ')
const app = express(); 
const port = 3001; 

app.use(express.static('../public/build'))
app.use(express.json()); 

app.get('/api/messages', messagesCtrl.read);
app.post('/api/messages', messagesCtrl.create);
app.put('/api/messages/:id', messagesCtrl.update); 
app.delete('/api/messages/:id', messagesCtrl.delete); 

app.listen(port, (req,res) => {
    console.log(`server running on ${30001}`);  
})