import { create } from 'zustand';
import { AuthState } from '@/types';

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  
  login: async (email: string, password: string) => {
    try {
      // Add your login logic here
      set({ isLoading: false, error: null });
    } catch (error) {
      set({ error: 'Login failed', isLoading: false });
    }
  },

  logout: async () => {
    // Add your logout logic here
    set({ user: null });
  },

  checkAuth: async () => {
    try {
      // Add your auth check logic here
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  }
}));