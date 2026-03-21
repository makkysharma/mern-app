# MERN AI Chat Application
A full-stack MERN application that allows users to send prompts to an AI model and receive responses in a clean chat style interface. The app also supports saving conversations and viewing them later from a sidebar.

## Project
Github:  https://github.com/makkysharma/chatbot.git
Live preview: https://mern-app-pi-teal.vercel.app
YouTube video: 

##  Project Overview
    This project demonstrates the integration of:
    Frontend (React + Tailwind)
    Backend (Node.js / Next.js API)
    Database (MongoDB)
    AI API (OpenRouter)

## We can:
    Enter a prompt
    Get AI generated responses
    Save conversations
    View previous chats in sidebar


## Core Features

AI prompt → response system
Backend API integration
MongoDB data storage
Save prompt & response



## Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Node.js (Next.js API Routes)
Database: MongoDB
AI API: OpenRouter
Icons: Lucide React

---

## Application Flow

1. User enters a prompt
2. Clicks Send
3. Frontend sends request to `/api/ask-ai`
4. Backend:
   a. Applies rate limiting
   b. Sends request to OpenRouter
   c. Returns response
5. Response displayed in chat UI
6. User can save conversation
7. Sidebar updates instantly on saving


## Database Schema

```json
{
  "prompt": "string",
  "response": "string",
  "createdAt": "date"
}
```

---

## Rate Limiting

Limit: 10 requests per minute per user
Implemented using in-memory logic
Returns:

```json
{
  "error": "Too many requests. Try again later."
}
```

---

##  Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd mern-ai-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
OPENROUTER_API_KEY=your_api_key_here
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the app

```bash
npm run dev
```

##  Project Structure

```
/components
  Card.jsx
  Sidebar.jsx
  SidebarCard.jsx

/lib
  api.js
  rateLimiter.js
  openrouter.js

/app
  page.js
  /api
    ask-ai
    save
    data
```

---

## Future Improvements

Add authentication (user-based chats)
Persistent rate limiting using Redis
Streaming AI responses
Chat renaming & deletion
Deployment optimizations


