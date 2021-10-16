// POST: '/api/ride'
// Request:

export const postNewRide = {
  body: {
    driver_id: 12348,
    start_dest: 'Denver, Colorado',
    end_dest: 'Fort Collins, Colorado',
    price: 4890,  // database will be handling prices in cents
    seats: 3,
    session_id: '12g34sdf56s78fs90',
  },
};