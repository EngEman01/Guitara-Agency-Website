import { useEffect, useState } from 'react';
import SplitType from 'split-type'; // Ensure SplitType is installed
import { gsap } from 'gsap';
import GuitaraHome from './Home.module.css';
import Hexagon from '../Hexagon/Hexagon';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // To track which word is currently visible
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track which image is currently displayed

  // Array of images for the slider
  const sliderImages = [
    './images/home-slider-slide-2.jpg',
    // './images/home-slider-slide-2.jpg',
    // './images/home-slider-slide-2.jpg',
    './images/How-to-Get-a-Social-Media-Manager-Job.jpg',
    './images/socail.webp',
  ];

  useEffect(() => {
    // Change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sliderImages.length]);

  useEffect(() => {
    // Split the "LiveStreaming Services" text into characters
    const myText = new SplitType('#my-text', {
      types: 'words, chars',
      tagName: 'span',
    });

    // Function to handle the animation when the text comes into view
    const handleScrollAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger the GSAP animation for LiveStreaming Services text
          gsap.fromTo(
            '.char',
            {
              y: 115, // Initial state (off-screen)
            },
            {
              y: 0, // Final state (in place)
              stagger: 0.05, // Stagger delay
              duration: 0.5, // Duration of the animation
              delay: 0.2, // Delay before animation starts
            }
          );
          // Once the animation is triggered, we can stop observing the element
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer for the LiveStreaming Services text
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5, // The element must be at least 50% in view to trigger the animation
    });

    // Start observing the LiveStreaming Services element
    const target = document.querySelector('#my-text');
    observer.observe(target);

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <>
      <div className={GuitaraHome.homeStyle}>
        {/******************************  Guitara Home Page *****************************************************/}
        <div className={GuitaraHome.guitaraImage}>
          
          <img
            className={GuitaraHome.homeImage}
            src={sliderImages[currentImageIndex]}
            alt="Guitara"
          />
          <div className={GuitaraHome.sliderDots}>
             {sliderImages.map((_, index) => (
              <span key={index}className={`${GuitaraHome.dot} ${currentImageIndex === index ? GuitaraHome.activeDot : ''}`}
                    onClick={() => setCurrentImageIndex(index)}>  
               </span>
             ))}
           </div>
          
        </div>
      {/* </div> */}

      <div className={GuitaraHome.App}>
        <div className={GuitaraHome.guitaraServices}>
          <div className={GuitaraHome.ServicesText}>
            <h1 id="my-text">LiveStreaming Services</h1>
          </div>
          <Hexagon />

        </div>
      </div>
    </div >
    </>
  );

}

