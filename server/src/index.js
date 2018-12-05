const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = 5000

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => res.send('Hi how are you!'));

app.post('/', (req, res) => {
    let email = req.body.txtemail;
    let pwd = req.body.txtpwd;
    console.log(email);
    console.log(pwd);

    if (email === 'ikram@gmail.com' && pwd === '12345') {
        res.send({ message: 'login succefully' });
    }
    else {
        res.send({ failmessage: 'Invalid user name or password' });
    }

    //let email = req.body.txtemail; 

    
});

app.get('/students', (req, res) => {
    
    var student = [
        {
            firstName : "Moiz",
            lastName  : "Khan",
            age       : 17,
            phoneNo   : "03171217991",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "JawaScript"
        },
        {
            firstName : "Ikram",
            lastName  : "Khan",
            age       : 38,
            phoneNo   : "0300-1217991",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "JavaScript Development"
        },
        {
            firstName : "Sohail",
            lastName  : "Ahsan",
            age       : 28,
            phoneNo   : "0321-21784555",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "C language"
        },
        {
            firstName : "Motishum",
            lastName  : "Faisal",
            age       : 12,
            phoneNo   : "090078601",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "3D game desining"
        },
        {
            firstName : "Mohammad",
            lastName  : "Daniyal",
            age       : 12,
            phoneNo   : "0900-78601",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "3D game desining"
        },
        {
            firstName : "Arsh",
            lastName  : "Moshin",
            age       : 28,
            phoneNo: "0300-090071",
            branch: "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "JavaScript Development"
        },
        {
            firstName : "irfan",
            lastName  : "Pathan",
            age       : 25,
            phoneNo   : "10678-0090",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Software",
            course    : "MS-OFFICE"
        },
        {
            firstName : "Asad",
            lastName  : "Raza",
            age       : 17,
            phoneNo   : "0000-0000000",
            branch: "Arbre It Supported and solution",
            feild: "Computer Programming",
            course    : "MIT App Inventer"
        },
        {
            firstName : "Gulam",
            lastName  : "Mustafa",
            age       : 17,
            phoneNo   : "03171217991",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "MIT App Inventer"
        },
        {
            firstName : "Shaheer",
            lastName  : "Alam",
            age       : 17,
            phoneNo: "1111-1111111",
            branch: "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "MIT App Inventer"
        },
        {
            firstName : "Azeem",
            lastName  : "Shahmeem",
            age       : 17,
            phoneNo   : "2222-2222222",
            branch    : "Arbre It Supported and solution",
            feild     : "Computer Programming",
            course    : "MIT App Inventer"
        },
        {
            firstName: "Abdullah",
            lastName: "Siddique",
            age       : 14,
            phoneNo   : "3333-3333333",
            branch: "Arbre It Supported and solution",
            feild: "Computer Programming",
            course    : "MIT App Inventer"
        },
        {
            firstName : "Danish",
            lastName: "Baig",
            age: 15,
            phoneNo   : "4444-4444444",
            branch    : "Arbre It Supported and solution",
            feild: "Computer Programming",
            course: "MIT App Inventer"
        },
    ]
    res.send(student);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))