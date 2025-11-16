// Custom hook for scroll transformation trigger
import { useEffect } from 'react'

export const useScrollTransform = (onTransform, enabled = true) => {
  useEffect(() => {
    if (!enabled) return

    const handleScroll = () => {
      // Trigger when scrolled past 50vh (half viewport)
      if (window.scrollY > window.innerHeight * 0.5) {
        onTransform()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [onTransform, enabled])
}
