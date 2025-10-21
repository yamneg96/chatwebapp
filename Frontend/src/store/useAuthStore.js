import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({ //We will take initial setter function in the parameters.
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async() => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({authUser: res.data})
    } catch (error) {
      set({authUser: null});
    } finally{
      set({isCheckingAuth: false});
    }
  },

  signup: async(data) => {
    
  }
}))