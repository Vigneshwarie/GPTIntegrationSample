const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint for processing user messages
app.post('/api/chat', async (req, res) => {
     try {
          const { message } = req.body;
          const apiKey = 'YOUR_OPENAI_API_KEY';
          const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

          // Send user message to ChatGPT API
          const response = await axios.post(apiUrl, {
               prompt: message,
               max_tokens: 150,
               }, {
               headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
               },
          });
          
          // Extract and send the response from ChatGPT back to the frontend
          res.status(200).json({ reply: response.data.choices[0].text.trim() });
     } catch (error) {
          console.log("🚀 ~ file: index.js:39 ~ app.post ~ error:", error)
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Something went wrong' });
     }
});


app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});