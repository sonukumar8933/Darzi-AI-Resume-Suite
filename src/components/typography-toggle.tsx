"use client"

import * as React from "react"
import { useTypography } from "@/components/typography-provider"
import { Switch } from "@/components/ui/switch"

export function TypographyToggle() {
  const { typography, setTypography } = useTypography()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleToggle = (checked: boolean) => {
    setTypography(checked ? "bold" : "modern")
  }

  if (!isMounted) {
    return <div style={{ width: '50px', height: '30px' }} />;
  }
  
  return (
    <Switch
        checked={typography === 'bold'}
        onCheckedChange={handleToggle}
        aria-label="Toggle typography style"
    />
  )
}
