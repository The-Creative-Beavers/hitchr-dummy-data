// GET: '/api/rides?startDest=:startDest&endDest=:endDest'
// Response:

export const getRides = {
  body: {
    rides: [
      {
        ride_id: 12345,
        driver_id: {
          driver_id: 12345,
          username: 'MrDriver',
          rating: 4.5,
        },
        price: '$48.90',
        available_seats: 3,
        start_dest: 'Denver, Colorado',
        end_dest: 'Fort Collins, Colorado',
        completed: "2021-10-05T18:05:05.000Z",
        riders: null
      },
      {
        ride_id: 12346,
        driver_id: {
          driver_id: 12345,
          username: 'MrsDriver',
          rating: 4.8,
        },
        price: '$55.17',
        available_seats: 5,
        start_dest: 'Denver, Colorado',
        end_dest: 'Fort Collins, Colorado',
        completed: "2021-10-05T18:05:05.000Z",
        riders: [
          12420,
          15231
        ]
      },
      {
        ride_id: 12347,
        driver_id: {
          driver_id: 12345,
          username: 'MrDriverJr',
          rating: 2.5,
        },
        price: '$38.75',
        available_seats: 2,
        start_dest: 'Denver, Colorado',
        end_dest: 'Fort Collins, Colorado',
        completed: null,
        riders: [
          12234,
        ]
      },
    ],
  },
};
