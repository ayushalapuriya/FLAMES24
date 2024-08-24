// script.js

// Get all exercise titles
const exerciseTitles = document.querySelectorAll('.exercise-title');

// Loop through each exercise title and add click event listener
exerciseTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Toggle the visibility of exercise details (next sibling element)
        title.nextElementSibling.classList.toggle('show');
    });
});



// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyCAezDo1jE1D10Rx18iFlCw0fhLed_t08Y");

// async function run() {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();