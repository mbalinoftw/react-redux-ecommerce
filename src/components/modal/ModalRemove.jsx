import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, remove } from "../../redux/features/cart/cartSlice";
import { close } from "../../redux/features/cart/modalSlice";

const ModalRemove = () => {
  const dispatch = useDispatch();
  const { isOpen, item } = useSelector((store) => store.modal);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch(close())}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-800 text-center">
                    {item ? "Delete product" : "Clear cart"}
                  </Dialog.Title>
                  <div className="mt-2">
                    {/* 
                      If an item is selected prompt to delete that item
                      else prompt to clear all items
                    */}
                    <p className="text-md text-gray-400 text-center">
                      Remove {item ? item.title : "all your items"} from your cart?
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                      onClick={() => {
                        dispatch(close());
                      }}>
                      Cancel
                    </button>
                    {/* 
                      If an item is selected prompt to delete that item
                      else prompt to clear cart 
                    */}
                    {item ? (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                        onClick={() => {
                          dispatch(remove(item));
                          dispatch(close());
                        }}>
                        Confirm
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                        onClick={() => {
                          dispatch(clearCart());
                          dispatch(close());
                        }}>
                        Confirm
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalRemove;
