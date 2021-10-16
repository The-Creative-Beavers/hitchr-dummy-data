// PATCH: '/api/ride/:rideid'
// Request:

export const rateRide = {
  body: {
    ride_id: 12348,
    rating: 1, //TODO: binary value of 0 or 1
  },
};