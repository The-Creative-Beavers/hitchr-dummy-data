// POST: '/api/rides'
// Request:

export const postNewRide = {
  body: {
    driverId: 12348,
    startDest: 'Denver, Colorado',
    endDest: 'Fort Collins, Colorado',
    price: 4890,  // database will be handling prices in cents
    seats: 3,
    sessionId: '12g34sdf56s78fs90',  // will likely be on the query string instead
  },
};