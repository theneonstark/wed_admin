import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weddings'
})

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL');
})

app.get('/',(req, res)  => {
    return res.json('Apun Piche hi hai');
})

app.post('/registration_Vendor', (req, res) => {
    const {brand, state, type, email, mobile, password} = req.body;
    const send_query = "INSERT INTO vendors (Brand_name, State, vendor_type, email, mobile, password) VALUES (?,?,?,?,?,?)";
    db.send_query(send_query, [brand, state, type, email, mobile, password], (err, result)=>{
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Data inserted successfully');
    });
})

app.listen(3500, ()=> {
    console.log('Server is running on port 3500');
})