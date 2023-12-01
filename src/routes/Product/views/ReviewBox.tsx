import { Input } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import StarRating from '@components/StarRating/StarRating';

export default function ReviewBox() {
  return (
    <div className="rounded border bg-gray-100 p-3">
      <Form onSubmit={() => {}}>
        <div className="flex w-full gap-5">
          <Input
            name="comment"
            placeholder="This product is very.... it made me feel... overall I rate it..."
            styles="flex-grow"
          />
          <div className="w-80 bg-gray-400">image box here </div>
        </div>
        <div className="flex items-center pt-4">
          <div className="grow">
            <StarRating rating={0} />
          </div>
          <button className="flex h-min rounded border-0 bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}
