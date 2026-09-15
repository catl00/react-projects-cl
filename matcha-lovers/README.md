# 🍵 Matcha Lovers

A modern React web application built with Vite — designed for ordering ahead, locating nearby store locations, and accessing rewards for matcha drinks.

---

## ✨ Features

* **Interactive Store & Location Finder:** Integrated map interface using Leaflet and OpenStreetMap for interactive store location searches and geolocation tracking.
* **Order & Fulfillment Options:** Dedicated ordering modal supporting both pick-up and delivery modes with dynamic location input[cite: 6].
* **User Rewards & Authentication:** Integrated authentication modal for account login, user signup, social account integration (Google/Facebook), and password visibility toggling.
* **Reusable UI Components:** Component-driven design architecture including customizable item cards, navigation bars, and modals[cite: 1, 3, 5, 6].
* **Fast Performance:** Powered by Vite for instant Hot Module Replacement (HMR) and fast development builds.

---

## 🛠️ Tech Stack & Key Libraries

* **Frontend Framework:** React.js (Functional Components, State Hooks, Effects)[cite: 2, 3, 4, 5, 6]
* **Build Tool:** Vite[cite: 5]
* **Mapping & Geolocation:** Leaflet, React Leaflet, and OpenStreetMap API[cite: 6]
* **Styling:** Custom modular CSS stylesheets[cite: 2, 3, 5, 6]
* **Icons & Assets:** Custom asset management for UI branding and social authentication icons[cite: 3, 5, 6]

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have **Node.js** (v18+ recommended) and **npm** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/catl00/matcha-lovers.git](https://github.com/catl00/matcha-lovers.git)
Navigate into the project directory:

Bash
cd matcha-lovers
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open the local URL displayed in your terminal (usually http://localhost:5173) to view the app!

📂 Project Structure
```
matcha-lovers/
├── public/
│   └── matcha logo.png      # Public static images and assets
├── src/
│   ├── assets/
│   │   ├── fonts/           # Custom font files
│   │   └── images/          # UI icons and image assets (Google, Facebook, etc.)
│   ├── components/
│   │   ├── card.jsx         # Item card component for menu items
│   │   ├── home.jsx         # Main home hero and landing sections
│   │   ├── login-signup.jsx # Authentication modal component
│   │   ├── menu.jsx         # Drink menu container component
│   │   ├── navigation.jsx   # Top navigation bar component
│   │   └── order.jsx        # Order modal component with Leaflet map
│   ├── json/
│   │   └── menu.json        # Menu dataset configuration
│   ├── styles/
│   │   ├── home.css         # Home section styles
│   │   ├── login-signup.css # Login modal styles
│   │   ├── navigation.css   # Navigation bar styles
│   │   └── order.css        # Order modal & map container styles
│   ├── App.jsx              # Main application root component
│   ├── index.css            # Global CSS styles
│   └── main.jsx             # Vite application entry point
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML document shell
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── vite.config.js           # Vite build configuration
```
