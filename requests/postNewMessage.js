// POST /api/messages/:userId?recipient=:recipientId
// Response:

export const getMessages = {
  body: {
    messages: [
      {
        text: 'What time did you plan on heading out?',
      },
    ],
  },
};
