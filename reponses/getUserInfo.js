// GET: "/api/user/:userId
// Reponse:

export const getUserInfo = {
  body: {
    user_id: 12345,
    username: "MrDriver",
    rating: 4.5,
    payments: [
      {
        provider: "Venmo",
        url: "http://venmo.com/MrDriver"
      },
      {
        provider: "PayPal",
        url: "http://paypal.com/MrDriver"
      },
      {
        provider: "Cash App",
        url: "http://cashapp.com/MrDriver"
      },
    ]
  }
};