# EchoJournal

# Next-Gen Blog Website

![Blog Website Screenshot](https://i.ibb.co/MyHtzFmR/Screenshot-2025-06-25-105204.png)

---

## 📌 Project Overview

Next-Gen Blog Website is a modern, full-featured, and mobile-responsive blog platform. Users can create, update, and browse blogs, manage wishlists, comment on others' posts, and explore featured blogs with sortable tables. It’s optimized for user experience, performance, and visual design—ideal for showcasing your front-end skills.

---

## 🚀 Live Demo

🔗 [Live Site](https://assignment-11-f3a27.web.app/)

---

## ⚙️ Technology Stack

- **React** – Frontend UI
- **Firebase** – Auth, hosting, and database
- **Node.js & Express** – Backend server and API
- **MongoDB** – Database for blogs, comments, wishlist
- **JWT** – Securing private routes
- **Framer Motion** – UI animations
- **TanStack Table** – Sortable data tables
- **Daisy UI** – Component library
- **React Photo View** – Fullscreen image preview
- **React Intersection Observer** – Scroll-based animation triggers

---

## ✨ Key Features

- 🔒 Private routes using JWT
- 📝 Blog creation, update, and category filtering
- 💬 Blog comments (except on own blog)
- ❤️ Wishlist add/remove per user
- 🔍 Blog search with MongoDB full-text search
- 📊 Featured blogs based on word count, shown in a sortable table
- 📩 Newsletter input with toast message
- 🖼️ Fullscreen blog image preview
- 🌀 Smooth UI transitions with Framer Motion
- 📱 Fully responsive for mobile, tablet, and desktop

---

## 📦 Dependencies

**Client:**

- `react`, `react-router-dom`, `firebase`, `framer-motion`
- `@tanstack/react-table`, `react-hook-form`, `axios`
- `react-photo-view`, `react-intersection-observer`
- `daisy-ui/react`

**Server:**

- `express`, `cors`, `dotenv`, `mongoose`
- `firebasetoken`

---

## 🧑‍💻 Getting Started

### ✅ Prerequisites

- Node.js & npm installed
- Firebase project set up
- MongoDB cluster or local DB set up

---

### 📁 Installation

#### Clone the repository:

```bash
git clone https://github.com/yourusername/your-blog-repo.git

# Install dependencies for client
cd echojournal/client
npm install

# Install dependencies for server
cd ../server
npm install
```

---

## 🔐 Environment Setup

#### Client (.env)

```env
VITE_API_URL=https://your-server-url.com
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

#### Server (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

▶️ Running Locally

#### Start backend server:

```
cd echojournal/server
npm run start
```

#### Start frontend React client:

```
cd ../client
npm run dev
Then open your browser and go to 👉 http://localhost:3000
```

## 🔗 Relevant Links

📑 Beeceptor(CRUD) : https://beeceptor.com/docs/crud-api/

🔥 Firebase Docs: https://firebase.google.com/docs
