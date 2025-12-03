# Architecture Diagrams & Flow Charts

## 1. Gyroscope Permission Flow

### iOS
```
┌─────────────────────────────────────────────────────────────┐
│                    User Loads Page on iPhone                │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
        ┌─────────────────────┐
        │   Is HTTPS?         │
        └────┬────────────┬───┘
      YES │                │ NO
          ▼                ▼
    ✓ Continue   ✗ Blocked (Security)
          │
          ▼
   ┌─────────────────────┐
   │ Wait for User Tap   │◄─── touchstart OR click
   └────┬────────────────┘
        │
        ▼
   ┌───────────────────────────────────┐
   │ Call requestPermission()          │
   │ (Only works on iOS 13+)           │
   └────┬──────────────────┬───────────┘
   GRANTED │                │ DENIED/BLOCKED
           ▼                ▼
    ✓ Activate         ✗ Fallback
    Listen to          Use Mouse
    deviceorientation  Tracking

        │
        ▼
   ┌──────────────────────┐
   │ User Tilts Phone     │
   └──────┬───────────────┘
          ▼
   ┌──────────────────────┐
   │ 3D Eye Follows Tilt  │ ✓
   └──────────────────────┘
```

### Android
```
┌─────────────────────────────────────────────────────────────┐
│                  User Loads Page on Android                 │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
        ┌─────────────────────┐
        │   Is HTTPS?         │
        └────┬────────────┬───┘
      YES │                │ NO
          ▼                ▼
    ✓ Continue   ✗ Blocked
          │
          ▼
   ┌─────────────────────┐
   │ Direct Activation   │
   │ (No permission      │
   │  needed on Android) │
   └──────┬──────────────┘
          │
          ▼
   ┌──────────────────────┐
   │ Start Listening      │
   │ deviceorientation    │
   └──────┬───────────────┘
          │
          ▼
   ┌──────────────────────┐
   │ User Tilts Phone     │
   │ (Immediately Works)  │ ✓
   └──────┬───────────────┘
          ▼
   ┌──────────────────────┐
   │ 3D Eye Follows Tilt  │ ✓
   └──────────────────────┘
```

### Desktop
```
┌─────────────────────────────────────────────────────────────┐
│              User Loads Page on Desktop                     │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
        ┌─────────────────────┐
        │ Device Detection    │
        │ (User Agent Check)  │
        └────┬────────────────┘
             │
             ▼
    ┌────────────────────┐
    │ Is Mobile UA?      │
    └────┬────────────┬──┘
    YES  │            │ NO
         ▼            ▼
    Use Gyro    ✓ Use Mouse
    (if avail)  Tracking
         │            │
         │            ▼
         │     ┌──────────────────┐
         │     │ User Moves Mouse │
         │     └────┬─────────────┘
         │          ▼
         └─► ┌──────────────────────┐
             │ 3D Eye Follows Cursor│ ✓
             └──────────────────────┘
```

---

## 2. Data Flow Architecture

```
                    ┌──────────────────┐
                    │  USER INPUT      │
                    │  ├─ Scroll       │
                    │  ├─ Touch        │
                    │  ├─ Click        │
                    │  ├─ Gyroscope    │
                    │  └─ Mouse Move   │
                    └────────┬─────────┘
                             │
                             ▼
        ┌────────────────────────────────────┐
        │      DEVICE DETECTION LAYER        │
        │  (useDeviceOrientation Hook)       │
        │  ├─ Detect iOS/Android/Desktop    │
        │  ├─ Request iOS permission        │
        │  └─ Handle gyro events            │
        └────────────┬─────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │      INPUT NORMALIZATION LAYER     │
        │  (useMousePosition Hook)           │
        │  ├─ Normalize coordinates (0-1)   │
        │  ├─ Select input type              │
        │  └─ Clamp to valid range           │
        └────────────┬─────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │       STATE MANAGEMENT LAYER       │
        │  (Zustand Stores)                  │
        │  ├─ navigationStore                │
        │  ├─ scrollStore                    │
        │  └─ deviceStore                    │
        └────────────┬─────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │    ANIMATION ORCHESTRATION LAYER   │
        │  (GSAP Timelines - Future)         │
        │  ├─ Scroll timelines               │
        │  ├─ Model morphing                 │
        │  └─ Section transitions            │
        └────────────┬─────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────────┐
        │        RENDERING LAYER             │
        │  (React Three Fiber + React)       │
        │  ├─ 3D Model rotations             │
        │  ├─ UI animations                  │
        │  └─ Navigation updates             │
        └────────────────────────────────────┘
```

---

## 3. Hook Integration Flow

```
                   CentralEye.jsx
                        │
                        ▼
            ┌────────────────────────┐
            │   useMousePosition()   │
            │    (Main Hook)         │
            └───────────┬────────────┘
                        │
                        ├─► Device Type Detection
                        │   (Mobile vs Desktop)
                        │
                        ├─► Import useDeviceOrientation
                        │   │
                        │   ├─ If iOS:
                        │   │  └─ Request permission
                        │   │
                        │   ├─ If Android:
                        │   │  └─ Direct activation
                        │   │
                        │   └─ Return gyro coords
                        │
                        └─► Conditional Selection
                            ├─ Desktop + !gyroActive
                            │  └─ Use mouse listener
                            │
                            ├─ Mobile + gyroActive
                            │  └─ Use gyro coords
                            │
                            └─ Fallback
                               └─ Use mouse listener
```

---

## 4. State Machine Diagram

```
                 ┌──────────────────┐
                 │   START / LOAD   │
                 └────────┬─────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │  DETECT DEVICE TYPE           │
          │  (Check User Agent)           │
          └───┬─────────┬─────────────────┘
          Desktop │     │ Mobile
              │         │
              ▼         ▼
         ┌─────────┐ ┌─────────────────────────┐
         │ MOUSE   │ │ REQUEST GYRO PERMISSION │
         │ACTIVE   │ │ (Wait for user gesture) │
         │ (Ready) │ └────┬────────────┬──────┘
         └─────────┘      │            │
                    GRANTED │         │ DENIED
                          │            │
                          ▼            ▼
                   ┌─────────────┐ ┌─────────────┐
                   │ GYRO ACTIVE │ │ MOUSE       │
                   │ (Ready)     │ │ FALLBACK    │
                   │             │ │ (Ready)     │
                   └─────┬───────┘ └─────────────┘
                         │
                         ▼
          ┌───────────────────────────────┐
          │ READY FOR INPUT               │
          │ ├─ Listen to mouse/gyro       │
          │ ├─ Update coordinates         │
          │ └─ Trigger renders            │
          └───────────────────────────────┘
```

---

## 5. Component Tree

```
App.jsx
├── LoadingScreen
├── Landing Section
│   ├── CentralEye
│   │   └── Canvas (React Three Fiber)
│   │       ├── EyeModel
│   │       │   └── useMousePosition() ◄── Gyro Input
│   │       ├── Lights
│   │       └── Camera
│   ├── CircularNav
│   │   └── CircularSegment[]
│   ├── LandingGreeting
│   └── CVButton
├── RectangularNav
├── ContentSections
│   ├── AboutSection
│   ├── WorkSection
│   ├── SkillsSection
│   └── ContactSection
├── GyroDebugOverlay ◄── NEW (Triple-tap to show)
├── Analytics (Vercel)
└── SpeedInsights (Vercel)
```

---

## 6. Event Listener Lifecycle

```
┌─────────────────────────────────────────┐
│     COMPONENT MOUNT (useEffect)         │
└────────────┬────────────────────────────┘
             │
             ▼
    ┌─────────────────────────┐
    │ Add Event Listeners:    │
    │ ├─ touchstart (once)    │
    │ ├─ click (once)         │
    │ ├─ visibilitychange     │
    │ ├─ focus                │
    │ └─ deviceorientation    │
    └────────┬────────────────┘
             │
             ▼
    ┌─────────────────────────┐
    │ User Interaction        │
    │ (touch/click/etc)       │
    └────────┬────────────────┘
             │
             ▼
    ┌─────────────────────────┐
    │ Request Permission      │
    │ (if iOS)                │
    └────────┬────────────────┘
             │
             ├─► GRANTED ──┐
             │             │
             └─► DENIED ──┐│
                          ││
                          ▼▼
    ┌──────────────────────────────────┐
    │ Start Listening to Events:       │
    │ ├─ deviceorientation (gyro)      │
    │ └─ mousemove (fallback)          │
    └────────┬───────────────────────┘
             │
             ▼
    ┌──────────────────────────────────┐
    │ COMPONENT UNMOUNT (cleanup)      │
    │ └─ Remove ALL Event Listeners    │
    └──────────────────────────────────┘
```

---

## 7. Coordinate Transformation

```
INPUT (Device Orientation)
├─ beta: -180 to +180 (tilt forward/backward)
└─ gamma: -90 to +90 (tilt left/right)

                ▼

NORMALIZATION (useDeviceOrientation.js)
├─ x = (gamma / 90) * 0.8 + 0.5
└─ y = (beta / 90) * 0.8 + 0.5

                ▼

CLAMPING
├─ x = Math.max(0, Math.min(1, x))
└─ y = Math.max(0, Math.min(1, y))

                ▼

OUTPUT (0 to 1 range)
├─ x: 0.0 (left) ◄──► 1.0 (right)
└─ y: 0.0 (top) ◄──► 1.0 (bottom)

                ▼

3D RENDERING (CentralEye.jsx)
├─ rotation.y = targetX * Math.PI * 0.3
└─ rotation.x = targetY * Math.PI * 0.3
```

---

## 8. Testing Decision Tree

```
              START TEST
                  │
                  ▼
      ┌───────────────────────┐
      │ Is HTTPS?             │
      └───┬─────────┬─────────┘
      NO  │         │ YES
          ▼         ▼
      Use Ngrok  Continue
      ngrok http  │
      3000        ▼
          │   ┌──────────────┐
          │   │ Device Type? │
          │   └──┬─────┬─────┘
          │      │     │
          │   iOS│     │Android
          │      │     │
          │      ▼     ▼
          │   ┌─────┐┌──────┐
          │   │Tap  ││ Tilt │
          │   │Page ││Immediately
          │   └──┬──┘└──┬───┘
          │      │      │
          │      ▼      ▼
          │   ┌──────────────┐
          │   │ Gyro Works?  │
          │   └──┬───────┬───┘
          │   YES│       │ NO
          │      ▼       ▼
          │   ✓Pass  ✗Debug
          │          │
          └──────────┘
```

---

These diagrams provide visual understanding of:
- Permission flows (iOS vs Android vs Desktop)
- Data transformation pipeline
- Component and hook relationships
- State machine transitions
- Event listener lifecycle
- Testing procedures

