# 🎨 CSS & Styling Enhancements

## Custom Properties (CSS Variables)

### Brand Colors (HSL Format)
```css
--primary: 15 85% 55%       /* Orange - Main brand color */
--secondary: 145 70% 45%    /* Green - Fresh food accent */
--accent: 45 95% 55%        /* Yellow - Highlights */
--background: 40 40% 98%    /* Soft cream background */
--foreground: 20 15% 10%    /* Dark text */
```

### Gradients
```css
--gradient-hero: linear-gradient(135deg, Orange → Yellow)
--gradient-food: linear-gradient(120deg, Orange → Red → Yellow)
--gradient-fresh: linear-gradient(135deg, Green → Teal)
```

### Shadows
```css
--shadow-glow: 0 8px 32px hsla(15, 85%, 55%, 0.3)  /* Orange glow */
--shadow-card: 0 4px 20px hsla(20, 15%, 10%, 0.08) /* Subtle depth */
```

### Transitions
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

## Utility Classes

### Gradients
```css
.gradient-hero     /* Orange to Yellow gradient */
.gradient-food     /* Orange-Red-Yellow food gradient */
.gradient-fresh    /* Green to Teal fresh gradient */
```

### Text Gradients
```css
.gradient-text-food   /* Gradient text with fallback */
.gradient-text-fresh  /* Green gradient text */
```

### Shadows
```css
.shadow-glow  /* Orange glow effect */
.shadow-card  /* Subtle card shadow */
```

### Animations
```css
.animate-float         /* Floating up/down (3s) */
.animate-bounce-subtle /* Subtle bounce (2s) */
.animate-pulse-slow    /* Slow pulse (3s) */
```

---

## Custom Scrollbar

### Design
```css
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--muted);        /* Light gray track */
}

::-webkit-scrollbar-thumb {
  background: var(--primary);      /* Orange thumb */
  border-radius: 6px;
  border: 2px solid var(--muted);  /* Border for spacing */
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.8);  /* Lighter on hover */
}
```

---

## Smooth Transitions

### Global Smooth Behavior
```css
html {
  scroll-behavior: smooth;  /* Smooth page scrolling */
}

button, a, input, textarea, select {
  transition: var(--transition-smooth);  /* 300ms ease */
}
```

---

## Accessibility Features

### Focus States
```css
button:focus-visible, 
a:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
```

### Purpose
- Visible keyboard navigation
- Accessible to screen readers
- WCAG 2.1 compliant

---

## Keyframe Animations

### 1. Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-20px); }
}
```
**Used on:** Hero section food images, decorative elements

### 2. Bounce Subtle
```css
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-10px); }
}
```
**Used on:** Call-to-action elements, feature cards

### 3. Pulse Slow
```css
@keyframes pulse-slow {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.05); 
  }
}
```
**Used on:** Attention-grabbing elements, badges

---

## Dark Mode Support

### Colors Automatically Adjust
```css
.dark {
  --background: 20 15% 10%       /* Dark background */
  --foreground: 40 40% 98%       /* Light text */
  --card: 20 20% 14%             /* Dark cards */
  --muted: 20 15% 18%            /* Muted dark */
  --border: 20 15% 22%           /* Dark borders */
  --shadow-glow: /* Brighter glow in dark */
  --shadow-card: /* Darker card shadow */
}
```

---

## Button Variants (from button.tsx)

### Hero Variant
```tsx
hero: "gradient-hero text-white shadow-glow 
       hover:shadow-[0_12px_40px_hsla(15,85%,55%,0.4)] 
       hover:scale-105 transition-all duration-300 
       font-semibold text-base"
```
**Features:**
- Orange gradient background
- White text
- Glow shadow
- Scale on hover (1.05)
- Smooth 300ms transition

### Hero Outline Variant
```tsx
hero-outline: "border-2 border-white/30 bg-white/10 
               backdrop-blur-sm text-white 
               hover:bg-white/20 hover:border-white/50 
               transition-all duration-300"
```
**Features:**
- Glass morphism effect
- Backdrop blur
- Subtle white border
- Opacity transitions

---

## Component-Specific Styling

### Modal Animations
```tsx
// Framer Motion variants
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 20 }}
```

### Card Hover Effects
```tsx
whileHover={{ y: -10 }}  // Lift effect
transition={{ duration: 0.3 }}
```

### Button Interactions
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## Responsive Breakpoints

### Tailwind Defaults Used
```css
sm:  640px   /* Small devices */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (desktops) */
xl:  1280px  /* Extra large */
2xl: 1536px  /* Ultra wide */
```

### Example Usage
```tsx
className="text-sm md:text-base lg:text-lg"
// Text scales up on larger screens

className="grid md:grid-cols-2 lg:grid-cols-3"
// 1 column mobile, 2 tablet, 3 desktop
```

---

## Typography Scale

### Headings
```css
h1: text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
h2: text-3xl sm:text-4xl md:text-5xl
h3: text-2xl font-bold
h4: font-semibold
```

### Body Text
```css
Default: text-base (16px)
Large: text-lg (18px)
Small: text-sm (14px)
Tiny: text-xs (12px)
```

---

## Spacing System

### Consistent Padding/Margins
```css
Section padding: py-20 (5rem top/bottom)
Container padding: px-4 (1rem sides)
Card padding: p-6 or p-8
Gap between elements: gap-4 to gap-8
```

---

## Border Radius

### Global Radius Variable
```css
--radius: 1rem;  /* 16px rounded corners */
```

### Usage
```css
.rounded-lg   /* 0.5rem */
.rounded-xl   /* 0.75rem */
.rounded-2xl  /* 1rem */
.rounded-3xl  /* 1.5rem */
.rounded-full /* Perfect circle */
```

---

## Color Opacity Modifiers

### Tailwind Alpha Syntax
```tsx
bg-primary/10    /* 10% opacity */
bg-white/20      /* 20% opacity */
border-white/30  /* 30% opacity */
text-black/50    /* 50% opacity */
```

---

## Special Effects

### Backdrop Blur (Glass Morphism)
```css
backdrop-blur-sm   /* Subtle blur */
backdrop-blur-lg   /* Strong blur */
```

### Drop Shadow
```css
drop-shadow-2xl    /* Large dramatic shadow */
shadow-glow        /* Custom glow effect */
```

### Gradients on Text
```css
background: linear-gradient(...)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

---

## Performance Considerations

### GPU-Accelerated Properties
- `transform` (scale, translate, rotate)
- `opacity`
- `filter` (blur, backdrop-blur)

### Avoided for Performance
- `width/height` animations
- `top/left/right/bottom` animations
- Heavy `box-shadow` animations

---

## Browser Compatibility

### Supported Features
✅ CSS Custom Properties (IE11+)
✅ Flexbox (All modern browsers)
✅ Grid (All modern browsers)
✅ Backdrop-filter (Most modern, graceful degradation)
✅ Smooth scroll (Most modern, fallback to instant)

---

## Tailwind Config Extensions

### Custom Colors Added
```typescript
colors: {
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... more
}
```

---

## Best Practices Applied

1. **CSS Variables** - Easy theming
2. **HSL Colors** - Better color manipulation
3. **Utility First** - Tailwind approach
4. **Component Scoped** - No global pollution
5. **Performance** - GPU-accelerated animations
6. **Accessibility** - Focus states, semantic HTML
7. **Responsive** - Mobile-first design
8. **Dark Mode** - System preference support

---

## Summary

The styling system provides:
- 🎨 **Consistent Design** - Brand colors everywhere
- ⚡ **Performance** - Optimized animations
- 📱 **Responsive** - Works on all devices
- ♿ **Accessible** - WCAG compliant
- 🌓 **Dark Mode** - Full theme support
- 🎭 **Animations** - Smooth, professional
- 🔧 **Maintainable** - CSS variables for easy updates

Every visual element has been carefully crafted for the best user experience! ✨
