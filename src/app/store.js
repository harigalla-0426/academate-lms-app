import { create } from 'zustand'

const useStore = create((set) => ({
  storeCourseObj: null,
  storeCourseCards: null,
  storeCourseDeadlines: null,
  setCourseObj: (newObj) => set({ storeCourseObj: newObj }),
  setCourseCards: (newObj) => set({ storeCourseCards: newObj }),
  setCourseDeadlines: (newObj) => set({ storeCourseDeadlines: newObj }),
}))

export default useStore
