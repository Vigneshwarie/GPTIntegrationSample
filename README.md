# Node.js ChatGPT Integration

## Description

This is a simple Express.js application that leverages the OpenAI GPT-3.5 Turbo model to generate text responses based on user prompts. The application sends user-provided prompts to the OpenAI API, streams the generated response, and returns the processed output to the client.

## Features

**User Prompts:** Users can input custom prompts to interact with the GPT-3.5 Turbo model.
**Streaming Response Handling:** The application streams responses from the OpenAI API and processes them efficiently.
**Bootstrap CSS Integration:** The application uses Bootstrap CSS for a clean and responsive user interface.

## Installation

1. Clone the repository:
```
git clone git@github.com:Vigneshwarie/GPTIntegrationSample.git
cd GPTIntegrationSample
```
2. Install dependencies:
```
npm install
```
3. Create a .env file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your-openai-api-key
```
4. Start the application:
```
npm start
```
5. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

Enter your prompt in the input field and submit it to generate a response from the GPT-3.5 Turbo model.
The response will be displayed on the webpage.

## Dependencies

Express.js: Web framework for Node.js.
Body-Parser: Middleware for parsing request bodies.
OpenAI: Official OpenAI API client.
Dotenv: For API keys
Bootstrap: Modern CSS framework based on Flexbox.

License

 ![Github license](https://img.shields.io/badge/license-MIT-blue.svg) 


