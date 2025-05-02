const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()); // อ่าน JSON body ที่มาจาก LINE

// 👇 Webhook endpoint ที่ LINE จะส่ง event มาหา
app.post('/webhook', (req, res) => {
  const events = req.body.events;
  console.log('📩 Webhook received:', JSON.stringify(events, null, 2));

  // ดึง userId จากผู้ที่ส่งข้อความเข้า LINE Bot
  const userId = events?.[0]?.source?.userId;
  console.log('👤 User ID:', userId);

  res.sendStatus(200); // ส่งกลับ 200 OK
});

// เริ่มรัน server
app.listen(PORT, () => {
  console.log(`🚀 Webhook server is running on http://localhost:${PORT}`);
});
