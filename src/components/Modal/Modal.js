import { useState } from "react";
import "./Modal.css";

const Modal = ({ closeModal, handleSubmit }) => {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [checker, setChecker] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleID = (e) => {
    setID(e.target.value);
  };

  const isEmailWithTLD = (email) => {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(
      email
    );
  };

  const isEmail = (id) => {
    if (id === "") {
      return "empty";
    } else if (isEmailWithTLD(id)) {
      return "correct";
    } else if (!isEmailWithTLD(id)) {
      return "wrong";
    }
  };

  const handleTyping = () => {
    setChecker(true);
    setTimeout(() => {
      setChecker(false);
    }, "1000");
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
          <form
            id="form"
            onSubmit={(e) => handleSubmit(e, name, id, isEmailWithTLD(id))}
          >
            <div className="modalFormSection">
              <label htmlFor="fname">Full name: </label>
              <div className="modalInputFields">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={name}
                  onChange={handleName}
                />
              </div>
            </div>
            <div className="modalFormSection">
              <label htmlFor="email">E-mail: </label>
              <div className="modalInputFields">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={id}
                  onChange={handleID}
                  onKeyUp={handleTyping}
                />
                {isEmail(id) === "wrong" && !checker && (
                  <p style={{ fontSize: "0.04rem", color: "red" }}>
                    Wrong Email!
                  </p>
                )}
                {isEmail(id) === "correct" && !checker && (
                  <p style={{ fontSize: "0.04rem", color: "green" }}>
                    Correct Email!
                  </p>
                )}
                {checker && (
                  <p style={{ fontSize: "0.04rem", color: "orange" }}>
                    Checking...
                  </p>
                )}
              </div>
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
