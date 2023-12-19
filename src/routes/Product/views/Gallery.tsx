import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Gallery({ images }: { images: string[] }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className="flex min-h-[50vh] items-center">
        <Swiper spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}>
          {images.map(image => (
            <SwiperSlide key={image}>
              <div className="flex justify-center">
                <img src={image} className="aspect-square object-scale-down" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="my-5 border-t-2 border-gray-200" />
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <div>
              <img src={image} className="aspect-square cursor-pointer object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
