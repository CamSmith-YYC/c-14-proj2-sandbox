import express from 'express';
import cors from 'cors'; // Do we need this?
import rendezvousRoutes from './routes/rendezvousRoutes.js'; // change to rendezvousRoutes.js

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/rendezvous', rendezvousRoutes); // do we want to name this /rendezvous or something else?

app.get('/', (req, res) => {
    res.send('WORK PLEASE!'); // Test route to check if server is working
});

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})

// Add this to db.js for testing
// const mongo_uri = process.env.MONGO_URI || 'mongodb://localhost:27017/Park-Force-One'