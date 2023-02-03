import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./style.css";

const FormComp = ({ confirmPurchase, formVis, setFormVis }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataDelFormulario) => {
    confirmPurchase(dataDelFormulario);
  };

  const handleClose = () => {
    setFormVis(false);
  };

  return (
    <>
      <Modal show={formVis} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pedido a confirmar</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <label className="titulo">Nombre: </label>
            <input
              {...register("nombre", {
                required: true,
                maxLength: 1000,
                minLength: 2,
              })}
            />
            {errors?.nombre?.type === "required" && (
              <p>El campo nombre es obligatorio</p>
            )}
            {errors?.nombre?.type === "maxLength" && (
              <p>El maximo de caracteres es de 1000</p>
            )}
            {errors?.nombre?.type === "minLength" && (
              <p>El minimo de caracteres es de 2</p>
            )}
            <label className="titulo">Email: </label>
            <input
              type="email"
              {...register("email", { minLength: 8, required: true })}
            />
            {errors?.email?.type === "minLength" && (
              <p>El mail tiene que tener minimo 8 caracteres</p>
            )}
            {errors?.email?.type === "required" && (
              <p>El campo email es obligatorio</p>
            )}
            <label className="titulo">Telefono: </label>
            <input
              type="number"
              {...register("celular", {
                min: 10,
                maxLength: 10,
                required: true,
              })}
            />
            {errors?.celular?.type === "minLength" && (
              <p>El teléfono debe tener al menos 10 digitos</p>
            )}
            {errors?.celular?.type === "required" && (
              <p>El campo telefono es obligatorio</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" type="submit">
              Confirmar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormComp;
