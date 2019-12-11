import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({status: "iTask API"});
});

app.listen(PORT, () => {
    console.log(`iTask API - Port ${PORT}`);
});