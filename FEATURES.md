# QuickBite - Food Delivery Landing Page

A modern, fully-functional food delivery landing page built with React, TypeScript, and Framer Motion.

## 🎯 Features

### ✅ All Buttons Are Now Functional!

#### Header Navigation
- **Location Button** - Opens location selector modal with:
  - Auto-detect current location
  - Search for areas
  - Popular locations list
  - Real-time location updates in header

- **Sign In Button** - Opens authentication modal with:
  - Sign in / Sign up toggle
  - Email & password authentication
  - Social login (Google, Facebook)
  - Password reset functionality
  - Form validation

- **Order Now Button** - Smart ordering flow:
  - Checks if location is set
  - Prompts for location if needed
  - Opens menu/order modal
  - Shows restaurant menu items
  - Add to cart functionality
  - Checkout process

#### Restaurant Cards
- **Individual Order Buttons** - Opens menu modal for specific restaurant
- **View All Restaurants** - Shows complete restaurant listing

#### Special Offer Banner
- **Claim Offer Now** - Copies promo code & opens order modal
- Automatic clipboard copy of discount code
- Toast notification confirming action

#### Partner CTA Section
- **Become a Partner** - Opens restaurant partner application form with:
  - Restaurant details
  - Owner information
  - Contact information
  - Business description
  - Benefits showcase

- **Join as Driver** - Opens delivery driver application form with:
  - Personal information
  - Vehicle type selection
  - License details
  - Experience description
  - Benefits showcase

#### Navigation
- **Smooth Scrolling** - All navigation links scroll smoothly to sections
- **Mobile Menu** - Fully functional hamburger menu
- **Section Links** - Navigate to: Restaurants, How It Works, Features, Tracking

## 🎨 UI/UX Enhancements

### Interactive Elements
- ✨ Hover animations on all buttons
- 🎯 Scale effects on clickable elements
- 💫 Smooth transitions throughout
- 🌊 Floating animations on hero section
- 🎭 Modal animations with backdrop

### Visual Feedback
- 🔔 Toast notifications for all actions
- ✅ Success messages with emojis
- ℹ️ Informational prompts
- 🎨 Color-coded feedback (success, info, warning)

### Accessibility
- ♿ Keyboard navigation support
- 🎯 Focus indicators on interactive elements
- 📱 Fully responsive design
- 🌓 Dark mode support

### Design System
- **Consistent Gradients** - Brand colors throughout
- **Shadow Effects** - Glow effects for emphasis
- **Custom Scrollbar** - Themed scrollbar styling
- **Smooth Animations** - Framer Motion powered

## 🛠️ Technical Implementation

### Context Management
- `AppContext` - Global state management for modals and user data
- React Context API for state sharing
- Custom hooks for easy access

### Modal Components
1. **LocationModal** - Location selection
2. **SignInModal** - Authentication
3. **OrderModal** - Menu browsing & cart
4. **PartnerModal** - Restaurant partnership
5. **DriverModal** - Driver applications

### Toast Notifications
- Using Sonner for beautiful toast messages
- Positioned top-right for visibility
- Auto-dismiss with custom durations
- Rich content support

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Key Dependencies

- React 18
- TypeScript
- Framer Motion - Animations
- Radix UI - Accessible components
- Tailwind CSS - Styling
- Sonner - Toast notifications
- React Router - Navigation

## 🎯 User Flow

1. **Landing** → User sees hero section
2. **Location** → User sets delivery location
3. **Browse** → User explores restaurants
4. **Order** → User adds items to cart
5. **Checkout** → User completes order

## 🔥 Interactive Features

### Smart Order Flow
- Location validation before ordering
- Context-aware prompts
- Persistent cart state
- Real-time price calculations

### Form Handling
- Client-side validation
- Error handling
- Success confirmations
- Form reset after submission

### Smooth Navigation
- Scroll-to-section functionality
- Active section highlighting
- Mobile-friendly navigation
- Deep linking support

## 🎨 Customization

All colors, gradients, and styles are defined in `src/index.css` using CSS custom properties. Easily customize:

- Brand colors
- Gradients
- Shadows
- Animations
- Transitions

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Adapted layouts for tablets
- **Desktop** - Full desktop experience
- **Touch Friendly** - Large touch targets

## 🌟 Best Practices

- ✅ TypeScript for type safety
- ✅ Accessible components (ARIA labels)
- ✅ SEO friendly structure
- ✅ Performance optimized
- ✅ Code splitting ready
- ✅ Modern React patterns

## 🎭 Animation Details

- **Hero Section** - Floating elements, gradient animations
- **Cards** - Hover lift effects, scale animations
- **Buttons** - Ripple effects, color transitions
- **Modals** - Fade in/out, slide animations
- **Particles** - Food particle effects

## 📄 License

MIT License - Feel free to use for personal or commercial projects

---

Built with ❤️ using modern web technologies
