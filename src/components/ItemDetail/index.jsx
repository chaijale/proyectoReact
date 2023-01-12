import React from "react";

const ItemDetail = ({ detail }) => {
  return (
    <div>
      <div
        className="card"
        style={{
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={detail.image}
          className="card-img-top"
          alt="id...{detail.id}"
          style={{ width: "20rem", height: "20rem" }}
        />
        <div className="card-body">
          <h2 className="card-title">{detail.title}</h2>
          <h6 className="card-text">{detail.description}.</h6>
          <p className="card-text">
            Precio: <strong>$ {detail.price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
