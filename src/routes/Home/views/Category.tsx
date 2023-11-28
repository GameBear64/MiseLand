import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icon from '@components/Icon/Icon';

import { randomRange } from '@utils/utils';

import { IItem } from '../slices/types';

export default function Category({ name, items }: { name: string; items: IItem[] }) {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });

  return (
    <>
      <h3 className="ml-10 mt-10 text-3xl font-semibold capitalize">{name}</h3>
      <div className="flex flex-wrap gap-5 px-10">
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
            <SwiperSlide key={item.id} style={{ width: 'auto' }}>
              <div
                className="my-5 w-72 overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
                key={item.id}
              >
                <img className="h-48 w-full object-cover object-center" src={item.images[0]} alt="Product Image" />
                <div className="p-4">
                  <h2 className="mb-2 overflow-hidden whitespace-nowrap text-lg font-medium text-gray-900">{item.title}</h2>
                  <div className="text-yellow-500">
                    <Icon icon="star" full />
                    <Icon icon="star" full />
                    <Icon icon="star" full />
                    <Icon icon="star" full />
                    <Icon icon="star" />
                    <span className="ml-3 mr-2 rounded bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary-dark ">
                      {item.rating}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 ">
                      {currency.format(item.price - (item.price / 100) * item.discountPercentage)}
                    </p>
                    <p className="text-base  font-medium text-gray-500 line-through ">${item.price}</p>
                    <p className="ml-auto text-base font-medium text-green-500">{item.discountPercentage}% off</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
