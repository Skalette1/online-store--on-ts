import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { carousel } from "../mocks/carouselMocks";

export const Carousel = () => {
  return (
    <div>
      <div className="carousel">
        <h2>Игры со схожей сюжетной линией</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          speed={700}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {carousel.map((item, id) => (
            <div className="" key={id}>
              <SwiperSlide>
                <div className="slide">
                  <img src={item.img} alt="bird" /> <p>{item.name}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <img src={item.img} alt="bird" /> <p>{item.name}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
