# 🍔 QuickBite - Lightning Fast Food Delivery

<div align="center">

## Project info

![QuickBite](https://img.shields.io/badge/QuickBite-Fast_Delivery-orange?style=for-the-badge)

**GitHub Repository**: https://github.com/bhanukumardev/food-delivery-quickbite

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)

**🚀 30-Minute Promise | 📱 PWA Enabled | 🎨 Beautiful Animations**

[Live Demo](https://food-delivery-quickbite.vercel.app/) • [Report Bug](https://github.com/bhanukumardev/food-delivery-quickbite/issues) • [Request Feature](https://github.com/bhanukumardev/food-delivery-quickbite/issues)

</div>

---

## 📋 Table of Contents

- • [About](#about)
- • [Features](#features)
- • [Tech Stack](#tech-stack)
- • [Getting Started](#getting-started)
- • [Installation](#installation)
- • [Usage](#usage)
- • [PWA Installation](#pwa-installation)
- • [Deployment](#deployment)
- • [Contributing](#contributing)
- • [License](#license)

## 🎯 About

**QuickBite** is a modern, fully responsive food delivery web application that connects users with their favorite local restaurants. With real-time order tracking, a 30-minute delivery promise, and stunning animations powered by Framer Motion, QuickBite delivers an exceptional user experience on both desktop and mobile devices.

### ✨ Highlights

- • 🏃 **Lightning Fast**: Built with Vite for optimal performance
- • 📱 **PWA Ready**: Install on any device for native-like experience
- • 🎨 **Beautiful UI**: Crafted with Tailwind CSS and shadcn/ui components
- • 🔄 **Real-time Tracking**: Monitor your order from restaurant to doorstep
- • 🌙 **Dark Mode**: Seamless theme switching
- • ♿ **Accessible**: WCAG compliant design

## 🚀 Features

### Core Features

- • ✅ Browse 500+ local restaurants
- • ✅ Real-time order tracking with live map
- • ✅ 30-minute delivery guarantee
- • ✅ Multiple payment options
- • ✅ Customer reviews and ratings (4.8★ average)
- • ✅ Special offers and discounts
- • ✅ Partner restaurant dashboard

### Technical Features

- • ⚡ Lightning-fast performance with Vite
- • 🎭 Smooth animations with Framer Motion
- • 📊 State management with TanStack Query
- • 🎨 Modern UI with shadcn/ui components
- • 🔍 SEO optimized with meta tags
- • 📱 Progressive Web App (PWA) support
- • 🌐 Fully responsive design
- • ♿ Accessibility compliant

## 🛠️ Tech Stack

### Frontend

- • **Framework**: React 18.3
- • **Language**: TypeScript 5.8
- • **Build Tool**: Vite 5.4
- • **Styling**: Tailwind CSS 3.4
- • **UI Components**: shadcn/ui (Radix UI)
- • **Animations**: Framer Motion 11.18
- • **3D Graphics**: React Three Fiber
- • **Routing**: React Router DOM 6.30

### State Management & Data

- • **Query Management**: TanStack Query 5.83
- • **Form Handling**: React Hook Form 7.61
- • **Validation**: Zod 3.25

### Development Tools

- • **Linting**: ESLint 9.32
- • **Type Checking**: TypeScript
- • **Package Manager**: npm

## 🚦 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- • **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- • **npm** (v9 or higher) - Comes with Node.js
- • **Git** - [Download](https://git-scm.com/)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/bhanukumardev/food-delivery-quickbite.git

# Navigate to project directory
cd food-delivery-quickbite

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Installation

### Detailed Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bhanukumardev/food-delivery-quickbite.git
   cd food-delivery-quickbite
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   ```bash
   # Create .env file if needed
   cp .env.example .env
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

### Alternative: Using pnpm or yarn

```bash
# Using pnpm
pnpm install
pnpm dev

# Using yarn
yarn install
yarn dev
```

## 💻 Usage

### Available Scripts

```bash
# Start development server (port 5173)
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Project Structure

```
food-delivery-quickbite/
├── public/                # Static assets
├── src/
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

## 📱 PWA Installation

QuickBite can be installed as a Progressive Web App on any device:

### On Mobile (iOS/Android)

1. Open [https://food-delivery-quickbite.vercel.app/](https://food-delivery-quickbite.vercel.app/) in your browser
2. Tap the browser menu (⋮ or share icon)
3. Select "Add to Home Screen" or "Install App"
4. Confirm installation

### On Desktop (Chrome/Edge)

1. Visit [https://food-delivery-quickbite.vercel.app/](https://food-delivery-quickbite.vercel.app/)
2. Look for the install icon (⊕) in the address bar
3. Click "Install" when prompted
4. The app will open in its own window

### PWA Features

- • 📴 Offline functionality
- • 🔔 Push notifications (coming soon)
- • 🏠 Home screen icon
- • 📲 Native app experience
- • ⚡ Faster load times

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Using Vercel CLI**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Using Vercel Dashboard**
   - Visit [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Configure build settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click "Deploy"

3. **Current Deployment**
   - Live URL: [https://food-delivery-quickbite.vercel.app/](https://food-delivery-quickbite.vercel.app/)
   - Auto-deploys on push to `main` branch

### Deploy to Other Platforms

<details>
<summary>Netlify</summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```
</details>

<details>
<summary>GitHub Pages</summary>

1. Add to `vite.config.ts`:
   ```ts
   base: '/food-delivery-quickbite/'
   ```
2. Build: `npm run build`
3. Deploy the `dist` folder to `gh-pages` branch
</details>

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- • Follow TypeScript best practices
- • Use conventional commit messages
- • Write meaningful comments
- • Test on multiple devices
- • Ensure accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bhanu Kumar**

- • GitHub: [@bhanukumardev](https://github.com/bhanukumardev)
- • Project Link: [QuickBite Food Delivery](https://github.com/bhanukumardev/food-delivery-quickbite)

## 🙏 Acknowledgments

- • [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- • [React](https://react.dev/) - UI Library
- • [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- • [shadcn/ui](https://ui.shadcn.com/) - Re-usable Components
- • [Framer Motion](https://www.framer.com/motion/) - Animation Library
- • [Lucide Icons](https://lucide.dev/) - Beautiful Icons

## 📊 Project Stats

- • **500+** Partner Restaurants
- • **50k+** Happy Users
- • **4.8★** Average Rating
- • **98%** On-time Delivery Rate

---

### Made with ❤️ and ☕

**[⬆ Back to Top](#-quickbite---lightning-fast-food-delivery)**
