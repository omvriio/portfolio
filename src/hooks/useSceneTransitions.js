// useSceneTransitions Hook - Core GSAP animation logic for 3D scene choreography
import { useCallback } from 'react'
import { useNavigationStore } from '../store/navigationStore'
import gsap from 'gsap'

export const useSceneTransitions = (cameraRef, eyeRef) => {
  const { setIsAnimating } = useNavigationStore((state) => ({
    setIsAnimating: state.setIsAnimating,
  }))

  const onAnimationStart = () => setIsAnimating(true)
  const onAnimationComplete = () => setIsAnimating(false)

  // Core transition controller - animates camera and eye model based on active section
  const transitionTo = useCallback((section) => {
    const camera = cameraRef.current
    const eye = eyeRef.current

    if (!camera || !eye) return

    // Kill any existing animations to prevent conflicts
    gsap.killTweensOf([camera.position, camera.rotation, eye.position, eye.rotation])

    // --- SCENARIO 1: "HOME" (The Default State) ---
    if (section === 'home') {
      const tl = gsap.timeline({
        onStart: onAnimationStart,
        onComplete: onAnimationComplete
      })

      tl
        // Reset camera to center, forward-facing
        .to(
          camera.position,
          { x: 0, y: 0, z: 5, duration: 1.5, ease: 'power3.inOut' },
          0
        )
        .to(
          camera.rotation,
          { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power3.inOut' },
          0
        )
        // Reset eye model to center and forward facing
        .to(
          eye.position,
          { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power3.inOut' },
          0
        )
        .to(
          eye.rotation,
          { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power3.inOut' },
          0
        )
    }

    // --- SCENARIO 2: "ABOUT" (Tilt to Side Profile) ---
    // This implements the specific "about" request with camera tilted and eye in profile
    if (section === 'about') {
      const tl = gsap.timeline({
        onStart: onAnimationStart,
        onComplete: onAnimationComplete
      })

      tl
        // Move camera to frame the side layout
        .to(
          camera.position,
          { x: 2, y: 0, z: 4, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Rotate camera to look at the tilted eye
        .to(
          camera.rotation,
          { x: 0, y: 0.3, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Move eye to the side
        .to(
          eye.position,
          { x: -1.5, y: 0.5, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Tilt eye to side profile (rotate around Y axis)
        .to(
          eye.rotation,
          { x: 0, y: -Math.PI / 2.5, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
    }

    // --- SCENARIO 3: "WORK" (Experience View) ---
    if (section === 'work') {
      const tl = gsap.timeline({
        onStart: onAnimationStart,
        onComplete: onAnimationComplete
      })

      tl
        // Camera perspective looking from above-left
        .to(
          camera.position,
          { x: -2, y: 1.5, z: 4, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          camera.rotation,
          { x: -0.2, y: -0.3, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Eye leans forward slightly
        .to(
          eye.position,
          { x: 0, y: -0.5, z: 0.5, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Eye rotates to look downward (contemplative)
        .to(
          eye.rotation,
          { x: 0.3, y: 0, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
    }

    // --- SCENARIO 4: "PROJECTS" (Showcase View) ---
    if (section === 'projects') {
      const tl = gsap.timeline({
        onStart: onAnimationStart,
        onComplete: onAnimationComplete
      })

      tl
        // Camera positioned to look from an angle
        .to(
          camera.position,
          { x: 1.5, y: 2, z: 4, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          camera.rotation,
          { x: -0.3, y: 0.2, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Eye looks forward and slightly up (proud/showcase)
        .to(
          eye.position,
          { x: 0.5, y: 0.8, z: -1, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          eye.rotation,
          { x: -0.2, y: 0.1, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
    }

    // --- SCENARIO 5: "SKILLS" (Technical Focus) ---
    if (section === 'skills') {
      const tl = gsap.timeline({
        onStart: onAnimationStart,
        onComplete: onAnimationComplete
      })

      tl
        // Camera positioned opposite side from "about"
        .to(
          camera.position,
          { x: -2.5, y: 1, z: 4, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          camera.rotation,
          { x: -0.1, y: -0.4, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Eye rotates to look at the right (profile variation)
        .to(
          eye.position,
          { x: 1.5, y: 0.3, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          eye.rotation,
          { x: 0, y: Math.PI / 2.5, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
    }

    // --- SCENARIO 6: "CONTACT" (Connection View) ---
    if (section === 'contact') {
      const tl = gsap.timeline({
        onStart: onAnimationStart,
        onComplete: onAnimationComplete
      })

      tl
        // Camera moves closer, more intimate angle
        .to(
          camera.position,
          { x: 0.5, y: 0.5, z: 3.5, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          camera.rotation,
          { x: -0.1, y: 0.05, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
        // Eye faces more forward and slightly down (approachable)
        .to(
          eye.position,
          { x: 0, y: -0.3, z: 0.2, duration: 2, ease: 'power3.inOut' },
          0
        )
        .to(
          eye.rotation,
          { x: 0.1, y: 0, z: 0, duration: 2, ease: 'power3.inOut' },
          0
        )
    }
  }, [cameraRef, eyeRef, setIsAnimating])

  return { transitionTo }
}
