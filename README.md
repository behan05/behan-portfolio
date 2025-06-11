# Behan Portfolio

A modern, full-stack developer portfolio website that highlights my skills, projects, and professional profile. Built with **React + Material UI** on the frontend and **Node.js + Express** on the backend, this portfolio is designed for performance, clarity, and real-world functionality — ideal for job applications and networking.

## 🌐 Live Preview

🔗 [Visit Live Portfolio](https://your-live-site-url.com) <!-- comming soon -->

---

## 🚀 Features

- ✅ **About Me** – Introduction with career summary
- 🛠 **Tech Stack** – Tools and technologies I use
- 📁 **Projects Showcase** – Featured work with live links and GitHub code
- 📄 **Resume Download** – Downloadable resume PDF
- 📨 **Contact Form** – Email delivery with backend handling
- 🌓 **Dark/Light Mode** – Theme toggle (optional)
- ✍️ **Blog Section** – (Optional) Posts fetched from backend API

---

## 🛠 Tech Stack

### Frontend:
- React
- Material UI (MUI)
- React Router
- EmailJS (for fallback client-side contact)

### Backend:
- Node.js
- Express.js
- Nodemailer (for secure email handling)
- MongoDB (optional – for storing messages or blogs)
- dotenv (for environment configs)
- CORS

---

## 📂 Project Structure

```
behan-portfolio/
├── client/
│ ├── public/
│ │ ├── index.html
│ │ └── favicon.ico
│ └── src/
│ ├── assets/ # Images, logos
│ ├── components/ # Reusable UI components
│ ├── pages/ # About, Projects, Contact, Resume
│ ├── theme/ # MUI theme customization
│ ├── App.jsx # Main layout and routing
│ └── main.jsx # Entry point
├── server/
│ ├── controllers/ # Logic for email or blog routes
│ ├── routes/ # Express routes
│ ├── middlewares/ # Optional: CORS, validation, etc.
│ ├── config/ # Email, DB config
│ ├── server.js # Main entry point
│ └── .env # Environment variables
├── package.json
├── .gitignore
└── README.md
```

```
---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/behan05/behan-portfolio.git
cd behan-portfolio

# Start the backend
cd server
npm install
npm run dev

# Start the frontend
cd ../client
npm install
npm run dev

```

## Make sure to set up a .env file in /server with:
```bash
PORT=5000
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password

```

📝 License
This project is licensed under the MIT License

MIT License © 2025 Behan Kumar  
Email: behankrbth@outlook.com
