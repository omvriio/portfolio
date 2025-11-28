# Quick Start Guide - Portfolio Refactor

## What Changed?

Your portfolio is now a **click-based 3D interactive portal** instead of scroll-based. The CircularNav (4-segment wheel) is the main navigation, and clicking each segment triggers:

1. **GSAP camera & eye animation** (2 seconds)
2. **Content section transitions** (via Framer Motion)

---

## How It Works

### Architecture Overview
```
User clicks segment → Zustand state updates → GSAP animations + ContentSections re-render
```

### The Flow
1. Click "About" segment in CircularNav
2. Zustand store updates `activeSection` to 'about'
3. App.jsx effect detects this and calls `transitionTo('about')`
4. GSAP timeline animates:
   - Camera from `[0,0,5]` → `[2,0,4]` 
   - Eye model tilts to side profile
5. ContentSections detects change and animates About content in
6. Everything synced with 2-second animation

---

## Key Files (What You Need to Know)

### 1. **State Management** - `src/store/navigationStore.js`
Controls what section is active and whether animations are running.

```javascript
activeSection: 'about' | 'work' | 'projects' | 'skills' | 'contact'
isAnimating: true/false (prevents clicking during animation)
```

### 2. **Animation Logic** - `src/hooks/useSceneTransitions.js` (NEW!)
All GSAP timelines live here. Each section has its own camera position and eye rotation.

**6 Scene Transitions:**
- **HOME**: Camera center, eye forward
- **ABOUT**: Camera tilted, eye in side profile (the dramatic one!)
- **WORK**: Camera from top-left, eye looking down (contemplative)
- **PROJECTS**: Camera from above, eye looking up (proud/showcase)
- **SKILLS**: Camera from left, eye looking right (analytical)
- **CONTACT**: Camera close, eye forward (approachable)

### 3. **Navigation UI** - `src/components/Navigation/CircularNav.jsx`
Just dispatches state. No animations here anymore.

```javascript
handleSegmentClick = (sectionId) => {
  if (!isAnimating) {
    setActiveSection(sectionId) // That's it!
  }
}
```

### 4. **Content Display** - `src/components/sections/ContentSections.jsx`
Uses `AnimatePresence` to show/hide content based on `activeSection`.

```javascript
{activeSection === 'about' && <AboutSection />}
{activeSection === 'work' && <WorkSection />}
// ... etc
```

### 5. **3D Eye Model** - `src/components/3D/CentralEye.jsx`
Now works with Canvas refs instead of its own Canvas. Exposes `groupRef` to parent for GSAP to animate.

---

## Customizing Animations

### Change a Scene Transition

Edit `src/hooks/useSceneTransitions.js`:

```javascript
if (section === 'about') {
  const tl = gsap.timeline({...})
  tl
    .to(camera.position, { x: 2, y: 0, z: 4, duration: 2 }, 0)  // ← Camera position
    .to(camera.rotation, { x: 0, y: 0.3, z: 0, duration: 2 }, 0) // ← Camera angle
    .to(eye.position, { x: -1.5, y: 0.5, z: 0, duration: 2 }, 0) // ← Eye position
    .to(eye.rotation, { x: 0, y: -Math.PI / 2.5, z: 0, duration: 2 }, 0) // ← Eye tilt
}
```

**Parameters:**
- `camera.position`: Where the camera looks from `[x, y, z]`
- `camera.rotation`: Angle to look at (in radians)
- `eye.position`: Where the 3D eye model sits
- `eye.rotation`: How tilted/rotated the eye is

### Add a New Section

1. Add segment to `CircularNav`:
```javascript
const segments = [
  // ... existing
  { id: 'newpage', label: 'New Page', angle: 45, color: '#00FF00' }
]
```

2. Add case to `useSceneTransitions`:
```javascript
if (section === 'newpage') {
  const tl = gsap.timeline({...})
  tl
    .to(camera.position, { x: ?, y: ?, z: ?, duration: 2 }, 0)
    .to(camera.rotation, { x: ?, y: ?, z: ?, duration: 2 }, 0)
    // ... eye animations
}
```

3. Add content component to `ContentSections`:
```javascript
{activeSection === 'newpage' && (
  <motion.div>
    <NewPageSection isDarkMode={isDarkMode} />
  </motion.div>
)}
```

---

## Testing Checklist

- [ ] Run `npm run dev` and open browser
- [ ] Click each segment (About, Work, Projects, Connect)
- [ ] Verify animations are smooth (2 seconds)
- [ ] Verify content sections load correctly
- [ ] Verify clicking during animation doesn't break anything (should be disabled)
- [ ] Check mobile responsiveness
- [ ] Test dark mode toggle
- [ ] Verify 3D model loads

---

## Tech Stack (Unchanged)

- **React 18** - UI framework
- **Three.js** - 3D rendering
- **React Three Fiber** - React wrapper for Three.js
- **GSAP** - Animation choreography (NEW USE!)
- **Framer Motion** - UI microinteractions
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool

---

## Performance Tips

1. **Animations stay smooth** because:
   - GSAP uses GPU transforms
   - Zustand prevents unnecessary re-renders
   - Content mounted/unmounted only when needed

2. **No lag during transitions** because:
   - All animations synced with `gsap.timeline()`
   - `killTweensOf()` prevents conflict
   - `isAnimating` flag prevents rapid clicks

---

## Troubleshooting

### Animations not playing?
- Check if `cameraRef` and `eyeRef` are properly connected to Canvas
- Verify model is loaded before `transitionTo()` is called
- Check `isAnimating` state in console

### Content not showing?
- Check `activeSection` in Zustand store
- Verify `AnimatePresence` is properly set up
- Check for CSS z-index conflicts

### Clicking doesn't work?
- Check if `isAnimating` is preventing clicks
- Verify `CircularNav` is receiving correct `isAnimating` prop
- Check console for errors

---

## Key Insights

### Why State-Driven?
- **Single source of truth**: All UI reacts to `activeSection`
- **Easy to debug**: Just check store state
- **Extensible**: Easy to add new behaviors without touching components

### Why GSAP?
- **Powerful choreography**: Sync multiple properties
- **Smooth easing**: `power3.inOut` feels natural
- **Performance**: GPU-accelerated transforms
- **Control**: Timeline callbacks handle animation state

### Why Framer Motion for Content?
- **Natural microinteractions**: Slide in/out feels smooth
- **Lightweight**: Only animates opacity and x position
- **Compatible**: Works well with React's rendering model

---

## Deployment Notes

When deploying, ensure:
- [ ] 3D model file exists at `public/models/scene.gltf`
- [ ] GSAP is bundled (already in `vite.config.js`)
- [ ] Canvas renders at full viewport size
- [ ] No scroll-based logic interfering (removed in refactor)

---

## You're All Set!

Your portfolio is now a sophisticated, immersive 3D experience that tells a visual story through each transition. Every section has a unique camera perspective and eye orientation that reflects the content.

**Questions?** Check `IMPLEMENTATION_SUMMARY.md` for the deep dive.

**Ready to impress your audience! 🚀**
