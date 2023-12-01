module.exports.get = async (req, res) => {
  res.status(200).json({
    id: 1,
    title: 'iPhone 9',
    description:
      'An apple mobile which is nothing like apple. The Apple iPhone 9 display is expected to be 5.2 inches (13.21 cm) tall. The Apple iPhone 9 screen will come with a resolution of 750 x 1334 pixels pixels. The Apple iPhone 9 processor is expected to be Apple A11 Bionic processor. Apple iPhone 9 RAM is speculated to be of 4 GB RAM and an internal storage of 64 GB. The smartphone comes packed with a 5.2 inches (13.21 cm)OLED Display and offers 750 x 1334 pixels screen resolution. It is powered by Apple A13 Bionic processor. It is backed by a 2050 mAh battery. The phone runs on iOS v13.Nov 17, 2023 Why did Apple skip the iPhone 2 and 9? Apple skipped the iPhone 2 and produced iPhone 3G to be in line with the 3G network that was upcoming. They skipped the iPhone 9 since it was their 10th anniversary, and it made more sense to release the iPhone X then. Skipping the two numbers helped them with their marketing.Aug 1, 2023',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
    ],
  });
};
