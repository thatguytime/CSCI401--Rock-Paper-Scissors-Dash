// stores the data from registration, login pages
// grabs the state 

import { create } from 'zustand'

const API_URL = import.meta.env.VITE_API_URL

//const API_URL = 'http://localhost:3000'
export const useAuthStore = create((set) => ({

    // sets initial state
    name: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
    isCheckingAuth: true,

    signup: async (username, email, password) => {
        set({ isLoading: true, error: null })

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, email, password })
            })
            const data = await response.json()

            // everything checks out
            set({ isLoading: false, isAuthenticated: true, user: data.user })
        } catch (error) {
            set({ isLoading: false, error: error.message })
            console.log(`Here is the error: \n${error}`)
            throw error
        }
    },

    verifyEmail: async (code) => {
        set({ isLoading: true, error: null })
        try {
            const response = await fetch(`${API_URL}/api/auth/verify-email`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({ code })
            })

            const data = await response.json()

            if (!response.ok) {
                set({ isLoading: false, error: data.message || 'Verification failed' })
            }

            set({ isLoading: false, isAuthenticated: true, user: data.user })
        } catch (error) {
            set({ isLoading: false, error: error.message })
            console.log(`Here is the error: \n${error}`)
            throw error
        }
    },

    login: async (email, password) => {
        set({ isLoading: true, error: null })
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            set({ isLoading: false, isAuthenticated: true, user: data.user })
        } catch (error) {
            set({ isLoading: false, error: error.message })
            console.log(`Here is the error: \n${error}`)
            throw error
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null })

        try {
            const response = await fetch(`${API_URL}/api/auth/check-auth`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", // passes cookies over
            })
            const data = await response.json()

            if (data.user) {
                set({ isCheckingAuth: false, isAuthenticated: true, user: data.user })
            } else {
                set({ isCheckingAuth: false, isAuthenticated: false, user: null })
            }

        } catch (error) {
            set({ isCheckingAuth: false, isAuthenticated: false, user: null })
            console.log(`You have an error homie...\n${error}`)
        }
    },

    logout: async () => {
        set({ isLoading: true, error: null })

        try {
            const response = await fetch(`${API_URL}/api/auth/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", // passes cookies over
            })
            const data = await response.json()

            set({ isCheckingAuth: false, isAuthenticated: false, user: null })
        } catch (error) {
            set({ isLoading: false, error: error.message })
            console.log(`You have an error homie...`)
            throw error
        }
    }
}))