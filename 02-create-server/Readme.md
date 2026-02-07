# Node.js HTTP Server Basics

## 📌 Overview
This project demonstrates the basic working of a Node.js backend server using the built-in HTTP module. It explains how frontend and backend communicate using HTTP requests and responses.

---

## 🧠 What I Learned
- How to create a server using Node.js
- How frontend sends requests to the backend
- How backend sends responses to the frontend
- How to handle different routes using `req.url`
- How to send JSON data using `JSON.stringify()`

---

## 🛠 Technologies Used
- Node.js
- HTTP module

---

## 🚀 How It Works
1. Browser sends a request to the server
2. Server receives the request
3. Server checks the request URL
4. Server prepares the response
5. Server sends the response back to the browser

---

## 📂 Routes
- `/` → Returns a simple text message
- `/news` → Returns JSON data

---

## ▶️ How to Run
1. Install Node.js
2. Clone this repository
3. Run the server:
   ```bash
   node server.js
