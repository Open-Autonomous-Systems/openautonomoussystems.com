// pages/slideshow.tsx
"use client"

import { useState, useEffect } from "react"
import "../styles/styles.css"

const SlideshowPage = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    showSlides(slideIndex)
  }, [slideIndex])

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n
    if (newIndex > 3) newIndex = 1
    if (newIndex < 1) newIndex = 3
    setSlideIndex(newIndex)
  }

  const currentSlide = (n: number) => {
    setSlideIndex(n)
  }

  const showSlides = (n: number) => {
    const slides = document.getElementsByClassName("mySlides")
    const dots = document.getElementsByClassName("dot")

    if (slides.length > 0) {
      for (let i = 0; i < slides.length; i++) {
        ;(slides[i] as HTMLElement).style.display = "none"
      }

      for (let i = 0; i < dots.length; i++) {
        ;(dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "")
      }

      if (slides[n - 1]) {
        ;(slides[n - 1] as HTMLElement).style.display = "block"
      }
      if (dots[n - 1]) {
        ;(dots[n - 1] as HTMLElement).className += " active"
      }
    }
  }

  return (
    <div className="slideshow-container">
      {/* Slides */}
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="/Safeopsia-3.png" alt="Safeopsia first page" style={{ width: "100%" }} />
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="/uavs.png" alt="Safeopsia second page" style={{ width: "100%" }} />
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="/uas_kri.jpg" alt="Safeopsia third page" style={{ width: "100%" }} />
      </div>

      {/* Navigation */}
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      {/* Dots */}
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  )
}

export default SlideshowPage
