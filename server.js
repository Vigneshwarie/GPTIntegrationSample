const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require("openai");
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/public'));

app.post('/generate', async (req, res) => {
    const prompt = req.body.prompt;
    try {
          const stream = await openai.chat.completions.create({
               model: "gpt-3.5-turbo",
               messages: [{ role: "user", content: "Say this is a test" }],
               stream: true,
          });
         
          for await (const chunk of stream) {
               process.stdout.write(chunk.choices[0]?.delta?.content || "");
          }
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while generating the response.' });
     }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
