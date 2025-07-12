"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function HeroSlider() {
  const [images] = useState([
    "/images/hero1.jpg",
    "/images/hero3.jpg", 
    "/images/hero4.jpg",
    "/images/hero5.jpg",
    "/images/hero6.jpg",
    "/images/hero7.jpg"
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <div className="relative w-full h-[40vh] md:h-[75vh] lg:h-[90vh]">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
