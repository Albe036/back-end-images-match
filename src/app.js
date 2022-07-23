import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';


const app = express();
app.use(cors());

const httpServer = http.createServer(app);

httpServer.listen(5000, ()=>{
    console.log('listen on port', 5000);
});