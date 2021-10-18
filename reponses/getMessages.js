// GET /api/messages/:userId?recipient=:recipientId&page=:page
// Response:

export const getMessages = {
  body: {
    messages: [
      {
        text: 'I\'m headed to Fort Collins, do you not understand how to use this app?',
        messageId: 11113,
        senderId: 12345,
        recipientId: 12346,
        timestamp: 'datetime', //TODO: change to accurate postgresql timestamp output
      },
      {
        text: 'Sure, where are you headed to?',
        messageId: 11112,
        senderId: 12346,
        recipientId: 12345,
        timestamp: 'datetime', //TODO: change to accurate postgresql timestamp output
      },
      {
        text: 'Hey, can you give me a ride?',
        messageId: 11111,
        senderId: 12345,
        recipientId: 12346,
        timestamp: 'datetime', //TODO: change to accurate postgresql timestamp output
      },
    ],
  },
};
