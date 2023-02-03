import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import useFareBase from "../../hooks/useFareBase";
import Spinner from "react-bootstrap/Spinner";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, loading, error] = useFareBase(categoryId);

  return (
    <>
      {error && <h1>ERROR:{error} </h1>}
      {loading ? (
        <Spinner animation="grow" variant="success" />
      ) : (
        <ItemList productos={products} />
      )}
    </>
  );
};

export default ItemListContainer;
