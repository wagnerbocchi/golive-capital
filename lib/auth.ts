"use client"

export interface User {
  id: string
  email: string
  name: string
}

export const AUTH_STORAGE_KEY = "golive_admin_auth"
export const ADMIN_CREDENTIALS = {
  email: "admin@golivecapital.com",
  password: "admin123",
}

export function login(email: string, password: string): User | null {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    const user: User = {
      id: "1",
      email: email,
      name: "Administrador",
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    }
    return user
  }
  return null
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }
}

export function getCurrentUser(): User | null {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem(AUTH_STORAGE_KEY)
    if (userStr) {
      return JSON.parse(userStr)
    }
  }
  return null
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
