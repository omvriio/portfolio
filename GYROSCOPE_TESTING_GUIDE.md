# Gyroscope Implementation - Testing & Troubleshooting Guide

## Quick Start

### What Changed
1. **New `useDeviceOrientation.js` hook** - Dedicated gyroscope handler with aggressive permission request
2. **Updated `useMousePosition.js`** - Now detects device type and uses appropriate input (mouse/gyro)
3. **New `GyroDebugOverlay.jsx`** - Debug panel showing gyro state in real-time
4. **New `deviceStore.js`** - Zustand store for device capabilities
5. **PROJECT_ARCHITECTURE.md** - Full system documentation

---

## Testing on Mobile

### iOS (iPhone/iPad)

**Setup:**
1. Deploy to HTTPS domain OR use local HTTPS tunnel:
   ```bash
   ngrok http 3000
   ```
2. Test via ngrok URL on iPhone Safari

**Expected Flow (iOS):**
```
1. Page loads
   → No gyro yet (iOS requires explicit permission)
   
2. Tap anywhere on page
   → iOS permission dialog: "Allow [Site] to access motion & orientation?"
   
3. User taps "Allow"
   → Gyroscope activates
   → Debug overlay shows: "Gyro Permission: GRANTED"
   
4. Tilt iPhone
   → 3D eye follows device tilt ✓
```

**Debug:** Triple-tap page → Green debug overlay appears (bottom-right)
- Check "Gyro Permission" = GRANTED
- Check "Gyro Active" = ON (green)
- Watch Gyro Coords change as you tilt

**If Not Working:**

| Issue | Solution |
|-------|----------|
| Permission dialog doesn't appear | Ensure HTTPS, reload, tap screen |
| Permission denied | Go to Settings → Safari → Privacy → Motion & Orientation → Enable |
| Gyro coords frozen | Device may need recalibration (put on flat surface 10 seconds) |
| No debug overlay | Triple-tap is sensitive - tap slowly 3x with 0.5s delays |

---

### Android (Samsung, Google Pixel, etc.)

**Expected Flow (Android):**
```
1. Page loads
   → Gyroscope may activate immediately (no permission needed)
   
2. Tilt device
   → 3D eye follows device tilt ✓
   → Debug overlay shows: "Gyro Permission: GRANTED"
```

**Debug:** Triple-tap page → Green debug overlay appears

**If Not Working:**

| Issue | Solution |
|-------|----------|
| Gyro coords all 0.5 (centered) | Device may not have gyroscope OR app needs permission |
| Permission shows "UNKNOWN" after first tap | Permission request failed; try refreshing page |
| Works but sluggish | Check if browser is throttling (Chrome Dev Tools → Performance) |
| Works on one app, not another | Chrome/Firefox have different permissions - check settings |

---

### Desktop (Chrome, Firefox, Safari)

**Expected Flow (Desktop):**
```
1. Page loads
   → No gyro (not a mobile device)
   
2. Move mouse
   → 3D eye follows cursor ✓
   → Debug overlay shows: "Device: DESKTOP"
```

**Debug:** Press F12 → Toggle Device Emulation (Ctrl+Shift+M on Chrome) → Select iPhone

---

## Understanding the Debug Overlay

```
GYRO DEBUG
Device: MOBILE
Gyro Permission: GRANTED    ← 🟢 GRANTED, 🟠 UNKNOWN, 🔴 DENIED
Gyro Active: ON             ← 🟢 ON, 🔴 OFF
---
Gyro Coords:
X: 0.547 | Y: 0.312
---
Mouse Coords:
X: 0.500 | Y: 0.500
```

**What to look for:**
- **Gyro Permission = GRANTED** → Permission successful
- **Gyro Active = ON** → Gyro events being received
- **Gyro Coords changing** as you tilt → Device sending correct data
- **Mouse Coords only change** on desktop (not on mobile with gyro)

---

## Common Issues & Solutions

### Issue 1: iOS Permission Dialog Never Appears

**Root Cause:** `DeviceOrientationEvent.requestPermission()` wasn't triggered
**Solution:**
1. Make sure you're on HTTPS (gyroscope blocks HTTP)
2. Make sure you TAP the page after loading (permission only requests on user gesture)
3. Try different tap locations (top, middle, bottom)
4. Reload page and try again
5. Check Safari settings: Settings → Safari → Privacy → Motion & Orientation → ON

**Advanced Debug:**
Open Safari Console (Develop menu) and paste:
```javascript
DeviceOrientationEvent.requestPermission().then(permission => {
  console.log('Permission result:', permission)
}).catch(e => console.error('Error:', e))
```
This will manually trigger the permission dialog.

---

### Issue 2: Android Gyro Not Activating

**Root Cause:** Gyroscope sensor not detected OR permission not granted
**Solution:**
1. Go to App Settings → Permissions → Sensor/Location
2. Ensure "Sensor" or "Accelerometer" is enabled
3. Check if browser has permission: Chrome Settings → Apps & notifications → Permissions
4. Try on a different browser (Firefox, Samsung Internet)
5. Some budget Android phones may not have gyroscope

**Test if device has gyro:**
Open Chrome Console and paste:
```javascript
if ('DeviceOrientationEvent' in window) {
  console.log('✓ Gyroscope supported')
} else {
  console.log('✗ Gyroscope NOT supported')
}
```

---

### Issue 3: Gyro Coords Stuck at 0.5, 0.5

**Root Cause:** Device lying flat OR gyroscope events not being received
**Solution:**
1. Hold device at an angle (not flat on table)
2. Slowly tilt forward/backward/side-to-side
3. Check if debug shows "Gyro Active: ON"
4. Device may need calibration: Rotate device in figure-8 motion for 30 seconds

---

### Issue 4: Works on One Device, Not Another

**Root Cause:** Device/Browser/OS differences
**Solutions by Device:**
- **iPhone with old iOS** - Update to iOS 13+
- **Android older than 9** - May not support gyroscope API
- **Chrome** - Usually works; check: `chrome://flags` → Search "motion"
- **Safari** - Requires HTTPS + explicit permission
- **Firefox** - Works but requires permission grant
- **Samsung Internet** - Works natively on Samsung devices

---

## Performance Monitoring

### Check if Gyro is Causing Frame Drops

1. Open **Chrome DevTools** → **Performance** tab
2. Record for 5 seconds while tilting device
3. Look at FPS graph
   - **Should be ≥ 50 FPS** for smooth animation
   - **Below 30 FPS** = performance issue

**If Gyro Causes Drops:**
- Reduce 3D model complexity
- Reduce `deviceorientation` event frequency
- Use `requestAnimationFrame` throttling

---

## Testing Checklist

Before considering implementation complete:

- [ ] **iOS Safari**
  - [ ] Load on iPhone via HTTPS
  - [ ] First tap triggers permission dialog
  - [ ] After "Allow", gyro coords change
  - [ ] 3D eye follows tilt
  - [ ] No console errors

- [ ] **Android Chrome**
  - [ ] Load on Android phone
  - [ ] Gyro active without permission dialog
  - [ ] 3D eye follows tilt immediately
  - [ ] No console errors

- [ ] **Desktop Chrome**
  - [ ] Load on desktop
  - [ ] Mouse works as fallback
  - [ ] No gyro request on desktop
  - [ ] No console errors

- [ ] **Fallback Scenarios**
  - [ ] iOS with permission DENIED → Mouse works
  - [ ] Android without gyro sensor → Mouse works
  - [ ] Gyro permission revoked → Recovers on next interaction

- [ ] **Debug Overlay**
  - [ ] Triple-tap shows panel
  - [ ] Shows correct device type
  - [ ] Shows permission status
  - [ ] Shows live gyro/mouse coords

---

## Console Logging

The hooks log to console for debugging. Check:
```
✓ iOS Gyroscope permission granted
✓ Android/Non-iOS Gyroscope activated
✗ iOS Gyroscope permission denied
✗ Gyroscope not supported on this device
```

Open DevTools Console (F12) to see these logs.

---

## Next Steps if Still Not Working

1. **Share logs** from console when testing
2. **Test direct API** with the manual permission request above
3. **Check device capabilities** - Some phones may not have gyroscope
4. **Verify HTTPS** - Gyroscope requires secure context
5. **Try different browser** - Sometimes browser-specific issue

---

## Fine-Tuning Sensitivity

If gyro movement is too fast or too slow:

Edit `src/hooks/useDeviceOrientation.js` line ~53:
```javascript
const x = (gamma / 90) * 0.8 + 0.5  // ← Change 0.8 here
const y = (beta / 90) * 0.8 + 0.5   // ← Change 0.8 here
```

- **Increase 0.8** (e.g., 1.0) = More sensitive movement
- **Decrease 0.8** (e.g., 0.4) = Less sensitive, more stable

---

## References

- [MDN: DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)
- [iOS Motion Permissions](https://webkit.org/blog/11312/updates-to-storage-api-and-privacy/)
- [Secure Context (HTTPS)](https://developer.mozilla.org/en-US/docs/Glossary/Secure_context)
