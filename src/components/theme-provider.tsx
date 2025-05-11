"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string // "class" or "data-theme"
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme", // Using vite-ui-theme as a common key, can be changed
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === "undefined") {
      return defaultTheme
    }
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme
    } catch (e) {
      // Unsupported
      console.error("Error reading theme from localStorage", e)
      return defaultTheme
    }
  })

  React.useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const applyTheme = (newTheme: Theme) => {
      root.classList.remove("light", "dark")

      if (newTheme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        root.classList.add(systemTheme)
        return
      }
      root.classList.add(newTheme)
    }
    
    if (disableTransitionOnChange) {
        const ssrTheme = document.documentElement.dataset.theme;
        if (ssrTheme && ssrTheme !== theme) {
          // If SSR theme is different, don't transition
        } else {
          root.style.transition = "color 0.3s, background-color 0.3s";
        }
    }


    applyTheme(theme)

    try {
      localStorage.setItem(storageKey, theme)
    } catch (e) {
      // Unsupported
    }

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
       if (disableTransitionOnChange) {
        root.style.removeProperty('transition');
      }
    }
  }, [theme, storageKey, attribute, enableSystem, disableTransitionOnChange])

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
