import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { randomRange } from '@utils/utils';

import { IItem } from './slices/types';
import Item from './Item';

export default function Slider({ name, items }: { name: string; items: IItem[] }) {
  return (
    <>
      <h3 className="mt-10 text-3xl font-semibold capitalize">{name}</h3>
      <div className="flex flex-wrap gap-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: randomRange(5000, 10000),
            disableOnInteraction: false,
          }}
        >
          {items.map((item: IItem) => (
            <SwiperSlide key={item._id} style={{ width: 'auto' }}>
              <Item item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
