import { useDispatch } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } from "../redux/cart/actions";
import { notify } from "../main/MainSection";
import { toast } from "sonner";

const Product = ({ index, product }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id));
    removeNotify()
  };
  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
    notify()
  };
  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
    decreaseNotify();
  };

  function decreaseNotify() {
    toast.info("Item removido!", {
      duration: 2000,
      className:
        "w-[14rem] h-[1.8rem] pl-[0.5rem] py-1 flex justify-left items-center",
    });
  }
  function removeNotify() {
    toast.error("Item removido!", {
      duration: 2000,
      className:
        "w-[14rem] h-[1.8rem] pl-[0.5rem] py-1 flex justify-left items-center",
    });
  }
  return (
    <li
      key={index}
      className="flex w-full border-l-4 border-solid border-red-600"
    >
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center gap-2 justify-between w-full px-1">
          <p className="font-bold">{product.productName}</p>
          <p className="font-bold text-lg">
            {product.paragraphPrice.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="flex items-center gap-2 justify-between w-full px-1 mt-1">
          <p className="text-center items-center">
            <i
              className="fa-solid fa-minus text-base text-gray-900 hover:text-red-500 hover:cursor-pointer"
              onClick={handleDecreaseClick}
            />
            <span className="px-2">{product.quantity}</span>
            <i
              className="fa-solid fa-plus text-base text-gray-900 hover:text-green-500 hover:cursor-pointer"
              onClick={handleIncreaseClick}
            />
          </p>
          <button onClick={handleRemoveClick}>
            <i className="fa-solid fa-trash text-base md:text-sm text-gray-900 hover:text-red-500 hover:cursor-pointer"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export { Product };