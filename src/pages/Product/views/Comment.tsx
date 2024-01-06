import Icon from '@components/Icon/Icon';
import StarRating from '@components/StarRating/StarRating';

export default function Comment() {
  return (
    <div className="rounded border bg-gray-100 p-3">
      <div className="flex justify-between">
        <h4 className="text-lg font-semibold">User name here</h4>
        <StarRating rating={3} />
      </div>
      <p className="py-5 pr-24">
        This product is.... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente explicabo asperiores ut ipsum,
        ducimus iusto nam perspiciatis saepe deserunt aliquam numquam totam consequuntur voluptas velit voluptates? Quos odit
        omnis quae.
      </p>
      <img src="https://i.dummyjson.com/data/products/9/1.jpg" alt="image" className="max-w-xs" />
      <div className="flex justify-between pt-5">
        <button>
          <Icon icon="thumb_up" /> 6
        </button>
        <p className="text-gray-500">23/03/2025</p>
      </div>
    </div>
  );
}
