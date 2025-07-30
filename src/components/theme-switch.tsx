"use client"

import * as React from "react"
import { useTheme } from "@/components/theme-provider"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleThemeChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setTheme(isChecked ? "dark" : "light", event)
  }
  
  const effectiveTheme = theme === 'system'
    ? (isMounted && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  if (!isMounted) {
    // Render a placeholder or nothing on the server to avoid hydration mismatch
    return <div className="theme-toggle-container" style={{ width: '80px', height: '34px' }}></div>;
  }

  return (
    <label className="theme-toggle-container">
      <input 
        type="checkbox" 
        id="theme-toggle-input"
        checked={effectiveTheme === 'dark'}
        // Pass the native event directly to the handler
        onClick={handleThemeChange}
        // Add an empty onChange to satisfy React's requirement for controlled components
        onChange={() => {}} 
      />
      <span className="theme-toggle-slider round">
        <div className="background"></div>
        <div className="star"></div>
        <div className="star"></div>
      </span>
    </label>
  )
}
