# Real-Time AI Chat App

A real-time chat application where users sign in with Google, send messages, and receive automatic replies from an AI chatbot. Built to practice full-stack integration across authentication, a live database, and a third-party AI API — while keeping sensitive credentials off the client.

## Features

- **Google Sign-In authentication** via Firebase Auth
- **Real-time messaging** — new messages appear instantly for all users via Firestore's live listeners, no refresh needed
- **AI chatbot replies** — every message sent triggers a call to Google's Gemini API, and the response is posted back into the chat as a second participant
- **Auto-scrolling message feed** with smooth animations for new messages
- **Responsive chat bubble UI** styled to visually distinguish the user's own messages from received ones

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Authentication | Firebase Auth (Google provider) |
| Database | Firebase Firestore (real-time listeners via `react-firebase-hooks`) |
| AI Backend | Google Gemini API (`gemini-3.6-flash`) |
| API Hosting | Vercel Serverless Functions |
| Styling | Custom CSS (no framework) |

## Architecture

```
┌─────────────┐      ┌──────────────────┐      ┌─────────────────┐
│   React App  │─────▶│ Firebase Firestore│      │  Vercel Function │
│ (Client)     │      │  (messages store) │      │  /api/chat       │
└─────────────┘      └──────────────────┘      └─────────────────┘
       │                                                  ▲
       │  1. User sends message → written to Firestore    │
       │  2. Message text sent to Vercel function ─────────┘
       │  3. Function calls Google Gemini API
       │  4. Reply written back to Firestore as a new message
       ▼
  All connected clients see both messages appear live
```

**Why a separate serverless function instead of calling the AI API directly from the browser?** Calling a third-party AI API from client-side JavaScript would expose the API key to anyone who opens their browser's dev tools. Instead, the API key lives only in Vercel's server-side environment variables, and the React app calls a small proxy endpoint that keeps the key private.

## What This Project Demonstrates

- **Authentication flows** — implementing OAuth-based sign-in and gating app content based on auth state
- **Real-time data synchronization** — using Firestore listeners to keep multiple clients in sync without polling
- **Secure API integration** — recognizing why client-side API key usage is a security risk, and building a serverless proxy layer to solve it
- **Cloud deployment** — configuring and deploying a serverless backend independently from the frontend, including environment variable management and access control settings
- **Debugging across a full stack** — diagnosing issues spanning React, Firebase SDK configuration, build tooling, and third-party API changes (including adapting to a model deprecation mid-project)
- **Cost-conscious engineering decisions** — evaluating paid vs. free-tier backend options and choosing an architecture that avoided unnecessary billing commitments

## Setup

### Prerequisites
- Node.js and npm
- A Firebase project (Firestore + Authentication enabled, Google sign-in provider turned on)
- A free Google AI Studio API key for Gemini

### Installation

```bash
git clone <your-repo-url>
cd react-chat
npm install
```

Create `src/Firebase.js` with your Firebase project config:

```javascript
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOC_-8xUFOuzvDZGJZZCkKYphK7THax1g",
  authDomain: "my-chat-test001.firebaseapp.com",
  projectId: "my-chat-test001",
  storageBucket: "my-chat-test001.firebasestorage.app",
  messagingSenderId: "471487303873",
  appId: "1:471487303873:web:d109c452c15300f8acc440",
  measurementId: "G-2NY6VGZ846"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
```

### Backend (AI proxy) setup

```bash
cd chat-bot-api
npm install
vercel --prod
```

Add your Gemini API key as an environment variable in the Vercel dashboard under **Settings → Environment Variables**:
```
GEMINI_API_KEY=your_key_here
```

This project's deployed AI proxy is live at `https://chat-bot-api-lemon.vercel.app/api/chat`, and `src/Component/ChatRoom.js` already points `BOT_API_URL` at it. If you fork this project, deploy your own instance and update that constant to your own function's URL.

### Running locally

```bash
npm start
```

## Firestore Security Rules

This project currently uses permissive rules for development purposes:

```
allow read, write: if true;
```

**Note for production use:** these rules should be tightened to require authentication and validate message ownership before deploying publicly.

## Future Improvements

- Add stricter Firestore security rules to prevent spoofed messages
- Add typing indicators
- Support image/file attachments in messages
- Add message editing/deletion