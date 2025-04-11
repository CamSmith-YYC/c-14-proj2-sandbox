import { Router } from "express";

import { createRendezvous, findRendezvousById } from "../models/rendezvous.js";

const router = Router();

// < -- This framework might be for the listing of Parking Locations later on -- >
// // list all superheros
// router.get('/', async function (req, res) {
//     try {
//         const heroes = await findAllHeroes()
//         res.send(heroes)
//     }
//     catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

// Begin Pickup process / transition from Step 3 to 4 - DONE!
router.post('/', async (req, res) => {
    const { meetingSpot, driverLocation, passengerLocation } = req.body // Are these the main variable names we want to use for a rendezvous?

    if (req.body) {       
        const newRendezvous = await createRendezvous({meetingSpot, driverLocation, passengerLocation}) // <-- Shane suggested wrapping the 3 variables in an object to make it easier to read and understand
        return res.send(newRendezvous)
    }
    else {
        return res.sendStatus(400)
    }
})

// get Meeting Room ID - DONE!
router.get('/:id', async function (req, res) {
    const id = req.params.id
    try {
        const meetingRoom = findRendezvousById(id)
        res.send(meetingRoom)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// < -- This framework might be for the deleting Parking Locations or other variables later on -- >
// router.delete('/:heroId', async function(req, res) {
//     console.log('Deleting ', req.params.heroId)
//     res.sendStatus(200)
// })

export default router