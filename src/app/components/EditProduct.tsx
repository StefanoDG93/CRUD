import { endianness } from "os";
import React, { FC } from "react";
import { ReactDOM, useState } from "react";
import Modal from "react-modal";

interface Product {
  id: number,
  item: { name: string },
  handleClick: () => void,
}

const EditComponent: FC<Product> = ({ id, item, handleClick }) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      bottom: 'auto',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
      background: "black",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
    }
    fetch(`http://localhost:5000/items/${id}`, requestOptions)
      .then(async response => {
        if (!response.ok) {
          alert("Error");
        }
        closeModal();
        handleClick();
      })
  }

  return (
    <div>
      <button className="EditButton" onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="grid gap-6">
          <button className="text-xs  place-self-end" onClick={closeModal}>X</button>
          <p className="text-white mb-6 text-xl text-center ">Edit Product</p>
          <form onSubmit={handleSubmit}>
            <input name="name" defaultValue={item.name} className="bg-black text-white h-11 pl-2 rounded-md border-b-2"></input>
            <button type="submit" className="EditButtonModal ml-4 mb-10">Edit</button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default EditComponent;