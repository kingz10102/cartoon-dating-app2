import express from 'express';
import mongoose from 'mongoose';

// Application Config
const app = express();
const port = process.env.PORT || 8001






// API EndPoints 
app.get('/', (req, response =>response.statusCode(200)))