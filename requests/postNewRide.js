// POST: "/api/ride"
// Request:

export const postNewRide = {
  body: {
    driver_id: 12348,
    start: "Denver, Colorado",
    end: "Fort Collins, Colorado",
    price: 48.90,
    seats: 3,
    session_id: 1234567890
  },
};