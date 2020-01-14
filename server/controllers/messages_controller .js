let id = 0 ; 
let messages = []; 

module.exports ={
    create: (req, res) =>{
        const {text, time} = req.body; 
        let message ={
            id, 
            text, 
            time
        }
        messages.push(message); 
        id++ 
        res.status(200).send(messages);
    },
    read: (req,res) => {
        res.status(200).send(messages);
    },
    update: (req,res) =>{
        let index = messages.findIndex(element => element.id === +req.params.id); 
        messages[index] = {
            index: messages[index].id, 
            text: req.body.text, 
            time: messages[index].time 
        }
        res.status(200).send(messages); 
    }, 
    delete: (req,res) =>{
        let index = messages.findIndex(element => element.id === +req.params.id); 
        messages.splice(index,1);
        res.status(200).send(messages);
    }
}