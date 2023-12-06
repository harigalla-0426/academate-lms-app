import { create } from 'zustand'

const useStore = create((set) => ({
  forgotObj: null,
  setForgotObj: (email, accessToken) => {
    set((state) => ({ forgotObj: { email, accessToken } }))
  },
  resetForgotObj: () => set({ forgotObj: null }),
}))

export default useStore
