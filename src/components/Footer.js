import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper";
import "../css/footer.css"

const Gallery = () => {
  const galData = [
    {
      imgSrc: "https://thumbs.dreamstime.com/b/flat-lay-composition-mouse-keyboard-phrase-online-exam-white-wooden-table-178226763.jpg",
    },
    {
      imgSrc: "https://www.shutterstock.com/image-photo/elearning-education-people-concept-happy-260nw-1780467695.jpg",
    },
    {
      imgSrc: "https://blog.commlabindia.com/wp-content/uploads/2018/10/randomizing-questions-in-eLearning-assessments.jpg",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdJ_zD_aZwcSUjFluu4wxtAlsqHdqVUlhSNIL1PerHw&usqp=CAU&ec=48665701",
    },
    {
      imgSrc: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/11212007/Science-Quiz.png",
    },
    
  ];
  return (
    <>
      <div className="media container" id="gallery">
        <h2 head="Gallery"></h2>
        <Swiper
          effect={"coverflow"}
          slidesPerView={"auto"}
          centeredSlides={true}
          freeMode={true}
          followFinger={true}
          speed={1500}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
          className="myGallerySwiper"
        >
          {galData.map((item, idx) => (
            <SwiperSlide className="g-slide" key={Math.random() * idx}>
              <img
                src={item.imgSrc}
                alt="sitmun-highlights"
                className="swiper-lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;