import { Product } from "../product/Product";

const Products = ({ products }) => {
  return (
      <ul className="grid grid-cols-1 gap-7 md:gap-5 w-full my-4 max-h-[17rem] overflow-y-auto">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <p></p>
        )}
      </ul>
  );
};

export { Products };
