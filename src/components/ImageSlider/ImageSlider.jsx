import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="imageSlider">
      <div className="overflowHidden">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${currentIndex + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="slideNumber">
        <p>
          {currentIndex + 1}/{images?.length}
        </p>
      </div>

      <button onClick={prevSlide} className="navButton prev">
        <svg
          viewBox="0 0 96 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_316376_96)">
            <path
              d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_316376_96">
              <rect
                width="96"
                height="119.64"
                fill="white"
                transform="translate(0 0.303223)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <button onClick={nextSlide} className="navButton next">
        <svg
          viewBox="0 0 96 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_316376_100)">
            <path
              d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_316376_100)">
              <rect
                width="96"
                height="119.64"
                fill="white"
                transform="translate(0 0.825928)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;

// <div className="relative w-full ">
//   <div className="overflow-hidden">
//     <div
//       className="flex transition-transform duration-700 ease-in-out"
//       style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//     >
//       {images.map((image, index) => (
//         <div key={index} className="min-w-full">
//           <img
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-[255px] md:h-[415px] rounded-[25px]"
//           />
//         </div>
//       ))}
//     </div>
//   </div>

//   <button
//     onClick={prevSlide}
//     className="w-[24px] md:w-[96px] h-[24px] md:h-[120px] absolute top-1/2 left-0 transform -translate-y-1/2 text-white opacity-75 hover:opacity-100 focus:opacity-100"
//   >
//     <svg
//       viewBox="0 0 96 120"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g clipPath="url(#clip0_316376_96)">
//         <path
//           d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
//           fill="white"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_316376_96">
//           <rect
//             width="96"
//             height="119.64"
//             fill="white"
//             transform="translate(0 0.303223)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   </button>

//   <button
//     onClick={nextSlide}
//     className="w-[24px] md:w-[96px] h-[24px] md:h-[120px] absolute top-1/2 right-0 transform -translate-y-1/2 text-white opacity-75 hover:opacity-100 focus:opacity-100"
//   >
//     <svg
//       viewBox="0 0 96 121"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g clipPath="url(#clip0_316376_100)">
//         <path
//           d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
//           fill="white"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_316376_100">
//           <rect
//             width="96"
//             height="119.64"
//             fill="white"
//             transform="translate(0 0.825928)"
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   </button>
// </div>
