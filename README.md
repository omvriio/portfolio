# 🎯 Omar Marghadi - The Perception Engine Portfolio

> **"Humans create Meaning; Machines create Possibilities"**

A 3D interactive portfolio showcasing AI engineering work in perception systems, robotics, and sensor fusion.

## 🚀 Tech Stack

- **Framework**: React 18+ with Vite
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animation**: Framer Motion, GSAP, Lenis
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your credentials:
   - EmailJS credentials (for contact form)
   - Google Analytics tracking ID (optional)

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Project Structure

```
portfolio/
├── public/              # Static assets (3D models, images, textures)
├── src/
│   ├── components/      # React components
│   │   ├── 3D/         # Three.js/R3F components
│   │   ├── sections/   # Page sections (Hero, About, Projects, etc.)
│   │   ├── UI/         # UI components (Cards, Buttons, etc.)
│   │   └── shared/     # Shared/reusable components
│   ├── data/           # Data files (projects, experience, skills)
│   ├── hooks/          # Custom React hooks
│   ├── store/          # Zustand state management
│   ├── styles/         # Global styles and animations
│   └── utils/          # Utility functions
├── index.html          # HTML entry point
└── vite.config.js      # Vite configuration
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Adding Content

#### Add a New Project

Edit `src/data/projects.js`:

```javascript
{
  id: X,
  title: "Project Name",
  subtitle: "Brief description",
  category: ["Computer Vision", "Robotics"],
  thumbnail: "/projects/image.jpg",
  description: "Detailed description...",
  technologies: ["Python", "PyTorch", "ROS2"],
  links: {
    github: "https://github.com/...",
    demo: "https://...",
  },
  featured: true
}
```

#### Update Experience

Edit `src/data/experience.js` to add new work experience.

#### Add Skills/Certifications

Update `src/data/skills.js` and `src/data/achievements.js`.

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js` and `src/styles/globals.css`.

### 3D Scene

Customize the 3D elements in `src/components/3D/`:
- `PerceptionEngine.jsx` - Main 3D scene
- `DataStreams.jsx` - Particle systems
- `CentralEye.jsx` - Interactive sensor element

### Animations

Modify animations in:
- `src/styles/animations.css` - CSS animations
- Individual components using Framer Motion
- GSAP timelines for complex animations

## 📊 Performance Optimization

- **3D Models**: Keep GLB/GLTF files under 500KB
- **Images**: Use WebP format with fallbacks
- **Code Splitting**: Components are lazy-loaded
- **Mobile**: Simplified 3D scenes on mobile devices

### Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure custom domain** (optional)
   ```bash
   vercel domains add yourdomain.com
   ```

### Manual Build

```bash
npm run build
```

The `dist/` folder contains production-ready files.

## 🔧 Environment Variables

Create a `.env` file:

```env
# EmailJS (Contact Form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics (Optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 📝 To-Do / Roadmap

- [ ] Phase 1: Foundation & Basic 3D Scene
- [ ] Phase 2: Core Content Sections
- [ ] Phase 3: Advanced 3D & Animations
- [ ] Phase 4: Optimization & Testing
- [ ] Phase 5: Deployment & Launch

See `PORTFOLIO_ARCHITECTURE.md` for detailed roadmap.

## 🐛 Known Issues

- CSS warnings about `@tailwind` directives are normal before running `npm install`
- 3D performance may vary on older devices (mobile optimizations included)

## 📖 Documentation

- [Architecture Documentation](PORTFOLIO_ARCHITECTURE.md) - Complete design and technical spec
- [Component Guide](docs/COMPONENTS.md) - Coming soon
- [API Reference](docs/API.md) - Coming soon

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio.

## 📞 Contact

**Omar Marghadi**
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Built with ❤️ using React, Three.js, and modern web technologies**
