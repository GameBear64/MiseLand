import { useAdvanceOrderMutation, useDeclineOrderMutation } from '@pages/Orders/slices/endpoints';

import { timeFormatter } from '@utils/utils';

import { IOrder } from './slices/types';

export default function Order({ item, incoming }: { item: IOrder; incoming?: boolean }) {
  const [advance] = useAdvanceOrderMutation();
  const [decline] = useDeclineOrderMutation();

  return (
    <div className="my-3 flex justify-between rounded-lg bg-white p-6 shadow-md">
      <img
        src={`http://localhost:3030/image/${item.product.images[0]}?size=150`}
        alt="product-image"
        className="w-40 object-cover object-center"
      />

      <div className="ml-4 flex w-full justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {item.product.title} <span className="font-thin text-onBase">x {item.quantity}</span>
          </h2>
          <p className="text-sm font-semibold text-green-600">${item.product.price}</p>
          <p className="mt-1 text-xs text-gray-700">{item.product.description}</p>
          <p className="mt-1 text-xs text-gray-700">
            For <span className="font-semibold">{item?.author?.name}</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="font-semibold">{item.status}</p>
          {!['Declined', 'Completed'].includes(item.status) && (
            <>
              {incoming && (
                <button className="rounded-md bg-green-500 p-2 font-semibold text-white" onClick={() => advance(item._id)}>
                  Advance
                </button>
              )}
              <button className="rounded-md bg-red-500 p-2 font-semibold text-white" onClick={() => decline(item._id)}>
                Decline
              </button>
            </>
          )}
          <div className="text-right">
            <p>
              Ordered: <span className="font-semibold">{timeFormatter.format(new Date(item.createdAt))}</span>
            </p>
            <p>
              Last Update: <span className="font-semibold">{timeFormatter.format(new Date(item.createdAt))}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
