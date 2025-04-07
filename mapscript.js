// These are some of the REST API calls

meetingSpot
    .getMeetingSpots() 
    .then((response) => {
        const meetingSpots = response.data.meetingSpots;
        console.log(meetingSpots);
        meetingSpot.renderMeetingSpots(meetingSpots);
    } )
    .catch((error) => {
        console.error('Error fetching meeting spots:', error);
    });

driverLocation
    .getDriverLocation()
    .then((response) => {
        const driverLocation = response.data.driverLocation;
        console.log(driverLocation);
        driverLocation.renderDriverLocation(driverLocation);
    })
    .catch((error) => {
        console.error('Error fetching driver location:', error);
    });

passemgerLocation
    .getPassemgerLocation()
    .then((response) => {
        const passemgerLocation = response.data.passemgerLocation;
        console.log(passemgerLocation);
        passemgerLocation.renderPassemgerLocation(passemgerLocation);
    })
    .catch((error) => {
        console.error('Error fetching passemger location:', error);
    });