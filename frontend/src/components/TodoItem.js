import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import NoteContext from "../context/notes/NoteContext";
const TodoItem = (props) => {
  const { deleteTodo, editTodo } = useContext(NoteContext);
  const { title, description, _id, tag } = props.todoItem;

  const [show, setShow] = useState(false);

  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");
  const [modalTag, setmodalTag] = useState("");

  const [modaltitlelable, setmodaltitlelable] = useState("Todo Title:");
  const [modaldesclable, setmodaldesclable] = useState("Todo Description:");
  const [modaltaglable, setmodaltaglable] = useState("Todo Tag:");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editandSave = () => {
    if (
      (modalTitle.length >= 5 && modalDesc.length >= 10, modalTag.length >= 3)
    ) {
      handleClose();
      editTodo(_id, modalTitle, modalDesc, modalTag);
    } else {
      setmodaltitlelable(
        modalTitle.length < 5 ? "Title Value is less than 5" : "Todo Title"
      );
      setmodaldesclable(
        modalDesc.length < 10
          ? "Description value is less than 10"
          : "Todo Description:"
      );
      setmodaltaglable(
        modalTag.length < 3 ? "Tag value is less than 3" : "Todo Tag:"
      );
    }
  };

  const onChangeModalTitle = (event) => {
    setmodalTitle(event.target.value);
  };
  const onChangeModalDesc = (event) => {
    setmodalDesc(event.target.value);
  };
  const onChangeModalTag = (event) => {
    setmodalTag(event.target.value);
  };

  return (
    <div className="col-md-3">
      <div className="card text-white bg-secondary my-3">
        <div className="card-body ">
          <h3 className="card-title ">{title}</h3>
          <p className="card-text  ">{description}</p>
          <h5>Tag: {tag}</h5>
          {/*Delete Button  */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formtodotitle">
                  <Form.Label>{modaltitlelable}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Todo Title"
                    onChange={onChangeModalTitle}
                    value={modalTitle}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formtododesc">
                  <Form.Label>{modaldesclable}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Todo Description"
                    onChange={onChangeModalDesc}
                    value={modalDesc}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formtodotag">
                  <Form.Label>{modaltaglable}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Todo Tag"
                    onChange={onChangeModalTag}
                    value={modalTag}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={editandSave}>
                Update Todo
              </Button>
            </Modal.Footer>
          </Modal>

          <i
            className="bi bi-trash"
            onClick={() => {
              deleteTodo(_id);
              // props.refetch();
            }}
          ></i>
          {/* Edit Button */}
          <i
            className="bi bi-pencil-square mx-3"
            onClick={() => {
              handleShow();
              setmodalTitle(title);
              setmodalDesc(description);
              setmodalTag(tag);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
