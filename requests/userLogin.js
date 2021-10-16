// POST: '/api/login'
// Request:

export const userLogin = {
  body: {
    username: 'MrDriver',
    password: 'password'
  },
};

// Response on success is a session token

// Response on fail is a redirect to create user 

