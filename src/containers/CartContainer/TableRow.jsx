import React, { useContext } from "react";
import { Shop } from "../../context/ShopProvider";

const TableRow = ({ product }) => {
  const { removeProduct } = useContext(Shop);
  return (
    <>
      {
        <tr>
          <th scope="row">{product.id}</th>
          <td>
            <img
              src={product.image}
              alt="producto-tabla"
              style={{ height: 100 }}
            ></img>
          </td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>
            <button
              className="eliminar"
              onClick={() => removeProduct(product.id)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      }
    </>
  );
};

export default TableRow;
