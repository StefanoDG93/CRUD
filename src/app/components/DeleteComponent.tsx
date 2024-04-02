import React, { FC } from "react";

interface Product {
    id: number,
    handleClick: () => void,
}

const DeleteComponent: FC<Product> = ({ id, handleClick }) => {

    function DeleteProduct() {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }

        fetch(`http://localhost:5000/items/${id}`, requestOptions)
            .then(async response => {
                if (!response.ok) {
                    alert("Error");
                }
                handleClick();
            })
    }

    return (
        <button className="DeleteButton" onClick={DeleteProduct}>Delete</button>
    )
}

export default DeleteComponent;