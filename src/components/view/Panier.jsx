import { useSelector } from "react-redux";
import { ProductList } from "../ProductList";
import { Title } from "../Title";

export const Panier = () => {
  const products = useSelector((state) => state.myCart.value);

  return (
    <>
      <Title>Mon panier</Title>
      <ProductList products={products} />
    </>
  );
};
