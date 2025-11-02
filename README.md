# 🍔 QuickBite - Lightning Fast Food Delivery

<div align="center">

## Project info

![QuickBite](https://img.shields.io/badge/QuickBite-Fast_Delivery-orange?style=for-the-badge)

**GitHub Repository**: https://github.com/bhanukumardev/food-delivery-quickbite

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)

**🚀 30-Minute Promise | 📱 PWA Enabled | 🎨 Beautiful Animations**

[Live Demo](https://quickbite-motion-delight.vercel.app/) • [Report Bug](https://github.com/bhanukumardev/food-delivery-quickbite/issues) • [Request Feature](https://github.com/bhanukumardev/food-delivery-quickbite/issues)

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

**QuickBite** is a modern, fully responsive food delivery web application that connects users with their favorite Indian restaurants across the country. With real-time order tracking, a 30-minute delivery promise, and stunning animations powered by Framer Motion, QuickBite delivers an exceptional user experience on both desktop and mobile devices.

### 🎪 Live Demo

Experience QuickBite at [https://quickbite-motion-delight.vercel.app/](https://quickbite-motion-delight.vercel.app/)

### ✨ What Makes QuickBite Special?

- • 🚀 **Progressive Web App (PWA)** - Install on any device and use offline
- • ⚡ **Lightning-fast Performance** - Built with Vite and optimized for speed
- • 🎨 **Beautiful Animations** - Smooth, delightful interactions using Framer Motion
- • 📱 **Fully Responsive** - Perfect experience from mobile to desktop
- • 🍕 **5,000+ Partner Restaurants** - Supporting Indian cuisines across major cities
- • 🕒 **30-Minute Guarantee** - Fast delivery promise with 98% on-time rate
- • 🔒 **Type-safe Code** - Built with TypeScript for reliability
- • 🎯 **Modern UI/UX** - Crafted with Tailwind CSS and shadcn/ui

---

## 🚀 Features

### Core Features

#### 🏠 Homepage
- • Hero section with call-to-action
- • Feature highlights with animated cards
- • Popular restaurants showcase
- • Special offers and promotions
- • Interactive delivery promise section

#### 🍽️ Restaurant Discovery
- • Browse 5,000+ Indian partner restaurants
- • Smart search and filtering
- • Category-based navigation
- • Restaurant ratings and reviews
- • High-quality food photography

#### 🛒 Order Management
- • Intuitive cart system
- • Real-time order tracking
- • Multiple payment options
- • Order history
- • Favorite orders

#### 📱 Progressive Web App (PWA)
- • Install on any device (Mobile/Desktop)
- • Offline functionality
- • App-like experience
- • Push notifications support
- • Fast loading with service workers

### Technical Features

- • ⚡ **Vite**: Lightning-fast build tool and dev server
- • ⚛️ **React 18**: Latest React features including concurrent rendering
- • 📘 **TypeScript**: Full type safety throughout the application
- • 🎨 **Tailwind CSS**: Utility-first styling with custom design system
- • 🎭 **Framer Motion**: Smooth animations and transitions
- • 🧩 **shadcn/ui**: High-quality, accessible components
- • 📊 **Recharts**: Data visualization for analytics
- • 📍 **React Router**: Client-side routing
- • 🎯 **React Hook Form**: Efficient form handling
- • ✅ **Zod**: Runtime type validation

---

## 🛠️ Tech Stack

### Frontend Framework
- • **React 18.3** - UI Library
- • **TypeScript 5.8** - Type Safety
- • **Vite 5.4** - Build Tool

### Styling
- • **Tailwind CSS 3.4** - Utility-first CSS Framework
- • **shadcn/ui** - Re-usable Components
- • **Lucide React** - Beautiful Icons

### Animation & UX
- • **Framer Motion** - Animation Library
- • **React Intersection Observer** - Viewport Detection

### Form & Validation
- • **React Hook Form** - Form Management
- • **Zod** - Schema Validation

### Data Visualization
- • **Recharts** - Chart Library

### Routing
- • **React Router DOM** - Client-side Routing

### PWA Support
- • **Vite PWA Plugin** - Progressive Web App Configuration
- • **Workbox** - Service Worker Management

### Development Tools
- • **ESLint** - Code Linting
- • **PostCSS** - CSS Processing
- • **Autoprefixer** - CSS Vendor Prefixing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
node --version  # v18.0.0 or higher
npm --version   # v9.0.0 or higher
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/bhanukumardev/food-delivery-quickbite.git
cd food-delivery-quickbite
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 💻 Usage

### Development

1. **Start the dev server**
```bash
npm run dev
```

2. **Make your changes** - Hot reload is enabled by default

3. **Build for production**
```bash
npm run build
```

### Project Structure

```
food-delivery-quickbite/
├── public/              # Static assets
│   ├── icons/          # PWA icons
│   └── manifest.json   # PWA manifest
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   └── ...        # Feature components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # Global styles
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── index.html
├── package.json
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

---

## 📱 PWA Installation

### On Mobile (iOS/Android)

1. Visit [https://quickbite-motion-delight.vercel.app/](https://quickbite-motion-delight.vercel.app/) in your mobile browser
2. Tap the **Share** button (iOS) or **Menu** (Android)
3. Select **"Add to Home Screen"**
4. Confirm the installation
5. Launch QuickBite from your home screen

### On Desktop (Chrome/Edge)

1. Visit [https://quickbite-motion-delight.vercel.app/](https://quickbite-motion-delight.vercel.app/) in Chrome or Edge
2. Look for the **Install** icon in the address bar
3. Click **Install** when prompted
4. QuickBite will open in its own window
5. Access it from your applications or desktop

### PWA Features

- • ⚡ **Offline Access** - Browse cached content without internet
- • 📲 **Install on Device** - App-like experience on any platform
- • 🔔 **Push Notifications** - Get updates on orders and offers
- • 🚀 **Fast Loading** - Service workers cache assets for instant loading
- • 💾 **Background Sync** - Sync data when connection is restored

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel**
- • Go to [vercel.com](https://vercel.com)
- • Click **"New Project"**
- • Import your GitHub repository
- • Vercel will auto-detect Vite configuration
- • Click **"Deploy"**

3. **Environment Variables** (if needed)
```
VITE_API_URL=your_api_url
VITE_APP_NAME=QuickBite
```

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Current Deployment

- • **Live URL**: [https://quickbite-motion-delight.vercel.app/](https://quickbite-motion-delight.vercel.app/)
- • **Platform**: Vercel
- • **Status**: ✅ Active
- • **Automatic Deployments**: Enabled on push to `main`

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
```bash
gh repo fork bhanukumardev/food-delivery-quickbite
```

2. **Create your Feature Branch**
```bash
git checkout -b feature/AmazingFeature
```

3. **Commit your Changes**
```bash
git commit -m 'Add some AmazingFeature'
```

4. **Push to the Branch**
```bash
git push origin feature/AmazingFeature
```

5. **Open a Pull Request**

### Contribution Guidelines

- • Use conventional commit messages
- • Write meaningful comments
- • Test on multiple devices
- • Ensure accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

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

- • **5,000+** Indian Partner Restaurants
- • **2 Lakh+** Satisfied Customers
- • **4.8★** Average Rating
- • **98%** On-time Delivery Rate
- • **Serving** Major cities across India

---

### Made with ❤️ and ☕

**[⬆ Back to Top](#-quickbite---lightning-fast-food-delivery)**
