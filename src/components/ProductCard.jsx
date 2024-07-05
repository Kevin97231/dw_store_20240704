/* eslint-disable react/prop-types */
export const ProductCard = ({ product }) => {
  return (
    <div className="gap-2 p-2 bg-white border shadow-lg">
      <p className="font-semibold">{product.category}</p>
      <div className="flex gap-5">
        <img
          src={product.image}
          className="object-cover w-1/2 h-32 shadow-lg"
        />
        <div>
          <h4>{product.title}</h4>
          <h4>{product.price}€</h4>
        </div>
      </div>
      <div>{product.description}</div>
    </div>
  );
};
