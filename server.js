const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/public'));

app.post('/generate', async (req, res) => {
    const prompt = req.body.prompt;
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.7,
        });

        res.json({ text: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while generating the response.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
