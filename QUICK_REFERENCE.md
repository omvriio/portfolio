# Quick Reference - Gyroscope Implementation

## What You Need to Know

### 🎯 Core Problem Solved
- **iOS Safari:** Gyro now activates on user tap + permission grant
- **Android:** Gyro works immediately without permission
- **Desktop:** Mouse fallback ensures it always works

### 📁 New/Modified Files

```
NEW FILES:
├── src/hooks/useDeviceOrientation.js      (Gyro logic)
├── src/store/deviceStore.js               (Device state)
├── src/components/shared/GyroDebugOverlay.jsx (Debug UI)
├── PROJECT_ARCHITECTURE.md                (Full design docs)
├── GYROSCOPE_TESTING_GUIDE.md            (Testing guide)
└── IMPLEMENTATION_SUMMARY.md             (This work summary)

MODIFIED FILES:
├── src/hooks/useMousePosition.js          (Now uses device detection)
└── src/App.jsx                            (Added debug overlay)
```

### 🧪 Testing Immediately

1. **HTTPS Required:**
   ```bash
   # Local HTTPS tunnel
   ngrok http 3000
   ```

2. **Test on iOS:**
   - Open page on iPhone Safari (via ngrok URL)
   - Tap screen → Permission dialog
   - "Allow" → Gyro activates
   - Tilt device → Eye follows ✓

3. **Test on Android:**
   - Open page on Android phone
   - Tilt immediately → Eye follows ✓

4. **Debug Overlay:**
   - Triple-tap anywhere on page
   - Green panel shows gyro status (bottom-right)

### ⚙️ Key Configuration

**Sensitivity (in `useDeviceOrientation.js` line ~52):**
```javascript
const x = (gamma / 90) * 0.8 + 0.5  // ← Adjust 0.8 here
const y = (beta / 90) * 0.8 + 0.5
```
- `0.4` = Less sensitive (more stable)
- `0.8` = Current (2x sensitivity)
- `1.2` = Very sensitive (faster response)

### 📊 Expected Results

| Device | Input | Result |
|--------|-------|--------|
| iPhone | Tap → Allow | Gyro active ✓ |
| Android | Tilt | Gyro active ✓ |
| Desktop | Move mouse | Mouse tracking ✓ |

### 🔧 Troubleshooting Checklist

- [ ] Using HTTPS? (Gyro blocks HTTP)
- [ ] Tapped page after loading? (iOS needs gesture)
- [ ] Checked Safari motion permissions? (Settings → Safari → Privacy)
- [ ] Tried triple-tap for debug overlay?
- [ ] Checked browser console for logs?
- [ ] Device has gyroscope sensor? (Some budget phones don't)

### 📖 Full Documentation

Read these in order:
1. `GYROSCOPE_TESTING_GUIDE.md` - Step-by-step testing
2. `PROJECT_ARCHITECTURE.md` - Complete system design
3. `IMPLEMENTATION_SUMMARY.md` - What was done

### 🚀 Next Phase (Lenis + GSAP)

After gyro is confirmed working:
1. Integrate Lenis scroll physics
2. Add GSAP timeline orchestration
3. Connect scroll progress to 3D model rotation
4. Add section transition animations
5. Polish UI to match wonjyou.studio

See full roadmap in `PROJECT_ARCHITECTURE.md` Phase 2-4.

### 💡 Important Notes

- **Console Logs:** Check DevTools console for permission status
- **Cleanup:** All event listeners properly cleaned up (no memory leaks)
- **Fallback:** If gyro fails at any point, automatically reverts to mouse
- **Mobile Detection:** Automatically detects iOS vs Android vs Desktop

### 🎮 Testing Commands

**Manual permission request (paste in console):**
```javascript
DeviceOrientationEvent.requestPermission().then(p => console.log(p))
```

**Check gyro support:**
```javascript
console.log('Gyro:', 'DeviceOrientationEvent' in window ? '✓' : '✗')
```

**Disable gyro (debug only):**
```javascript
window.addEventListener('deviceorientation', (e) => {
  console.log('Gyro event:', e.beta, e.gamma)
})
```

---

**Status:** ✅ Ready for testing on real devices

**Next Step:** Deploy to HTTPS + test on iOS/Android
