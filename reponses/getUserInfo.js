// GET: '/api/user/:userId'
// Reponse:

export const getUserInfo = {
  body: {
    user_id: 12345,
    username: 'MrDriver',
    rating: 4.5,
    payment_methods: [
      {
        provider: 'Venmo',
        url: 'https://venmo.com/MrDriver'
      },
      {
        provider: 'PayPal',
        url: 'https://paypal.com/MrDriver'
      },
      {
        provider: 'Cash App',
        url: 'https://cashapp.com/MrDriver'
      },
    ],
  },
};
