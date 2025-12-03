// Device capability store
import { create } from 'zustand'

export const useDeviceStore = create((set) => ({
  // Device type detection
  deviceType: 'desktop', // 'desktop' | 'android' | 'ios'
  isMobile: false,
  isTablet: false,
  
  // Gyroscope state
  gyroActive: false,
  gyroPermission: 'unknown', // 'granted' | 'denied' | 'unknown'
  gyroSupported: false,
  
  // Viewport
  viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
  viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 768,
  
  // Methods
  setDeviceType: (type) => set({ deviceType: type }),
  setIsMobile: (mobile) => set({ isMobile: mobile }),
  setIsTablet: (tablet) => set({ isTablet: tablet }),
  setGyroActive: (active) => set({ gyroActive: active }),
  setGyroPermission: (permission) => set({ gyroPermission: permission }),
  setGyroSupported: (supported) => set({ gyroSupported: supported }),
  setViewport: (width, height) => set({ viewportWidth: width, viewportHeight: height }),
}))
