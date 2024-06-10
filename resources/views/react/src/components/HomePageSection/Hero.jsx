import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { src: "/images/image1.webp", alt: "Slide 1", title: "Saving Lives Red Cross Society", description: "Compassion drives us. Together, we serve, uplift", buttonText: "Button 1" },
    { src: "/images/image2.jpg", alt: "Slide 2", title: "Title for Slide 2", description: "Description for Slide 2", buttonText: "Button 2" },
    { src: "/images/image1.webp", alt: "Slide 3", title: "Title for Slide 3", description: "Description for Slide 3", buttonText: "Button 3" },
    { src: "/images/image3.jpg", alt: "Slide 4", title: "Title for Slide 4", description: "Description for Slide 4", buttonText: "Button 4" },
    { src: "/images/image2.jpg", alt: "Slide 5", title: "Title for Slide 5", description: "Description for Slide 5", buttonText: "Button 5" }
  ];

  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    const img = imageRef.current;
    if (img && img.complete) {
      calculateBrightness();
    } else {
      img.addEventListener('load', calculateBrightness);
    }
    return () => {
      if (img) {
        img.removeEventListener('load', calculateBrightness);
      }
    };
  }, [activeIndex]);

  const calculateBrightness = () => {
    const img = imageRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const data = ctx.getImageData(0, 0, img.width, img.height).data;
    let brightness = 0;

    // Sample pixels for performance
    for (let i = 0; i < data.length; i += 40) {
      brightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
    }

    
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="hero relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <div className="absolute w-full h-full opacity-55">
              {index === activeIndex && (
                <img ref={imageRef} src={item.src} alt={item.alt} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              )}
            </div>
            <div className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-black`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{item.title}</h1>
              <p className="text-sm sm:text-base md:text-lg text-center mb-4 sm:mb-6">{item.description}</p>
              <a
                href={item.buttonText}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-black bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Hero;
