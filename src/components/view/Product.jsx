import { useEffect, useState } from "react";
import { Title } from "../Title";
import { useAxios } from "../../hooks/useAxios";
import { ProductList } from "../ProductList";

export const Product = () => {
  const [products, setProducts] = useState([]);

  const { get, loading } = useAxios();

  useEffect(() => {
    get().then((response) => {
      setProducts(response);
      console.log(products);
    });
  }, []);

  return (
    <>
      <div className="w-full">
        <Title>Mes produits</Title>
        {loading ? <>CHARGEMENT</> : <ProductList products={products} />}
      </div>
    </>
  );
};
