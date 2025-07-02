"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  prevX: number
  prevY: number
  maxSpeed: number
}

export function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const numParticles = Math.min(300, Math.floor((canvas.width * canvas.height) / 8000))

      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0,
          vy: 0,
          prevX: 0,
          prevY: 0,
          maxSpeed: 1.5,
        })
      }
    }
    initParticles()

    // Perlin noise implementation
    const noise = (x: number, y: number, time: number) => {
      return Math.sin(x * 0.01 + time * 0.0005) * Math.cos(y * 0.01 + time * 0.0003) * 0.5 + 0.5
    }

    let time = 0

    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
      ctx.lineWidth = 1

      particlesRef.current.forEach((particle) => {
        // Store previous position
        particle.prevX = particle.x
        particle.prevY = particle.y

        // Calculate flow field angle using noise
        const angle = noise(particle.x, particle.y, time) * Math.PI * 4

        // Apply force based on flow field
        const force = 0.1
        particle.vx += Math.cos(angle) * force
        particle.vy += Math.sin(angle) * force

        // Limit velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > particle.maxSpeed) {
          particle.vx = (particle.vx / speed) * particle.maxSpeed
          particle.vy = (particle.vy / speed) * particle.maxSpeed
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Draw line from previous to current position
        ctx.beginPath()
        ctx.moveTo(particle.prevX, particle.prevY)
        ctx.lineTo(particle.x, particle.y)
        ctx.stroke()

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      time++
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
}
