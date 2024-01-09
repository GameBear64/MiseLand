import { Input, MediaSelect, Textarea } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import { MIN, MIN_LENGTH, REQUIRED } from '@components/Form/validations';

export default function Publish() {
  function handleSubmit() {}

  return (
    <div className="mt-8 bg-base-strong px-4 py-8 shadow sm:mx-auto sm:w-full sm:max-w-lg sm:rounded-lg sm:px-10">
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Flip phone 5 max ultra"
          name="title"
          label="Product name"
          rules={{
            ...REQUIRED,
            ...MIN_LENGTH(3),
          }}
        />
        <Input
          placeholder="Flip company"
          name="brand"
          label="Brand"
          rules={{
            ...REQUIRED,
            ...MIN_LENGTH(3),
          }}
        />
        <Textarea
          placeholder="This product is..."
          name="description"
          label="Description"
          rows="4"
          rules={{ ...REQUIRED, ...MIN_LENGTH(50) }}
        />
        <Input
          type="number"
          placeholder="50"
          name="price"
          label="Price"
          rules={{
            ...REQUIRED,
            ...MIN(1),
          }}
        />

        {/* <MediaSelect name="image" label="Upload image" accept=".png,.jpg,.jpeg" /> */}

        <button type="submit" className="button mt-5 w-full">
          Publish
        </button>
      </Form>
    </div>
  );
}
