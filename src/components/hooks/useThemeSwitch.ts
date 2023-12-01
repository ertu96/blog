'use client'

import { useEffect, useState } from 'react'

export const useThemeSwitch = () => {
    const preferDarkQuery = '(prefers-color-scheme: dark)'
    const storageKey = 'theme'

    const toggleTheme = (theme: 'light' | 'dark') => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        window.localStorage.setItem(storageKey, theme)
    }

    const getUserPreference = () => {
        const userPreference = window.localStorage.getItem(storageKey)
        if (userPreference) {
            return userPreference as 'light' | 'dark'
        }
        return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'
    }

    const [mode, setMode] = useState('dark')

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const handleChange = () => {
            const newMode = getUserPreference()
            setMode(newMode)
            toggleTheme(newMode)
        }
        handleChange()
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if (mode === 'dark' || mode === 'light') toggleTheme(mode)
    }, [mode])

    return [mode, toggleTheme]
}
