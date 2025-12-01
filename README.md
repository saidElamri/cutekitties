# 🐱 Cute Kitties - Full-Stack React App

A modern, scalable React application themed around adorable cats. Features multi-page routing, dark mode, gamification, and a complete dashboard system.

## ✨ Features

### 🏠 Landing Page
- Eye-catching hero section with animated kitten imagery
- Feature cards with hover animations
- Authentication forms with social login
- Testimonials from happy cats
- Fully responsive design

### 📊 Dashboard
- **Task Tracker** - Visual task management with completion tracking
- **Whisker Points** - Gamification system to reward productivity
- **Mood Selector** - Track your daily mood with cute emojis
- **Progress Widgets** - Animated stat cards showing your achievements

### 👤 Profile Page
- User avatar with hover effects
- Stats display (tasks completed, points, streak, badges)
- Badge collection system (earned/locked states)
- Activity timeline showing recent actions

### ⚙️ Settings
- Dark mode toggle with smooth transitions
- Notification preferences
- Account management
- Sign out functionality

### 🌙 Dark Mode
- System-wide theme toggle
- Persists across sessions
- Smooth transitions
- All components fully themed

### 🔐 Authentication
- Context-based auth state
- Protected routes
- Mock login (ready for API integration)
- Persistent sessions

## 🚀 New Features

- **Analytics Chart**: Visual activity trend chart added to the Profile page.
- **Smart Scheduling**: "Magic Suggest" button on the Dashboard recommends tasks.
- **PWA Install**: Functional install button on the Download page for PWA installation.
- **Task Sharing**: Share tasks via native share dialog or copy to clipboard from the Dashboard.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/saidElamri/cutekitties.git
cd cutekitties

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS with dark mode
- **Framer Motion** - Animation library
- **Zustand** - State management (ready to use)
- **React Hook Form + Zod** - Form validation (ready to use)
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components (Button, Input, Card)
├── sections/       # Landing page sections (Hero, Auth, Features, etc.)
├── pages/          # Application pages (Landing, Dashboard, Profile, Settings)
├── contexts/       # React contexts (Theme, Auth)
├── hooks/          # Custom React hooks (ready for expansion)
├── utils/          # Helper functions (ready for expansion)
├── assets/         # Images, icons (ready for expansion)
└── styles/         # Global styles
```

## 🎯 Key Components

### Pages
- `LandingPage` - Marketing page with hero, features, auth
- `Dashboard` - Main app dashboard with widgets
- `Profile` - User profile with stats and badges
- `Settings` - App settings and preferences

### Contexts
- `ThemeContext` - Global theme state (light/dark)
- `AuthContext` - User authentication state

### Components
- `Button` - Customizable button with variants
- `Input` - Form input with validation states
- `Card` - Container with hover effects
- `Navbar` - Fixed navigation with theme toggle

## 🎨 Design System

### Colors
- **Light Mode**: Soft pastels (pink, cream, mint, blue)
- **Dark Mode**: Dark grays with accent colors
- **Gradients**: Used in widgets and cards

### Typography
- **Fonts**: Quicksand, Nunito (rounded, friendly)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

### Animations
- Page transitions with Framer Motion
- Hover effects on cards and buttons
- Smooth theme transitions
- Micro-interactions throughout

## 🔒 Authentication Flow

1. User visits landing page
2. Clicks "Get Started" or uses Auth section
3. Enters credentials (mock auth - any email/password works)
4. Redirected to Dashboard
5. Protected routes accessible (Dashboard, Profile, Settings)
6. Can sign out from Settings

## 🌐 Deployment

The app is deployed on Vercel:
**Live Demo**: [cutekitties.vercel.app](https://cutekitties.vercel.app)

### Deploy Your Own

```bash
# Using Vercel CLI
vercel --prod

# Or connect your GitHub repo to Vercel dashboard
```

## 🚧 Future Enhancements

- [ ] Real API integration for authentication
- [ ] Form validation with react-hook-form + zod
- [ ] Cursor-following kitten mascot
- [ ] Floating paw prints on scroll
- [ ] Community feed with posts
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Achievement notifications

## 📝 License

MIT License - feel free to use this project for learning or personal projects!

## 🐾 Made with ❤️ and Purrs

Created as a demonstration of modern React development practices with a playful, cat-themed twist!
