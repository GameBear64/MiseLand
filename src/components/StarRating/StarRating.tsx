import Icon from '@components/Icon/Icon';

export default function StarRating({ rating = 5 }: { rating: number }) {
  const fullStars = Array.from({ length: Math.round(rating) }, (_, i) => i + 1);
  const hollowStars = Array.from({ length: 5 - Math.round(rating) }, (_, i) => i + 1);

  return (
    <div className="flex items-center text-yellow-500">
      {fullStars.map(i => (
        <Icon key={i} icon="star" full dense />
      ))}
      {hollowStars.map(i => (
        <Icon key={i} icon="star" dense />
      ))}
    </div>
  );
}
