import express from 'express';
import dotenv from 'dotenv';
import assignRoutes from './src/routes/assignRoutes.js'
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return("Secret Santa server is running!🚀")
});

app.use("/assign", assignRoutes);

app.listen(PORT, () => {
    console.log('Server Running!');
})