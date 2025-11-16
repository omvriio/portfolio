// Navigation Store - Manages transition states
import { create } from 'zustand'

export const useNavigationStore = create((set) => ({
  // States
  isTransformed: false,
  activeSection: null,
  hoveredSegment: null,
  
  // Actions
  setTransformed: (section = null) => set({ isTransformed: true, activeSection: section }),
  setActiveSection: (section) => set({ activeSection: section }),
  setHoveredSegment: (segment) => set({ hoveredSegment: segment }),
  resetToLanding: () => set({ isTransformed: false, activeSection: null, hoveredSegment: null })
}))
