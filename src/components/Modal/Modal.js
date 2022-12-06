import { useState } from "react";
import "./Modal.css";

const Modal = ({ closeModal, handleSubmit }) => {
  const [name, setName] = useState("");
  const [id, setID] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleID = (e) => {
    setID(e.target.value);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTitle">
          <h1>Confirm your pledge</h1>
          <div className="modalCloseButton">
            <button onClick={() => closeModal(false)}>&times;</button>
          </div>
        </div>
        <div className="modalBody">
          <p style={{ marginTop: "0" }}>
            Please let us know your name so that we can thank you!
          </p>
          <form id="form" onSubmit={(e) => handleSubmit(e, name, id)}>
            <div className="modalFormSection">
              <label htmlFor="fname">Full name: </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="modalFormSection">
              <label htmlFor="email">E-mail: </label>
              <input
                type="text"
                id="email"
                name="email"
                value={id}
                onChange={handleID}
              />
            </div>
          </form>
        </div>
        <div className="modalFooter">
          <button onClick={() => closeModal(false)} id="cancelBtn">
            Cancel
          </button>
          <button type="submit" form="form">
            Pledge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
