# Generative AI - Christmas Gift Generator 🎁

![Project License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

**Generative AI - Christmas Gift Generator** is a web-based application designed to suggest personalized Christmas gift ideas using the power of Generative AI. By inputting the age, category, and a keyword related to the gift receiver’s interests, the app generates thoughtful and tailored gift recommendations. It leverages **Hugging Face's Falcon-7B** model to suggest gifts and enhances user interaction with dynamic, visually appealing UI elements.

This project demonstrates my skills in **front-end web development** with JS, HTML and CSS, and the practical integration of **Generative AI** using APIs.

## Features

- **Gift Suggestions**: Generates Christmas gift ideas based on user input (age, category, and keyword).
- **Interactive UI**: Users can input their preferences and instantly receive gift ideas.
- **Dynamic AI Integration**: Utilizes **Falcon-7B** from Hugging Face to generate personalized gift ideas.
- **Mobile-Responsive Design**: The UI is responsive, offering a seamless experience across devices.

## Try It Yourself

Click the link to explore the Christmas Gift Generator: [**Open Demo Here**](https://marcus-rk.github.io/generative-ai/)  

<img width="499" alt="christmas-generative-ai" src="https://github.com/user-attachments/assets/47ead4f5-2711-4bcc-a38d-d9fd8e00ca8e">

---

## Project Structure

```plaintext
generative-ai/
   ├── christmas-gift-icon.png  # Favicon for the website
   ├── index.html               # Main HTML file
   ├── styles.css               # CSS for styling the web application
   ├── main.js                  # JavaScript handling the user interactions and fetching generated gift ideas
   ├── utils.js                 # Utility functions for fetching data from the Hugging Face API
   ├── README.md                # Project documentation
```

---

## Installation

### Prerequisites

- **Node.js** (for local development)
- **Hugging Face API Token** (you can generate one by creating an account at Hugging Face)

### Step-by-Step Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/marcus-rk/generative-ai.git
   cd generative-ai
   ```

2. **Set up the Hugging Face API token**:
- Open utils.js and replace the placeholder API token with your Hugging Face API token:
   ```javascript
   const HUGGINGFACE_TOKEN = "your_huggingface_token_here";
   ```
   
3. **Open index.html**:
In your browser, go to http://localhost:5500 (or the respective port where your server is running).

---

## API Integration

This project utilizes the **Falcon-7B model** from Hugging Face to generate gift ideas. Below is an overview of how the API is integrated:

### 1. Sending a Query

When the user clicks the "Generate" button, the input data (age, category, and keyword) is combined into a single prompt:

```javascript
const queryPrompt = `Generate three Christmas gift ideas. Gift receiver age: ${age}. 
The gift should be a ${category} gift. The gift should be about: ${keyword}`;
```

### 2. Fetching AI-generated Text

The fetchText function sends a POST request to the Hugging Face API using the provided API token for authorization:
```javascript
fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct", {
    headers: {
        Authorization: `Bearer ${HUGGINGFACE_TOKEN}`,
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ "inputs": query }),
})
```

### 3. Fetching AI-generated Text

The AI response is then processed to extract and display the generated gift ideas in the user interface.
```javascript
getGeneratedText(queryPrompt)
    .then(generatedText => {
        // Process and display the generated gift ideas
    })
    .catch(error => {
        console.error(error);
    });
```
