# AI-Powered Text Processing Interface

## 🚀 Overview

An AI-powered text processing interface that allows users to input text and leverage Chrome's AI APIs for:

- **Language Detection**
- **Summarization** (for now just for English text over 150 characters)
- **Translation**

The UI is designed to be chat-like, responsive, and accessible.

---

## 🎯 Features

### 🔹 Core Functionality

- **Chat-like UI**: User inputs appear in an output area similar to a messaging app.
- **Language Detection**: Displays detected language below the input text.
- **Summarization**: If text exceeds 150 characters, a "Summarize" button appears (only for English text).
- **Translation**: Users can translate text using a dropdown language selector and "Translate" button.
- **Asynchronous API Calls**: Handles processing via Chrome AI APIs, ensuring smooth user interactions.
- **Error Handling**: Displays clear messages for empty inputs, API failures, and invalid text.

### 🎨 UI/UX Considerations

- **Large, user-friendly text area** for input.
- **Accessible components** with ARIA labels, keyboard navigation, and focus indicators.
- **Responsive design**

---

## 🛠️ Technologies Used

- **Frontend**: Javascript, Next.js, Zod
- **APIs**: Chrome AI APIs (Summarizer, Translator, Language Detection)
- **Deployment**: Vercel

---

## 📌 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your chrome browser.

---

## 🔧 Chrome Requirements

### Browser Compatibility

- These APIs are currently exclusive to Chrome, with plans to standardize them across browsers.

### Supported Features & Platforms

- **Summarizer API**: Requires Gemini Nano and runs locally on desktop/laptop computers. Not supported on mobile devices.
- **Language Detection and Translation APIs**: Available on both desktop and Android devices within Chrome.

### Hardware Requirements

- **Operating Systems**: Windows 10 or 11, macOS 13+ (Ventura and onwards), or Linux.
- **Storage**: At least 22 GB of free space on the volume containing your Chrome profile.
- **Network**: Unlimited data or an unmetered connection is recommended.

For comprehensive details, refer to the [Chrome AI Documentation](https://developer.chrome.com/docs/ai).

---

## 📚 Additional Resources

- [Chrome AI APIs Overview](https://developer.chrome.com/docs/ai/)
- [Summarizer API Documentation](https://developer.chrome.com/docs/ai/summarizer-api)
- [Translator API Documentation](https://developer.chrome.com/docs/ai/translator-api)
- [Language Detection API Documentation](https://developer.chrome.com/docs/ai/language-detection)

> **Note:** Enable experimental feature flags in Chrome to access these APIs.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
