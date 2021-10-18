// PATCH: '/api/rides/:rideid'
// Request:

export const completedRide = {
  body: {
    ride_id: 12348,
    timestamp: 'datetime', //TODO: change to accurate postgresql timestamp output
  },
};