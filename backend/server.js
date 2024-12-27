import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { json } from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import session from 'express-session';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, // Use 'credentials' instead of 'credential'
};

app.use(cors(corsOptions));
app.use(json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Session setup
app.use(
    session({
        secret: process.env.SESSION_SECRET || "zlcxzMQMFf", // Replace with a strong secret key
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false, // Set to false for local development (HTTP)
            maxAge: 3600000, // 1 hour
        },
    })
);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weddings',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || '6VlND6rBdEuXyEpYJgiCVFmazuB9ewSH'; // Replace with a strong secret key

// Registration Route
app.post('/registration_Vendor', async (req, res) => {
    const { brand, state, city, type, email, mobile, password } = req.body;

    if (!brand || !state || !city || !type || !email || !mobile || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const emailCheckQuery = 'SELECT * FROM vendors WHERE email = ?';
        db.query(emailCheckQuery, [email], async (err, result) => {
            if (err) {
                console.error('Database Error:', err);
                return res.status(500).json({ message: 'Database error during email check.', error: err.message });
            }

            if (result.length > 0) {
                return res.status(400).json({ message: 'Email is already registered.' });
            }

            const mobileCheckQuery = 'SELECT * FROM vendors WHERE mobile = ?';

            db.query(mobileCheckQuery, [mobile], async (err, result) => {
                if (err) {
                    console.error('Database Error:', err);
                    return res.status(500).json({ message: 'Database error during mobile check.', error: err.message });
                }

                if (result.length > 0) {
                    return res.status(400).json({ message: 'Mobile number is already registered.' });
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                const insertQuery =
                    'INSERT INTO vendors (Brand_name, State, city, vendor_type, email, mobile, password) VALUES (?,?,?,?,?,?,?)';
                db.query(
                    insertQuery,
                    [brand, state, city, type, email, mobile, hashedPassword],
                    (insertErr, insertResult) => {
                        if (insertErr) {
                            console.error('Database Error during Insert:', insertErr);
                            return res.status(500).json({ message: 'Database error during signup.', error: insertErr.message });
                        }

                        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
                        req.session.user = { email }; // Store user in session
                        res.status(201).json({
                            message: 'User registered successfully.',
                            token,
                            redirectURL: '/VendorDashboard/info',
                        });
                        console.log(req.session.user);
                    }
                );
            });
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error.', error: error.message });
    }
});

// Get Vendor routes
app.get('/VendorDashboard/info', (req, res) => {
    if (req.session.user) {
        return res.status(200).json({ valid: true, message: 'Authenticated', user: req.session.user });
    }
    res.status(401).json({ message: 'Unauthorized: Please login first.' });
});

app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    console.log('Session:', req.session);
    next();
});

app.listen(3500, () => {
    console.log('Server is running on port 3500');
});
