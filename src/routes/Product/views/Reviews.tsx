import Comment from './Comment';
import ReviewBox from './ReviewBox';

export default function Reviews() {
  return (
    <>
      <h3 className="my-10 text-3xl font-semibold capitalize">User reviews</h3>
      <div>
        <div className="flex flex-col gap-5">
          <ReviewBox />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  );
}
