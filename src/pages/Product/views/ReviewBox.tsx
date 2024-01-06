import { useContext } from 'react';

import { MediaSelect, Stars, Textarea } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import { MIN_LENGTH, REQUIRED } from '@components/Form/validations';

import { ProductContext } from '../Product';
import { IComment } from '../slices/types';

import { useAddCommentMutation } from './../slices/endpoints';

export default function ReviewBox() {
  const { _id } = useContext(ProductContext)!;

  const [addComment] = useAddCommentMutation();

  const handleSubmit = (body: IComment) => {
    addComment({ _id, body });
  };

  return (
    <div className="rounded border bg-gray-100 p-3">
      <Form onSubmit={handleSubmit}>
        <div className="flex w-full gap-5">
          <Textarea
            name="comment"
            placeholder="This product is very.... it made me feel... overall I rate it..."
            styles="flex-grow"
            rows="4"
            rules={{ ...REQUIRED, ...MIN_LENGTH(30) }}
          />
          <MediaSelect name="image" label="Upload image" accept=".png,.jpg,.jpeg" />
        </div>
        <div className="flex items-center pt-6">
          <div className="grow text-xl">
            <Stars name="rating" rules={REQUIRED} />
          </div>
          <button className="flex h-min rounded border-0 bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}
