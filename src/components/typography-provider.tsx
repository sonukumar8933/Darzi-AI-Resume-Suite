"use client"

import * as React from "react"

type Typography = "modern" | "bold"

type TypographyProviderProps = {
  children: React.ReactNode
  defaultTypography?: Typography
  storageKey?: string
}

type TypographyProviderState = {
  typography: Typography
  setTypography: (typography: Typography) => void
}

const initialState: TypographyProviderState = {
  typography: "modern",
  setTypography: () => null,
}

const TypographyProviderContext = React.createContext<TypographyProviderState>(initialState)

export function TypographyProvider({
  children,
  defaultTypography = "modern",
  storageKey = "ui-typography",
  ...props
}: TypographyProviderProps) {
  const [typography, setTypography] = React.useState<Typography>(() => {
    if (typeof window === "undefined") {
      return defaultTypography;
    }
    return (localStorage.getItem(storageKey) as Typography) || defaultTypography
  })

  React.useEffect(() => {
    const body = window.document.body
    body.classList.remove("font-style-modern", "font-style-bold")
    body.classList.add(`font-style-${typography}`)
  }, [typography])

  const value = {
    typography,
    setTypography: (typography: Typography) => {
      localStorage.setItem(storageKey, typography)
      setTypography(typography)
    },
  }

  return (
    <TypographyProviderContext.Provider {...props} value={value}>
      {children}
    </TypographyProviderContext.Provider>
  )
}

export const useTypography = () => {
  const context = React.useContext(TypographyProviderContext)

  if (context === undefined)
    throw new Error("useTypography must be used within a TypographyProvider")

  return context
}
