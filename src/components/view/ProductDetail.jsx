import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { get, loading } = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await get(`/${id}`);
      setProduct(response);
    };
    fetchData();
  }, []);

  // LOGIQUE REDUX

  const dispatch = useDispatch();

  // ______________________________________

  return (
    <>
      <h1>Détail du produit</h1>;
      {loading ? (
        <p>CHARGEMENT</p>
      ) : (
        <div>
          <ProductCard product={product} />
          <button className="btn" onClick={() => dispatch(addProduct(product))}>
            AJOUTER A MON PANIER
          </button>
        </div>
      )}
    </>
  );
};
