# trip-trek
Full-stack tour booking application (React + Node)
# Trip Trek – Full Stack Tour Booking App

Trip Trek is a simple full-stack tour booking demo application built using **React (Vite)** for the frontend and **Node.js + Express** for the backend.  
It demonstrates API handling, UI development, component structure, and a basic booking workflow.

---

## 🚀 Features
- Fetch tour packages from backend API
- Display destination, price, duration, and location
- Basic booking flow (name + email)
- React component architecture
- REST API using Express
- CORS-enabled backend
- Clean folder separation (frontend + backend)

---

## 🛠 Tech Stack

### **Frontend**
- React  
- Vite  
- JavaScript  

### **Backend**
- Node.js  
- Express  
- CORS  

---

## 📁 Folder Structure

trip-trek/
backend/
server.js
routes/
tours.js
package.json
frontend/
src/
App.jsx
main.jsx
package.json
index.html

yaml
Copy code

---

## ▶️ Run Locally

### 1️⃣ Start Backend
cd backend
npm install
npm start

yaml
Copy code

Runs at:  
`http://localhost:5000`

---

### 2️⃣ Start Frontend
cd frontend
npm install
npm run dev

yaml
Copy code

Runs at:  
`http://localhost:5173`

---

## 📌 API Endpoints

### **GET /api/tours**
Returns tour list

### **POST /api/tours/book**
Sends booking request  
Sample body:
```json
{
  "tourId": 1,
  "name": "Durga",
  "email": "example@gmail.com"
}

