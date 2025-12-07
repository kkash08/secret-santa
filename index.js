import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return("Secret Santa server is running!🚀")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server Running!');
})