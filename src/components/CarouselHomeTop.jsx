import { useState, useEffect } from 'react';

export function CarouselHomeTop({ images }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showItem = (index) => {
    setCurrentSlideIndex(index);
  };

  const handleNextSlide = () => {
    const newIndex = (currentSlideIndex + 1) % images.length;
    showItem(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlideIndex]);

  return (
    <div className="relative w-full h-full" data-carousel="slide">
      <style>
        {`
          .animated-opacity {
            animation: fadeIn 0.5s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0.7;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="relative h-full w-full overflow-hidden rounded-lg flex flex-row">
        {images.map((image, index) => (
          <div className="duration-700 ease-in-out" key={index} style={{ display: index === currentSlideIndex ? 'block' : 'none' }}>
            <img src={image} className="w-screen h-full object-cover rounded-lg animated-opacity" alt="Imagen de Refood" />
          </div>
        ))}
      </div>

      <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlideIndex ? 'bg-black' : 'bg-gray-400'}`}
            aria-current={index === currentSlideIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => showItem(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
