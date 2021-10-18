// POST: '/api/user'
// Request:

export const createUser = {
  body: {
    username: 'MsDriverJr',
    password: 'password2',
    payment_methods: [
      {
        provider: 'Venmo',
        url: 'https://venmo.com/MsDriverJr'
      },
      {
        provider: 'PayPal',
        url: 'https://paypal.com/MsDriverJr'
      },
    ],
  },
};

// Response on success is a session token

// Response on fail is an error stating that the username is already in use.