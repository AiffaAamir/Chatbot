

# React + Vite Chat App with Gemini 2 API

This is a minimal React app bootstrapped with Vite, featuring a chat interface powered by Google's Gemini 2 API for AI-generated responses. It leverages React hooks, axios for HTTP requests, and Framer Motion for smooth animations.

---

## Features

* **React + Vite:** Fast, modern frontend setup with HMR.
* **AI Chatbot:** Sends user questions to the Gemini 2 generative language model API and displays AI responses.
* **Animated UI:** Smooth chat bubble and typing indicator animations powered by [Framer Motion](https://www.framer.com/motion/).
* **Markdown Support:** Renders AI responses as Markdown using [React Markdown](https://github.com/remarkjs/react-markdown).
* **User & Bot Avatars:** Displays distinct avatars for user and bot messages.
* **Typing Indicator:** Shows an animated "AI is typing..." indicator while waiting for the API response.

---

## Installation

1. Clone this repo and navigate to the project folder:

   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

---

## Usage

* Type a question in the input box.
* Press the send button or hit Enter to submit.
* The AI will generate an answer using the Gemini 2 API.
* Responses are rendered with Markdown support and displayed with smooth animations.
* If there is an error, a friendly error message will show.

---

## Important Notes

* **API Key:** The API key is currently hardcoded in the source for demo purposes. Replace the key in the Axios request with your own Google Cloud API key to avoid unauthorized usage.
* **Environment:** For production use, store API keys securely in environment variables.
* **ESLint:** This template includes basic ESLint rules. For production-grade apps, consider adding TypeScript with `typescript-eslint` for enhanced type-aware linting.
* **Customization:** You can swap out avatars, styles, or animation settings in the source files (`App.css` and `App.jsx`).

---

## Dependencies

* React
* Vite
* axios
* framer-motion
* react-markdown

---

## Extending the ESLint Configuration

For a production application, it's recommended to use TypeScript with type-aware lint rules enabled. Check out the [Vite React TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and [`typescript-eslint`](https://typescript-eslint.io) documentation for guidance.

---






