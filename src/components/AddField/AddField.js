import "./AddField.css";

const AddField = () => {
  return (
    <>
      <input
        type="text"
        value="Add more Zikr"
        className="button-div"
        disabled
      />
      <button className="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-plus"
          width="3vw"
          height="3vh"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          // style={{ width: "30%", height: "30%" }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      </button>
    </>
  );
};

export default AddField;
