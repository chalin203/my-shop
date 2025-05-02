const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const events = req.body.events;
  console.log('📩 LINE Webhook:', JSON.stringify(events, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Server ready on http://localhost:${PORT}`);
});
