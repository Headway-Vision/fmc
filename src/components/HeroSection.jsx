import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons

export default function HeroSection() {
  const images = [
    "/img 1.avif",
    "/img-2.webp",
    "/img-3.jpg",
    "/img-4.jpeg",
    "/img-5.png",
    "/img-6.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Softer overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

      {/* Text Content */}
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Path to Knowledge and Success
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering Students for a Brighter Future
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}