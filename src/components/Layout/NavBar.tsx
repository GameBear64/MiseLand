import { Input } from '@components/Form/Fields';
import Form from '@components/Form/Form';
import Icon from '@components/Icon/Icon';

export default function NavBar() {
  return (
    <div className="flex h-12 w-full items-center justify-between border-b border-base-subtle bg-base px-4 shadow">
      <p>M</p>
      <div className="flex w-1/3 items-center justify-between gap-5">
        <div className="mx-10 grow">
          <Form onSubmit={() => {}}>
            <Input name="search" />
          </Form>
        </div>
        <Icon icon="shopping_cart" />
        <Icon icon="menu" />
      </div>
    </div>
  );
}
