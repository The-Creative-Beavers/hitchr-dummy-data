// PATCH: '/api/user/:userId/rate/driver'
// Request:

export const rateDriver = {
  body: {
    userId: 12348,
    rating: 1, // binary value of 0 or 1
  },
};