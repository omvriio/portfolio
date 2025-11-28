import { useEffect } from 'react'
import { useNavigationStore } from '../store/navigationStore'

export const useScrollNavigation = () => {
  const { setActiveSection, isAnimating } = useNavigationStore()

  useEffect(() => {
    let scrollTimeout

    const handleWheel = (e) => {
      // Don't trigger if animation is already playing
      if (isAnimating) return

      clearTimeout(scrollTimeout)

      const sections = ['home', 'about', 'work', 'projects', 'skills', 'contact']
      const { activeSection } = useNavigationStore.getState()
      const currentIndex = sections.indexOf(activeSection)

      if (e.deltaY > 0) {
        // Scroll down - go to next section
        const nextIndex = (currentIndex + 1) % sections.length
        setActiveSection(sections[nextIndex])
      } else if (e.deltaY < 0) {
        // Scroll up - go to previous section
        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1
        setActiveSection(sections[prevIndex])
      }

      // Debounce scrolling - prevent rapid changes
      scrollTimeout = setTimeout(() => {
        // Timeout cleared, ready for next scroll
      }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [isAnimating, setActiveSection])
}
