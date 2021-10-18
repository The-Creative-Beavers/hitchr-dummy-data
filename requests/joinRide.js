// PATCH: '/api/rides/:rideid'
// Request:

export const joinRide = {
  body: {
    userId: 12345,
    sessionId: '12g34sdf56s78fs90',   // will likely be on the query string instead
  },
};
