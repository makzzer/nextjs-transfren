"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// Carga dinámica del componente Slider solo en el lado del cliente
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image

              src="/maclaren.webp"
              alt="macla"
              className="w-full transition-transform duration-200 md:min-h-[400px] max-h-screen  ease-in-out transform hover:scale-110"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/redbull.jpg"
              alt="redbu"
              className="w-full transition-transform duration-200 md:min-h-[400px] max-h-screen  ease-in-out transform hover:scale-110"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/ferrarif1.jpg"
              alt="ferraf1"
              className="w-full transition-transform duration-200 md:min-h-[400px] max-h-screen  ease-in-out transform hover:scale-110"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carrousel;
