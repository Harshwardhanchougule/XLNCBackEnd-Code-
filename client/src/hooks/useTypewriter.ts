"use client"

import { useState, useEffect } from "react"

export function useTypewriter(words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const type = () => {
      const currentWord = words[currentWordIndex]

      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        if (displayText === currentWord) {
          timer = setTimeout(() => {
            setIsDeleting(true)
          }, pauseTime)
          return
        }
      }
    }

    timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

