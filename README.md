# 📸 Instagram Clone

A modern, responsive Instagram clone built with Next.js 15, React 19, and Tailwind CSS. This project replicates the core Instagram experience with a clean, mobile-first design.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

**🌐 Live Demo**: [instagram-clone-prod.vercel.app](https://instagram-clone-prod.vercel.app)

---

## ✨ Features

### 🏠 Home Feed

- Responsive post feed with stories
- Post display with like counts and descriptions
- Instagram-style layout and navigation

### 👤 User Authentication

- Login and signup page UI
- Form handling with custom hooks

### 🔍 Explore

- Grid layout of random posts
- Click to view individual posts
- Responsive design

### 💬 Messaging

- Inbox page with message interface
- User chat list display
- Message placeholder UI

### 👤 Profile

- User profile page with stats
- Post grid layout
- Profile image and bio display

### 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Instagram-like navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19](https://react.dev/) - Latest React with concurrent features
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: Custom SVG icons for authentic Instagram feel
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js

## 📁 Project Structure

```
instagram-clone/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   └── accounts/      # Login & signup pages
│   ├── (main)/            # Main app routes
│   │   ├── explore/       # Explore page
│   │   ├── inbox/         # Messages
│   │   ├── profile/       # User profile
│   │   └── p/[id]/        # Individual post pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── Navbar/           # Navigation bar
│   ├── Post/             # Post component
│   ├── Stories/          # Stories component
│   ├── Sidebar/          # Sidebar with suggestions
│   └── Footer/           # Footer component
├── hooks/                # Custom React hooks
├── public/               # Static assets
│   ├── navbar/           # Navigation icons
│   ├── post/             # Post interaction icons
│   └── profile/          # Profile icons
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ganbold-adilbish/instagram-clone.git
   cd instagram-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🎨 Key Components

### Navigation

- **Navbar**: Instagram-style navigation with icons
- **Sidebar**: User suggestions and navigation links

### Content

- **Posts**: Individual post components with interactions
- **Stories**: Story carousel at the top of the feed
- **Feed**: Main content area with posts

### User Interface

- **Responsive Design**: Works on all device sizes
- **Instagram-like theming**: Clean, modern design
- **Smooth layout**: Professional user experience

## 🌟 Features in Detail

### Authentication System

- Clean login and signup forms
- Form state management with custom hooks
- Basic API integration

### Post Interactions

- Post display with like counts
- Comment and share button UI
- Save post functionality UI

### User Experience

- Responsive design across devices
- Clean navigation between pages
- Professional Instagram-like interface

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

**Live Demo**: [instagram-clone-prod.vercel.app](https://instagram-clone-prod.vercel.app)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Instagram's design and functionality
- Built with modern web technologies for optimal performance
- Optimized for performance and user experience
- Special thanks to the open source community

---

⭐ **Star this repository if you found it helpful!**

**Made with ❤️ by [Ganbold Adilbish](https://github.com/ganbold-adilbish)**
