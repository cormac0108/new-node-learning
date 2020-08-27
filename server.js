const express = require('express');
const app = express();

const database = { 
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cook123',
            entries: 0,
            joined: new Date()
        }, 
        {
            id: '1234',
            name: 'Sam',
            email: 'Sam@gmail.com',
            password: 'bandana',
            entries: 0,
            joined: new Date() 
        }
    ]
}

// create a basic route. 
app.get('/', (req, res) => {
    res.send('this is working! ');
})

app.post('/signin', (req , res) => {
    res.send('signing -hello')
    res.json('signing')
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

/* Our projects endpoint layout 
/ --> res = this is working
/sigin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
We will test them with postman to make sure they are working. 
*/