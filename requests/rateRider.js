// PATCH: '/api/user/:userId/rate/rider'
// Request:

export const rateRider = {
  body: {
    userId: 12348,
    rating: 1, // binary value of 0 or 1
  },
};