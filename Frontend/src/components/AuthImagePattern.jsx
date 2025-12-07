import React, { useEffect, useState } from 'react'
import { AuthImagePatternImages } from '../assets/AuthImagePatternImages'

const AuthImagePattern = ({ title, subtitle }) => {
  const [images, setImages] = useState(AuthImagePatternImages)

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prevImages => {
        const newImages = [...prevImages]
        
        const i = Math.floor(Math.random() * newImages.length)
        const j = Math.floor(Math.random() * newImages.length)
        
        // swap
        const temp = newImages[i]
        newImages[i] = newImages[j]
        newImages[j] = temp
        
        return newImages
      })
    }, 1500) // swap every 1.5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='hidden lg:flex items-center justify-center bg-base-200 p-12'>
      <div className='max-w-md text-center'>
        
        {/* Image Grid */}
        <div className='grid grid-cols-3 gap-3 mb-8'>
          {images.map((img, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl overflow-hidden transition-all duration-500 ease-in-out`}
            >
              <img 
                src={img}
                alt={`Pattern ${i}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>

        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <p className='text-base-content/60'>{subtitle}</p>
      </div>
    </div>
  )
}

export default AuthImagePattern
