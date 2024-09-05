import { useDispatch } from "react-redux";
import burguersList from "/src/json/burguersList.json";
import drinksList from "/src/json/drinksList.json";
import { addProductToCart } from "../redux/cart/actions";
import { toast, Toaster } from "sonner";

export function notify() {
  toast.success("Adicionado ao carrinho!", {
    duration: 2000,
    className:
      "w-[14rem] h-[1.8rem] pl-[0.5rem] py-1 flex justify-left items-center",
  });
}

export default function MainSection() {
  const dispatch = useDispatch();
  const handleProductClick = (product) => {
    dispatch(addProductToCart(product));
    notify()
  }

  return (
    <main>
      <Toaster position="top-right" expand={false} richColors className="flex justify-end" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça nosso Menu
      </h2>
      <section id="menu">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-6xl px-4 xl:px-2 mb-16">
          {burguersList.length > 0 ? (
            burguersList.map((product, index) => (
              <li key={index} className="flex gap-[0.75rem]">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-6 duration-300"
                />
                <div>
                  <p className="font-bold">{product.productName}</p>
                  <p className="text-sm">{product.productDescription}</p>
                  <div className="flex items-center gap-2 justify-between mt-3">
                    <p className="font-bold text-lg">
                      {product.paragraphPrice.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <button
                      className="bg-gray-900 px-5 rounded add-to-cart-btn"
                      data-name={product.buttonDataName}
                      data-price={product.buttonDataPrice}
                      onClick={() => handleProductClick(product)}
                    >
                      <i className="fa fa-cart-plus text-sm text-white"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-xl font-bold text-center text-red-800">
              Lanches sendo Buildados...
            </p>
          )}
        </ul>
        <div className="mx-auto max-w-6xl px-4 xl:px-2 my-2">
          <h2 className="font-bold text-3xl">Bebidas</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-6xl px-4 xl:px-2 mb-16">
          {drinksList.length > 0 ? (
            drinksList.map((product, index) => (
              <li key={index} className="flex gap-[0.75rem] w-full">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-6 duration-300"
                />
                <div className="w-full">
                  <p className="font-bold">{product.productName}</p>
                  <div className="flex items-center gap-2 justify-between mt-3">
                    <p className="font-bold text-lg">
                      {product.paragraphPrice.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <button
                      className="bg-gray-900 px-5 rounded add-to-cart-btn"
                      data-name={product.buttonDataName}
                      data-price={product.buttonDataPrice}
                      onClick={() => handleProductClick(product)}
                    >
                      <i className="fa fa-cart-plus text-sm text-white"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-xl font-bold text-center text-red-800">
              Bebidas sendo Buildados...
            </p>
          )}
        </ul>
      </section>
    </main>
  );
}