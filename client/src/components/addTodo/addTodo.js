import React, { useState } from "react";
import Modal from "react-modal";
import "./addTodo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todosSlice";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "25%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function AddTodo() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const submitHandle = async (e) => {
    e.preventDefault();
    dispatch(addTodo({todoName:todoName, todoDescription: todoDescription})); 
    setTodoName("");
    setTodoDescription("");
    closeModal();
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <button className="btn btn-primary addTodoButton" onClick={openModal}>
        Add Todo
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-success">TODO</h2>
        <form onSubmit={submitHandle}>
          <div className="py-3">
            <label htmlFor="todoName" className="form-label">
              TODO Name
            </label>
            <input
              type="text"
              id="todoName"
              className="form-control"
              aria-describedby="todoNameHelpBlock"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
            <div id="todoNameHelpBlock" className="form-text ">
              Please insert a Todo Name.
            </div>
          </div>
          <div className="py-3">
            <label htmlFor="todoDescription" className="form-label">
              TODO Description
            </label>
            <input
              type="text"
              id="todoDescription"
              className="form-control"
              aria-describedby="todoDescriptionHelpBlock"
              value={todoDescription}
              onChange={(e) => setTodoDescription(e.target.value)}
            />
            <div id="todoDescriptionHelpBlock" className="form-text">
              Please insert a Todo Descripton. You are free to explain your TODO
              as you wish.
            </div>
          </div>
          <button className="btn btn-success submitButton" type="submit">
            Submit
          </button>
        </form>
        <div className="d-flex justify-content-center">
          <button onClick={closeModal} className="btn btn-danger">
            close
          </button>
        </div>
      </Modal>
    </div>
  );
}
