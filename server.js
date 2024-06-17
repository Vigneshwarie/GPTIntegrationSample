const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require("openai");
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/public'));

app.post('/generate', async (req, res) => {
     const prompt = req.body.prompt;
     console.log(prompt);
     try {
          const contentChunks = [];
          const response = await openai.chat.completions.create({
               model: "gpt-3.5-turbo",
               messages: [{ role: "user", content: prompt }],
               temperature: 1,
               max_tokens: 150,
               top_p: 1,
               frequency_penalty: 0,
               presence_penalty: 0,
               stream: true,
          });

          res.setHeader('Content-Type', 'text/plain');

          if (typeof response[Symbol.asyncIterator] !== 'function') {
               throw new Error('Response is not iterable');
          }

          for await (const chunk of response) {
               const content = chunk.choices[0]?.delta?.content || "";
               if (content) {
                    contentChunks.push(content);
               }
          }

          const finalContent = contentChunks.join('').replace(/\s+([,.?!;:])/g, '$1');
          res.status(200).send(finalContent);
          res.end();
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while generating the response.' });
     }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
