import { useState } from "react";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../redux/cart/cart.selector";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false)

const productsCount = useSelector(selectProductsCount);
  return (
    <footer className="w-full bg-red-500 py-2 fixed bottom-0 z-10 flex items-center justify-center">
      <button
        className="flex items-center gap-2 text-white font-bold"
        onClick={() => {
          // console.log("VisibleModal = ", openModal);
          setOpenModal(true);
        }}
      >
        (<span className="w-3" id="cart-count">{productsCount}</span>) Ver meu carrinho
        <i className="fa fa-cart-plus text-lg text-white"></i>
      </button>
      <Modal
        isOpen={openModal}
        setModalClosed={() => setOpenModal(!openModal)}
      />
    </footer>
  );
}

export default Footer
