# 🍽️ Restaurant Management Website name Foddie

![Foddie Image](/src/assets/foddie.png)


A full-stack **Restaurant Management Website** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** to streamline restaurant operations, enhance customer interaction, and provide a seamless user experience.

## 🚀 Live Demo

[Live Site URL](https://foddie-resturant.netlify.app)

## 📚 Table of Contents

- [Foddie](#foddie)
- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Folder Structure](#-folder-structure)

## 📝 About the Project

This Restaurant Management Website allows restaurant owners to manage their menu, streamline food ordering processes, and enhance customer satisfaction through efficient backend and interactive frontend technologies.

Key aspects of the project include:

- **Responsive Design:** Fully responsive on mobile, tablet, and desktop devices.
- **Secure Authentication:** Firebase authentication and JWT token-based authorization.
- **Interactive UI:** User-friendly interfaces with seamless navigation.
- **Data Security:** Secure Firebase and MongoDB credentials with environment variables.

## 🌟 Key Features

1. **Dynamic Navigation:** Navbar with conditional login/logout functionality.
2. **Authentication:** Email-password and Google login.
3. **Food Management:** Add, edit, and delete food items.
4. **Order Management:** Manage user-specific orders with timestamps.
5. **Search and Filter:** Advanced search functionality on the All Foods page.
6. **Theme Toggle:** Switch between light and dark themes.
7. **Pagination:** Backend-driven pagination for better performance.
8. **Gallery Section:** Interactive image gallery with lightbox support.
9. **Error Handling:** Proper alerts and error messages.

## 🛠️ Tech Stack

### Frontend

- **React**: UI Library for building components
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Declarative routing for React
- **DaisyUI**: Tailwind CSS components library

### Backend

- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Dotenv**: Environment variable management
- **JSON Web Token (JWT)**: Authentication and authorization
- **Cors**: Middleware for cross-origin requests
- **Cookie Parser**: Middleware for handling cookies

### State Management

- **TanStack React Query**: Data-fetching and caching library
- **Context API**

### Animations

- **AOS**: Animate on scroll library
- **Lottie React**: Lottie animation player

### Utilities

- **Axios**: Promise-based HTTP client and also interceptor
- **TanStack Query**: manage server-side data fetching, caching, synchronization, and updating with simplicity and efficiency.
- **Moment.js**: Date and time utilities
- **Date-fns**: Modern date library
- **EmailJS**: Email API integration
- **LocalForage**: Client-side storage
- **SweetAlert2**: Beautiful alerts
- **React Photo Album**: Grid image with Showing full details
- **React Helmet**: Dynamic Tittle on the browser tab

### Development Tools

- **ESLint**: JavaScript linting
- **Tailwind CSS**: Styling
- **PostCSS**: CSS transformations

## 💻 Installation

1. **Clone the repository:**
   ```bash
   https://github.com/programming-hero-web-course2/b10a11-client-side-aminul118.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd client
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app in your browser at** `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build project for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the built application

## 📂 Folder Structure

```plaintext
📦 client
├── public        # Static assets
├── src           # Source code
│   ├── assets    # Images, fonts, etc.
│   ├── components # Reusable components
│   ├── pages     # Page components
│   ├── hooks     # Custom React hooks
│   ├── App.jsx   # Main App component
│   └── main.jsx  # Entry point
├── .eslintrc     # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```
