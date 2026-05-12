# Portfolio Design System & Style Guide

## 🎨 Color Palette

### Primary Colors

```
Cyan/Turquoise:    #06B6D4 (rgb(6, 182, 212))
Blue:              #3B82F6 (rgb(59, 130, 246))
Purple:            #A855F7 (rgb(168, 85, 247))
```

### Background Colors

```
Dark Navy Primary: #050619
Dark Navy Mid:     #0f0f2e
Gray 900:          #111827
Gray 800:          #1F2937
Gray 700:          #374151
Gray 600:          #4B5563
Gray 400:          #9CA3AF
Gray 300:          #D1D5DB
```

### Text Colors

```
White:             #FFFFFF
Light Gray:        #E5E7EB
Medium Gray:       #9CA3AF
Dark Gray:         #6B7280
```

## 📐 Typography

### Font Family

- **Primary**: Poppins (sans-serif)
- **Display**: Winky Rough (for headers, optional)

### Font Sizes

```
Display:    48px (md: 64px)  - Page titles
Heading 1:  32px (md: 48px)  - Section headers
Heading 2:  24px (md: 32px)  - Card titles
Heading 3:  20px (md: 24px)  - Subheadings
Body:       16px            - Regular text
Body Small: 14px            - Secondary text
Label:      12px            - Tags, badges
```

### Font Weights

```
300: Light
400: Regular
500: Medium
600: Semibold
700: Bold
800: Extra Bold
900: Black
```

## 🎯 Components

### Buttons

#### Primary Button (Gradient)

```tailwind
bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900
hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1
```

#### Secondary Button (Outline)

```tailwind
border-2 border-cyan-400/50 text-cyan-400
hover:bg-cyan-400/10 hover:border-cyan-400
hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1
```

### Cards

```tailwind
bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950
border border-gray-700
hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20
transition-all duration-300
```

### Badges/Tags

```tailwind
px-3 py-1 rounded-full text-sm font-semibold
bg-gradient-to-r from-cyan-400/10 to-blue-500/10
border border-cyan-400/30 text-cyan-300
hover:border-cyan-400/60 hover:bg-cyan-400/20
```

### Icon Buttons

```tailwind
w-12 h-12 rounded-full border-2 border-cyan-400
flex items-center justify-center
hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50
transition-all duration-300
```

## ✨ Effects & Animations

### Gradient Text

```tailwind
bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
bg-clip-text text-transparent
```

### Hover Effects

- **Lift**: `hover:-translate-y-1` (buttons)
- **Glow**: `hover:shadow-lg hover:shadow-cyan-400/50`
- **Border Change**: `hover:border-cyan-400/50`
- **Scale**: `hover:scale-110` (icons)

### Animations

```css
fadeInDown: 0.5s ease-out (entering elements)
slideInUp: 0.6s ease-out (elements from bottom)
glow: 2s ease-in-out infinite (pulsing glow)
```

## 🔌 Spacing System

### Padding

```
Base Unit: 4px (Tailwind p-1)
Common: p-4 (16px), p-6 (24px), p-8 (32px)
Card: p-6 (24px) to p-8 (32px)
```

### Gaps

```
Buttons: gap-3 (12px), gap-4 (16px)
Cards: gap-4 (16px), gap-6 (24px), gap-8 (32px)
Icons: gap-2 (8px), gap-3 (12px)
```

### Margins

```
Section: mb-8 (32px), mb-12 (48px), mb-16 (64px)
Headers: mb-4 (16px), mb-6 (24px)
```

## 🎬 Transition Durations

```
Fast:     duration-200 (interactions)
Normal:   duration-300 (general)
Slow:     duration-500 (images, animations)
Extra:    duration-700+ (complex animations)
```

## 📱 Responsive Breakpoints

```
xs:  410px  (small phones)
sm:  640px  (phones)
md:  768px  (tablets)
ms:  992px  (small laptops)
lg:  1024px (laptops)
xl:  1280px (desktops)
2xl: 1536px (large screens)
```

## 🌟 Border & Shadows

### Border Radius

```
sm: rounded-lg    (8px)
md: rounded-xl    (12px)
lg: rounded-2xl   (16px)
xl: rounded-3xl   (24px)
full: rounded-full
```

### Shadow Effects

```
shadow-lg: 10px 10px 20px with cyan color
shadow-2xl: larger shadows for emphasis
shadow-cyan-400/20: colored shadows (20% opacity)
```

## 💎 Glass Morphism Effects

Used for overlays and floating elements:

```tailwind
bg-white/5 backdrop-blur-md border border-white/10
```

## 🎨 Gradient Patterns

### Horizontal Gradients

```tailwind
bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
```

### Diagonal Gradients

```tailwind
bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950
```

### Vertical Gradients

```tailwind
bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619]
```

## 🎯 State Styles

### Hover State

- Border color becomes brighter
- Shadow appears/increases
- Text color changes to cyan
- Scale increases slightly

### Focus State

- `outline-2 outline-offset-2 outline-cyan-400`
- Used for accessibility

### Active State

- Darker background
- Pressed appearance with slight scale decrease

## 🚀 Performance Optimizations

1. **Hardware Acceleration**: Use `transform` and `opacity` for animations
2. **Lazy Loading**: Images load as needed
3. **Minimal Repaints**: Group CSS changes
4. **Variable Colors**: CSS custom properties for theming

## 📋 Usage Examples

### Creating a New Card Component

```jsx
<div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-700 p-6 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300">
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  {/* Content */}
</div>
```

### Creating a Button

```jsx
<button className="px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
  Action
</button>
```

## 🎨 Customization Guide

To change the theme:

1. **Primary Color**: Replace `cyan-400` with desired color
2. **Background**: Update `from-[#050619]` values
3. **Text**: Modify `text-gray-300` or `text-white`
4. **Accents**: Change `purple-500` to preferred color

Example color swap:

```
Cyan (#06B6D4) → Replace with Indigo (#4F46E5)
Purple (#A855F7) → Replace with Pink (#EC4899)
```

## ✅ Accessibility

- ✅ High contrast text on backgrounds (WCAG AA)
- ✅ Focus states for keyboard navigation
- ✅ Proper color combinations
- ✅ Clear interactive elements
- ✅ Semantic HTML structure

## 📊 Design Tokens

```javascript
// Color Tokens
primary: "#06B6D4";
secondary: "#3B82F6";
accent: "#A855F7";
background: "#050619";

// Spacing Tokens
spacingUnit: 4; // 4px base unit
```

## 🎭 Final Notes

This design system is:

- ✨ Modern and trendy
- 💼 Professional and clean
- 📱 Fully responsive
- ♿ Accessible
- 🚀 Performance optimized
- 🎨 Visually cohesive

Maintain consistency by following these guidelines when adding new features!
