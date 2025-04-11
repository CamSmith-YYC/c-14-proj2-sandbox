import { connectDb } from "../db.js"; // update with correct path to our DB

const mongoose = await connectDb();

// Schema 
const rendezvousSchema = new mongoose.Schema({
    meetingSpot: { type: String, coordinates: [Number] }, // should I detail more on the type/coordinates? Do we want to make them required?
    driverLocation: { type: String, coordinates: [Number] }, // should I detail more on the type/coordinates? Do we want to make them required?
    passengerLocation: { type: String, coordinates: [Number] }, // should I detail more on the type/coordinates? Do we want to make them required?
});

// Shane Explanation of Schema/GeoJSON objects within Schema
// {
//  ObjectId: "1234567890abcdef12345678",
//  driverLocation: { type: "Point", coordinates: [114, 11] }
//  meetingSpot: { type: "Point", coordinates: [115, 12] }
//  passengerLocation: { type: "Point", coordinates: [115, 12] }
// }

// Models
const Rendezvous = mongoose.model('rendezvous', rendezvousSchema);

// Functions to expose to the outside world!
export async function createRendezvous({meetingSpot, driverLocation, passengerLocation}) {
    const newRendezvous = await Rendezvous.create({
        meetingSpot,
        driverLocation,
        passengerLocation
    })    
    return newRendezvous
}

//  <-- Framework maybe used for finding all locations later on? -->
// export async function findAllHeroes() {
//     const heroes = await Superhero.find()
//     return heroes
// }

// get Meeting Room / Selected Spot - what do we want to call this?
export async function findRendezvousById(id) {
    const meetingRoom = await Rendezvous.findById(id)
    return meetingRoom
}
