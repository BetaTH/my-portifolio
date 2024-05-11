'use client'

import { useLayoutEffect, useState } from 'react'

export function useMediaQuery() {
  const [width, setWidth] = useState(0)

  function onResize() {
    setWidth(window.innerWidth)
  }

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    isMobile: width <= 640,
    isDesktop: width > 640,
  }
}
