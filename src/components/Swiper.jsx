import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";


import { EffectCoverflow, Autoplay } from "swiper/modules";

const API_KEY = "33027161-d89bfd7878d1ab614bd7e969e";

export default function SwiperGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&orientation=horizontal&per_page=10`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits || []));
  }, []);

  return (
    <section className="gallery">
      
      <h2 className="title">Beautiful nature</h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        slidesPerView={3}
        centeredSlides
        loop
        grabCursor
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        className="swiper-container"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id} className="slide">
            <img src={img.largeImageURL} alt={img.tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
