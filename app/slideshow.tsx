// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Slideshow = () => {
//   const [slideIndex, setSlideIndex] = useState(1);
//   const slides: string[] = [
//     '/Safeopsia-1.png',
//     '/Safeopsia-2.png',
//     '/Safeopsia-3.png',
//   ];

//   useEffect(() => {
//     showSlides(slideIndex);
//   }, [slideIndex]);

//   const plusSlides = (n: number) => {
//     setSlideIndex((prev) => {
//       let newIndex = prev + n;
//       if (newIndex > slides.length) newIndex = 1;
//       if (newIndex < 1) newIndex = slides.length;
//       return newIndex;
//     });
//   };

//   const currentSlide = (n: number) => {
//     setSlideIndex(n);
//   };

//   const showSlides = (n: number) => {
//     let i;
//     const slidesElements = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
//     const dots = document.getElementsByClassName('demo') as HTMLCollectionOf<HTMLImageElement>;
//     const captionText = document.getElementById('caption');

//     if (n > slidesElements.length) setSlideIndex(1);
//     if (n < 1) setSlideIndex(slidesElements.length);

//     for (i = 0; i < slides.length; i++) {
//         slidesElements[i].style.display = "none";
//       }

//     for (i = 0; i < dots.length; i++) {
//       if (dots[i]) {
//         dots[i].className = dots[i].className.replace(' active', '');
//       }
//     }

//     if (slidesElements[slideIndex - 1]) {
//       slidesElements[slideIndex - 1].style.display = 'block';
//     }

//     if (dots[slideIndex - 1]) {
//       dots[slideIndex - 1].className += ' active';
//     }

//     if (captionText) {
//       if (dots[slideIndex - 1]) {
//         captionText.innerHTML = dots[slideIndex - 1].alt;
//       }
//     }
//   };

//   return (
//     <div className="container">
//       {slides.map((slideUrl, index) => (
//         <div key={index + 1} className="mySlides">
//           <div className="numbertext">{index + 1} / {slides.length}</div>
//           <Image src={slideUrl} layout="responsive" width={700} height={475} alt={`Slide ${index + 1}`} />
//         </div>
//       ))}
//       <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
//       <a className="next" onClick={() => plusSlides(1)}>❯</a>
//       <div className="caption-container">
//         <p id="caption"></p>
//       </div>
//       <div className="row">
//         {slides.map((slideUrl, index) => (
//           <div key={index + 1} className="column">
//             <img
//               className="demo cursor"
//               src={slideUrl}
//               style={{ width: '100%' }}
//               onClick={() => currentSlide(index + 1)}
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
