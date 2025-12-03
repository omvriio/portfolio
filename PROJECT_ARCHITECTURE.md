# Portfolio - High-Fidelity Architecture Document

## 1. PROJECT DESCRIPTION

**Vision:** Create a premium interactive portfolio mimicking wonjyou.studio's sophistication—seamless scroll-driven animations, adaptive 3D model transitions, precision navigation, and full mobile gyroscope support.

**Core Features:**
- Smooth Lenis scroll engine (physics-based scrolling)
- 3D eye model that transitions based on scroll position & navigation
- Circular navigation wheel with segment-based interactions
- Gyroscope-driven 3D movement on mobile (iOS + Android)
- GSAP timeline orchestration for coordinated animations
- Responsive design that adapts layout to device capabilities

**Tech Stack:**
- React 18 + React Three Fiber (3D rendering)
- Lenis (@studio-freight/lenis) for scroll orchestration
- GSAP for timeline animations
- Zustand for state management
- Tailwind CSS + custom animations

---

## 2. SYSTEM ARCHITECTURE

### 2.1 Core Modules

```
src/
├── components/
│   ├── 3D/
│   │   ├── CentralEye.jsx          (3D model container)
│   │   ├── EyeModel.jsx            (Model logic + rotations)
│   │   └── CameraController.jsx    (Camera follow 3D model)
│   ├── Navigation/
│   │   ├── CircularNav.jsx         (Main nav wheel)
│   │   └── CircularSegment.jsx     (Individual segments)
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── WorkSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── ContactSection.jsx
│   └── shared/
│       ├── LoadingScreen.jsx
│       └── CVButton.jsx
├── hooks/
│   ├── useMousePosition.js         (Mouse + Gyroscope)
│   ├── useScrollTransform.js       (Scroll-driven transforms)
│   ├── useLenis.js                 (Lenis scroll integration)
│   ├── useDeviceOrientation.js     (Dedicated gyro hook)
│   └── useWindowSize.js            (Responsive detection)
├── store/
│   ├── navigationStore.js          (Nav state)
│   ├── scrollStore.js              (Scroll position + section data)
│   └── deviceStore.js              (Device capabilities)
└── styles/
    ├── globals.css
    ├── animations.css
    └── theme.css
```

### 2.2 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│               USER INTERACTIONS                          │
│  (scroll, touch, gyroscope, navigation click)            │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│          DEVICE STATE (Zustand Stores)                  │
│  - Scroll position + velocity                            │
│  - Active section + segment                              │
│  - Device type (mobile/desktop/iOS/Android)              │
│  - Gyroscope permissions & data                          │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│          HOOKS (Compute & Normalize Data)               │
│  - useMousePosition (mouse OR gyro input)                │
│  - useScrollTransform (scroll → 3D rotation)             │
│  - useLenis (scroll physics)                             │
│  - useDeviceOrientation (iOS permission flow)            │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│       GSAP TIMELINES (Animation Orchestration)           │
│  - Scroll-linked timelines                              │
│  - Section transitions                                   │
│  - Navigation animations                                 │
│  - 3D model morphs                                       │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│            VISUAL OUTPUT                                 │
│  - 3D model rotations (mouse/gyro/segment)              │
│  - Text animations + fades                              │
│  - Navigation wheel state changes                        │
│  - Parallax backgrounds                                  │
└─────────────────────────────────────────────────────────┘
```

### 2.3 Gyroscope Implementation (Fixed)

**Problem:** iOS Safari doesn't activate gyroscope without explicit user gesture in secure context (HTTPS required).

**Solution - Three-Layer Approach:**

1. **Eager Permission Request (iOS)**
   - Request immediately on any user interaction
   - Use `DeviceOrientationEvent.requestPermission()`
   - Handle denied gracefully (fallback to mouse/touch)

2. **Fallback Chain**
   - Desktop → Mouse position
   - Android → Direct gyroscope (no permission needed)
   - iOS → Requested permission → Gyroscope
   - If permission denied → Mouse/touch

3. **Continuous Activation Check**
   - Poll for permission every 500ms if pending
   - Retry on different interaction types (click, touch, focus)

---

## 3. TESTING STRATEGY

### 3.1 Device Coverage

| Device | OS | Priority | Test Case |
|--------|----|-----------|----|
| iPhone 13+ | iOS 16+ | Critical | HTTPS + permission dialog |
| Samsung Galaxy | Android 12+ | High | Direct gyro activation |
| Desktop | Chrome/Firefox | High | Mouse fallback |
| iPad | iOS | Medium | Landscape orientation |
| Budget Android | Android 9 | Low | Sensor compatibility |

### 3.2 Test Scenarios

**Scenario 1: iOS Permission Flow**
```
1. Load page on iPhone via HTTPS
2. User hasn't granted permission
   → No gyro active on load (expected)
3. Tap any element on page
   → Permission dialog appears
4. User taps "Allow"
   → Gyroscope activates immediately
5. Tilt device
   → 3D model follows gyro input ✓
```

**Scenario 2: Android Direct Activation**
```
1. Load page on Android
2. No permission dialog
3. Tilt device immediately
   → 3D model follows gyro input ✓
```

**Scenario 3: Fallback to Mouse (Desktop)**
```
1. Load page on desktop
2. Move mouse
   → 3D model follows cursor ✓
3. No gyro request
```

**Scenario 4: Scroll-Driven Transitions**
```
1. Scroll section to section
2. Eye model rotates to face current segment
3. Text fades in with stagger
4. Navigation wheel updates
5. Parallax backgrounds shift
   → All synchronized ✓
```

### 3.3 Testing Checklist

- [ ] iOS Safari: Permission granted + gyro works
- [ ] iOS Safari: Permission denied + fallback works
- [ ] Android Chrome: Gyro works immediately
- [ ] Desktop: Mouse works, no permission dialog
- [ ] Orientation change: Recalibrates correctly
- [ ] Scroll + Gyro: Both inputs work simultaneously
- [ ] Navigation clicks: Update eye rotation correctly
- [ ] First interaction detection: Permission shows on touch/click
- [ ] Lenis scroll: Smooth physics across sections
- [ ] 3D model loading: No janky frame drops

---

## 4. IMPLEMENTATION PLAN

### Phase 1: Fix Gyroscope (Priority)
1. **Separate device orientation hook** (`useDeviceOrientation.js`)
2. **Aggressive permission request** (attach to window.focus, visibility change)
3. **State machine for device types** (Zustand store)
4. **Fallback chain logic** (mouse → touch → gyro)

### Phase 2: Lenis + Scroll Integration
1. **Lenis scroll engine setup**
2. **GSAP scroll-linked timelines**
3. **Section detection on scroll**
4. **3D model rotation based on scroll progress**

### Phase 3: Navigation Orchestration
1. **Update eye model on segment hover/click**
2. **Smooth rotation transitions** (GSAP tweens)
3. **Parallax text animations**
4. **Mobile-responsive nav wheel**

### Phase 4: Polish & Optimization
1. **Performance profiling** (React DevTools Profiler)
2. **Memory leak fixes** (cleanup event listeners)
3. **Mobile optimization** (reduce redraws)
4. **Accessibility** (ARIA labels, keyboard nav)

---

## 5. KEY COMPONENTS

### 5.1 useDeviceOrientation Hook (NEW)

```javascript
export const useDeviceOrientation = () => {
  const [gyroActive, setGyroActive] = useState(false)
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    let permissionGranted = false

    // iOS: Request permission explicitly
    const requestPermission = async () => {
      if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEvent.requestPermission()
          if (permission === 'granted') {
            permissionGranted = true
            setGyroActive(true)
          }
        } catch (e) {
          console.error('Permission denied:', e)
        }
      }
    }

    // Android: Try direct access
    const tryDirectAccess = () => {
      window.addEventListener('deviceorientation', handleOrientation)
      setGyroActive(true)
    }

    const handleOrientation = (event) => {
      const x = (event.gamma / 90) * 0.8 + 0.5
      const y = (event.beta / 90) * 0.8 + 0.5
      setCoords({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y))
      })
    }

    // Aggressive permission requests
    const tryActivate = () => {
      if (!gyroActive) {
        if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
          requestPermission()
        } else {
          tryDirectAccess()
        }
      }
    }

    // Multiple triggers for iOS
    document.addEventListener('touchstart', tryActivate, { once: true })
    document.addEventListener('click', tryActivate, { once: true })
    window.addEventListener('focus', tryActivate)
    document.addEventListener('visibilitychange', tryActivate)

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
      window.removeEventListener('focus', tryActivate)
      document.removeEventListener('visibilitychange', tryActivate)
    }
  }, [gyroActive])

  return { coords, gyroActive }
}
```

### 5.2 Zustand Device Store

```javascript
create((set) => ({
  deviceType: 'desktop', // 'desktop' | 'android' | 'ios'
  gyroActive: false,
  gyroPermission: 'unknown', // 'granted' | 'denied' | 'unknown'
  
  setDeviceType: (type) => set({ deviceType: type }),
  setGyroActive: (active) => set({ gyroActive: active }),
  setGyroPermission: (permission) => set({ gyroPermission: permission }),
}))
```

### 5.3 Scroll-Driven 3D Model

```javascript
// In CentralEye.jsx
useFrame((state) => {
  const scrollProgress = useScrollTransform() // 0-1
  const sectionIndex = Math.floor(scrollProgress * numSections)
  
  // Rotate to face current section
  const targetRotation = (sectionIndex * 360 / numSections) * Math.PI / 180
  
  groupRef.current.rotation.y = THREE.MathUtils.lerp(
    groupRef.current.rotation.y,
    targetRotation,
    0.05
  )
})
```

---

## 6. WONJYOU.STUDIO QUALITY INDICATORS

To match wonjyou.studio's premium feel:

1. **Micro-interactions**
   - Hover states with subtle scale/color changes
   - Staggered text animations (0.1s delays)
   - Smooth transitions (0.4s easing)

2. **Visual Hierarchy**
   - Large typography (Hero: 64px+)
   - Generous whitespace
   - Intentional color palette (neutral + accent)

3. **Performance**
   - 60 FPS animations
   - Lazy-load images
   - Code-split sections
   - Optimize 3D model geometry

4. **Content Strategy**
   - Hero with clear value prop
   - Portfolio/case studies with visuals
   - About section (story + expertise)
   - CTA sections (contact, social)

5. **Motion Design**
   - Physics-based scroll (Lenis)
   - Parallax without overdoing
   - Sequential section reveals
   - Model follows user intent (scroll → nav → gyro)

---

## 7. DEPLOYMENT & HTTPS REQUIREMENT

**Critical:** Gyroscope only works on HTTPS sites (browsers block for security).

- Production: Deploy to HTTPS domain
- Testing: Use ngrok for local HTTPS tunnel
  ```bash
  ngrok http 3000
  ```
  Test on mobile via ngrok URL

---

## 8. SUCCESS METRICS

✓ iOS Safari: Gyro activates within 2 taps
✓ Android Chrome: Gyro active immediately
✓ Desktop: Mouse fallback seamless
✓ Scroll animations: Locked to 60 FPS
✓ 3D model: No visual jank or rotation glitches
✓ Load time: < 3s (with 3D model)
✓ Mobile performance: < 60MB memory usage

