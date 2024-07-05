import { useEffect, useState } from "react";
import { Title } from "../Title";
import { useAxios } from "../../hooks/useAxios";
import { ProductList } from "../ProductList";
import { Pagination } from "../Pagination";

export const Product = () => {
  let initialPage = {
    _page: 1,
    _perPage: 8,
  };

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(initialPage._page);
  const [perPage, setPerPage] = useState(initialPage._perPage);

  const { get, loading } = useAxios();

  useEffect(() => {
    const endPoint = `?_page=${page}&_per_page=${perPage}`;

    get(endPoint).then((response) => {
      setProducts(response.data);
      console.log(products);
    });
  }, [page, perPage]);

  const clickOnPaginationButton = (number) => {
    setPage(number);
    console.log(number);
  };

  return (
    <>
      <div className="w-full">
        <Title>Mes produits</Title>
        {loading ? <>CHARGEMENT</> : <ProductList products={products} />}
        <div className="m-auto my-5 w-fit">
          <Pagination handleClick={clickOnPaginationButton} />
        </div>
      </div>
    </>
  );
};
