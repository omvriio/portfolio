// Navigation Store - Manages transition states
import { create } from 'zustand'

export const useNavigationStore = create((set) => ({
  // Scene Navigation State
  activeSection: 'home', // 'home', 'about', 'work', 'projects', 'skills', 'contact'
  setActiveSection: (section) => set({ activeSection: section }),
  
  // Animation State - prevents multiple animations firing at once
  isAnimating: false,
  setIsAnimating: (animating) => set({ isAnimating: animating }),
  
  // Hover State for interactive elements
  hoveredSegment: null,
  setHoveredSegment: (segment) => set({ hoveredSegment: segment }),
  
  // Legacy support (deprecated but kept for backward compatibility)
  isTransformed: false,
  setTransformed: (section = null) => set({ isTransformed: true, activeSection: section }),
  resetToLanding: () => set({ activeSection: 'home', isAnimating: false, hoveredSegment: null })
}))
