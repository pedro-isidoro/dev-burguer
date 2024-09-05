import { useSelector } from "react-redux";
import { Products } from "../products/Products";
import { useState } from "react";
import { selectProductsTotalPrice } from "../redux/cart/cart.selector";

const Modal = ({ isOpen, setModalClosed }) => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  //pegando o endereço
  const [ addressValue, setAddressValue ] = useState("")
  const handleChange = (e) => {
    setAddressValue(e.target.value)
  }
  
  //Enviar para a API do whatsapp
  function messageToWhatsApp () {
    const cartItemsToSend = products
      .map((product) => {
        return `${product.quantity}x ${product.productName} | `;
      })
      .join("");
    console.log(cartItemsToSend);
    const message = encodeURIComponent(cartItemsToSend)
    const phone = "5511970601261"

    window.open(
      `https://wa.me/${phone}?text=${message}%0ATotal do Pedido: R$${productsTotalPrice}%0AEndereço de entrega: ${addressValue}`,
      "_blank"
    );
  }

  //Ao finalizar o pedido
  const [readyToSend, setReadyToSend] = useState(false);
  const handleValues = () => {
    if (products.length <= 0) {
      alert("Adicione um Produto ao carrinho, ANTES de finalizar um pedido!");
    } else if (addressValue === "" || products.length <= 0) {
      setReadyToSend(true);
    } else {
      setReadyToSend(false);
      messageToWhatsApp();
      location.reload();
    }
  }

  
  if (isOpen) {
    return (
      <div
        className="bg-black/70 w-full h-full fixed top-0 left-0 z-30 items-center justify-center flex"
        id="modal-section"
      >
        <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
          <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
          <div
            id="cart-items"
            className="flex justify-center items-center m-2 flex-col"
          >
            <Products products={products} />
          </div>
          <p className="font-bold">
            Total:{" "}
            <span id="cart-total">
              {productsTotalPrice.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
          <p className="font-bold mt-4">Endereço de Entrega:</p>
          <input
            type="text"
            placeholder="Digite seu endereço completo"
            id="address"
            className="w-full border-2 p-1 rounded my-1"
            onChange={handleChange}
          />
          {readyToSend ? (
            <p id="address-warning" className="text-xs text-red-500 px-1">
              Digite seu endereço completo
            </p>
          ) : (
            <></>
          )}
          <div className="flex items-center justify-between mt-5 w-full">
            <button
              className="hover:text-red-500"
              id="close-modal-btn"
              onClick={setModalClosed}
            >
              Fechar
            </button>
            <button
              id="checkout-btn"
              className="bg-green-500 text-white px-4 py-1 rounded"
              onClick={handleValues}
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal
