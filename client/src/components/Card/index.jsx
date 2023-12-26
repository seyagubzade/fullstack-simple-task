import React, { useEffect } from "react";

const Card = ({ item }) => {
  useEffect(() => {
    console.log("Card>>>", item);
  }, [item]);
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {item.isOnSale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}

        <img
          className="card-img-top"
          src={
            item?.image || "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          }
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
            </div>
            ${item.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
