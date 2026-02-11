# 04 - HTTP Methods (Express.js)

## What This Folder Is About

In this part of my backend development journey, I learned:

1. What are HTTP methods  
2. Difference between GET and POST  
3. How frontend sends data to backend  
4. Difference between Body, Query, and Params  
5. Why login uses POST + Body  
6. Common backend errors and how to fix them  

---

## What Are HTTP Methods?

HTTP methods tell the server what action we want to perform.

When the frontend talks to the backend, it sends a request using a specific HTTP method.

### Types of HTTP Methods

- GET  
- POST  
- PUT  
- PATCH  
- DELETE  

---

## GET Method

GET is used to retrieve data from the server.

**Real-life example:** View a post  

**Use cases:**
- View a post  
- Get products  
- Fetch data from database  

---

## POST Method

POST is used to send data to the server.

**Real-life example:** Create a new post  

**Use cases:**
- Login  
- Register  
- Submit form  
- Create new data  

---

## Login Example

Suppose a login form has:

- Username  
- Password  

When the user clicks login:

- Data should go using **POST**
- Data should go inside the **Body**

### Why?

- Password should not be visible in the URL  
- Body data is not exposed like query parameters  
- It follows REST principles  

---

## 3 Ways Data Can Be Sent to Backend

1. Body  
2. Query Parameters  
3. Route Params (Dynamic Routes)  

---

## Errors I Faced and Fixed

1. **Cannot GET /login**  
   - Reason: Browser sends GET request, but I only created POST route.

2. **Cannot find module 'express'**  
   - Reason: Express was not installed in that folder.

3. **EADDRINUSE (Port already in use)**  
   - Reason: Same port was already running.

---

## Key Learnings

1. Browser address bar only sends GET request.  
2. POST is used for secure data submission (when combined with HTTPS).  
3. Query parameters start with `?` and use `&` for multiple values.  
4. Params are used for identifying specific resources.  
5. Backend errors provide logical debugging clues.  
6. Each project folder needs its own `node_modules`.  

---

## Conclusion

This folder helped me understand:

- Basic backend routing  
- HTTP methods  
- How frontend sends data  
- How Express receives data  
- How to debug common backend errors  
