import React from "react";
import { useContext, useState } from "react";
import TableRow from "./TableRow";
import { Shop } from "../../context/ShopProvider";
import generateOrderObject from "../../services/generateOrderObject";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import FormComp from "../../components/Form";
import Spinner from "react-bootstrap/Spinner";
import "./style.css";
import Swal from "sweetalert2";

const Cart = () => {
  const { products, total, cleanCart } = useContext(Shop);

  const [vistaForm, setVistaForm] = useState(false);

  const [loader, setLoader] = useState(false);

  const confirmPurchase = async (dataDelFormulario) => {
    const { celular, nombre, email } = dataDelFormulario;
    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre,
        email,
        telefono: celular,
        cart: products,
        total: total(),
      });

      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart();

      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity,
        });
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "ID de tu orden: " + docRef.id,
        showConfirmButton: true,
      });
    } catch (error) {
    } finally {
      setLoader(false);
      setVistaForm(false);
    }
  };

  return (
    <>
      {products.length !== 0 ? (
        <>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">IMAGEN</th>
                <th scope="col">TITULO</th>
                <th scope="col">PRECIO</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">ELIMINAR</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return <TableRow key={product.id} product={product} />;
              })}
            </tbody>
          </table>
          <h2 className="total">TOTAL: ${total(products)}</h2>
          {loader ? (
            <Spinner animation="grow" variant="success" />
          ) : (
            <button className="comprar" onClick={() => setVistaForm(true)}>
              Confirmar compra
            </button>
          )}
        </>
      ) : (
        <>
          <img
            src="https://www.100natural.com/delivery100/web/vistas/img/cartempty.png"
            className="vacio"
            alt="carrito vacio"
          />
          <button className="volverInicio">
            <Link to="/">Volver al inicio</Link>
          </button>
        </>
      )}
      {vistaForm ? (
        <FormComp
          confirmPurchase={confirmPurchase}
          formVis={vistaForm}
          setFormVis={setVistaForm}
        />
      ) : null}
    </>
  );
};

export default Cart;
